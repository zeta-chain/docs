import nextraDocsThemeConfig from "~/theme.config";

export function getGitHubEditUrl(route: string): string {
  let githubFilePath = route
    .replace(/^\//, "")
    .replace(/\[\[...(.+)\]\]/, "$1")
    .replace(/\[([^\]]+)\]/g, "$1")
    .replace(/\/$/, "");
  if (githubFilePath === "") githubFilePath = "index";
  githubFilePath = `src/pages/${githubFilePath}.mdx`;
  return `${nextraDocsThemeConfig.docsRepositoryBase}/edit/main/${githubFilePath}`;
}
