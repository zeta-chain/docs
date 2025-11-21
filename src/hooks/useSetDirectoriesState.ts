// import { getAllPages } from "nextra/context";
// import { useEffect, useMemo } from "react";
// import { useRouter } from "next/router";
// import { useAppDispatch } from "../lib/app.store";
// import { setDirectories, setPages } from "../lib/directories/directories.redux";
// import { getDirectories } from "../lib/helpers/nextra";

// export const useSetDirectoriesState = () => {
//   const allPages = getAllPages();
//   const router = useRouter();
//   // ✅ 临时日志：查看页面结构
//   if (allPages.length > 0) {
//     console.log('🔵 getAllPages() 返回的页面:', allPages[7]);
//   }
//   const { flatDirectories, directoriesByRoute } = useMemo(() => getDirectories(allPages), [allPages]);

//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     if (!allPages.length) return;

//     dispatch(setPages(allPages));
//   }, [allPages]);

//   useEffect(() => {
//     if (!flatDirectories.length || !directoriesByRoute) return;

//     dispatch(setDirectories({ flatDirectories, directoriesByRoute }));
//   }, [flatDirectories, directoriesByRoute]);
// };
import { getAllPages } from "nextra/context";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

import { useAppDispatch } from "../lib/app.store";
import { setDirectories, setPages } from "../lib/directories/directories.redux";
import { getDirectories } from "../lib/helpers/nextra";

export const useSetDirectoriesState = () => {
  const router = useRouter();  // 添加这一行获取当前 locale
  const allPages = getAllPages();  
  
  // useEffect(() => {
  //   if (allPages.length > 0) {
  //     console.log('🔵 第一个页面对象结构:', {
  //       route: allPages[0].route,
  //       locale: (allPages[0] as any).locale,
  //       name: (allPages[0] as any).name,
  //       kind: allPages[0].kind,
  //     });
  //     // 打印前几个页面的详细信息
  //     allPages.slice(0, 3).forEach((page, idx) => {
  //       console.log(`🔵 页面 ${idx}:`, {
  //         route: page.route,
  //         locale: (page as any).locale,
  //         name: (page as any).name,
  //         kind: page.kind,
  //       });
  //     });
  //   }
  // }, [allPages]);

  // 从文件名或 route 中提取 locale
  const extractLocaleFromPage = (page: typeof allPages[0]): string | null => {
    // 方法 1: 从 page.locale 属性获取（如果存在）
    if ('locale' in page && (page as any).locale) {
      return (page as any).locale;
    }

    // 方法 2: 从 page.name 中提取（例如 "index.zh-CN" -> "zh-CN"）
    if ('name' in page && (page as any).name) {
      const name = (page as any).name as string;
      const match = name.match(/\.(en-US|zh-CN)(\.|$)/);
      if (match) {
        return match[1];
      }
    }

    // 方法 3: 从 route 中提取（例如 "/zh-CN/developers/evm" -> "zh-CN"）
    if (page.route) {
      const routeMatch = page.route.match(/\/(en-US|zh-CN)(\/|$)/);
      if (routeMatch) {
        return routeMatch[1];
      }
    }

    // 如果没有找到 locale，返回 null（可能是默认语言或无 locale 的页面）
    return null;
  };

  // 新增过滤逻辑（替换原来的日志代码）
  // 根据当前 locale 过滤页面，避免显示重复内容
  const filteredPages = useMemo(() => {
    if (!router.locale || !allPages.length) return allPages;

    // 过滤函数：根据 locale 属性过滤页面
    const filterByLocale = (pages: typeof allPages, targetLocale: string): typeof allPages => {
      return pages
        .map((page) => {
          if (page.kind === "Folder" && "children" in page) {
            // 递归过滤子页面
            const filteredChildren = filterByLocale(page.children, targetLocale);
            
            // 如果过滤后没有子页面，不显示这个文件夹
            if (filteredChildren.length === 0) return null;
            
            return {
              ...page,
              children: filteredChildren,
            };
          } else {
            // 从页面对象中提取 locale
            const pageLocale = extractLocaleFromPage(page);

            // 如果页面有明确的 locale 属性
            if (pageLocale) {
              // 如果匹配目标 locale，保留它
              return pageLocale === targetLocale ? page : null;
            }

            // 如果页面没有 locale 属性：
            // - 如果目标是默认语言，保留它（默认语言的页面可能没有 locale 后缀）
            // - 如果目标不是默认语言，过滤掉它（没有 locale 后缀的页面应该只在默认语言时显示）
            if (targetLocale === router.defaultLocale) {
              return page;
            }
            
            // 非默认语言时，没有 locale 的页面应该被过滤掉
            return null;
          }
        })
        .filter((page): page is typeof allPages[0] => page !== null);
    };

    return filterByLocale(allPages, router.locale);
  }, [allPages, router.locale, router.defaultLocale]);

  // useEffect(() => {
  //   console.log('🔵 当前 locale:', router.locale);
  //   console.log('🔵 所有页面数量:', allPages.length);
  //   console.log('🔵 过滤后页面数量:', filteredPages.length);
  //   console.log('🔵 过滤后的第一个页面:', filteredPages[0]?.route, (filteredPages[0] as any)?.locale);
  // }, [router.locale, allPages.length, filteredPages.length]);
  // 使用 filteredPages 而不是 allPages
  const { flatDirectories, directoriesByRoute } = useMemo(
    () => getDirectories(filteredPages),
    [filteredPages]
  );

  const dispatch = useAppDispatch();

  // 使用 filteredPages 而不是 allPages
  useEffect(() => {
    if (!filteredPages.length) return;

    dispatch(setPages(filteredPages));
  }, [filteredPages, dispatch]);

  useEffect(() => {
    if (!flatDirectories.length || !directoriesByRoute) return;

    dispatch(setDirectories({ flatDirectories, directoriesByRoute }));
  }, [flatDirectories, directoriesByRoute]);
};