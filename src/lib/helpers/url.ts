export const isExternalLink = (href: string): boolean => {
  return /^https?:\/\//.test(href);
};
