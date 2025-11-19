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
import { useRouter } from "next/router";  // ✅ 第2行：添加这个导入
import { useEffect, useMemo } from "react";

import { useAppDispatch } from "../lib/app.store";
import { setDirectories, setPages } from "../lib/directories/directories.redux";
import { getDirectories } from "../lib/helpers/nextra";

export const useSetDirectoriesState = () => {
  const router = useRouter();  // ✅ 第10行：添加这一行获取当前 locale
  const allPages = getAllPages();

  // ✅ 第13-48行：新增过滤逻辑（替换原来的日志代码）
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
            // 检查页面对象的 locale 属性
            // 如果页面有 locale 属性且匹配当前 locale，保留它
            if ('locale' in page && page.locale) {
              return page.locale === targetLocale ? page : null;
            }
            // 如果页面没有 locale 属性（可能是旧格式），保留它
            return page;
          }
        })
        .filter((page): page is typeof allPages[0] => page !== null);
    };

    return filterByLocale(allPages, router.locale);
  }, [allPages, router.locale]);

  // ✅ 第50行：使用 filteredPages 而不是 allPages
  const { flatDirectories, directoriesByRoute } = useMemo(
    () => getDirectories(filteredPages),
    [filteredPages]
  );

  const dispatch = useAppDispatch();

  // ✅ 第56行：使用 filteredPages 而不是 allPages
  useEffect(() => {
    if (!filteredPages.length) return;

    dispatch(setPages(filteredPages));
  }, [filteredPages, dispatch]);

  useEffect(() => {
    if (!flatDirectories.length || !directoriesByRoute) return;

    dispatch(setDirectories({ flatDirectories, directoriesByRoute }));
  }, [flatDirectories, directoriesByRoute]);
};