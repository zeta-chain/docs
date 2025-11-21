import { useRouter } from "next/router";

/**
 * 标准化路径，移除尾部斜杠（除非是根路径）
 */
export const normalizePath = (path: string): string => {
  if (path === "/") return "/";
  return path.replace(/\/$/, "") || "/";
};

/**
 * 从路径中移除 locale 前缀
 */
export const removeLocalePrefix = (path: string, locales: string[] = ["en-US", "zh-CN"]): string => {
  const localePattern = locales.map(locale => `/${locale}`).join("|");
  const regex = new RegExp(`^(${localePattern})`);
  return path.replace(regex, "");
};

/**
 * 比较两个路径是否匹配（处理 locale 和尾部斜杠）
 */
export const isPathMatch = (path1: string, path2: string, router: ReturnType<typeof useRouter>): boolean => {
  // 标准化路径
  let normalizedPath1 = normalizePath(path1);
  let normalizedPath2 = normalizePath(path2);

  // 如果 router.asPath 存在，使用它来获取完整路径（包含 locale）
  // 但 router.pathname 通常不包含 locale，所以需要从 asPath 中移除 locale 来比较
  const locales = router.locales || ["en-US", "zh-CN"];
  
  // 移除 locale 前缀
  normalizedPath1 = removeLocalePrefix(normalizedPath1, locales);
  normalizedPath2 = removeLocalePrefix(normalizedPath2, locales);

  // 再次标准化（处理移除 locale 后可能的双斜杠）
  normalizedPath1 = normalizePath(normalizedPath1);
  normalizedPath2 = normalizePath(normalizedPath2);

  return normalizedPath1 === normalizedPath2;
};

/**
 * 检查路径是否以某个前缀开始（处理 locale 和尾部斜杠）
 */
export const isPathStartWith = (fullPath: string, prefix: string, router: ReturnType<typeof useRouter>): boolean => {
  const normalizedFull = normalizePath(removeLocalePrefix(fullPath, router.locales || ["en-US", "zh-CN"]));
  const normalizedPrefix = normalizePath(removeLocalePrefix(prefix, router.locales || ["en-US", "zh-CN"]));
  
  if (normalizedPrefix === "/") return normalizedFull === "/";
  
  return normalizedFull.startsWith(normalizedPrefix + "/") || normalizedFull === normalizedPrefix;
};