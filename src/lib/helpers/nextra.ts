import { capitalize } from "lodash-es";
import { Page } from "nextra";

export const getPageTitle = (page: Page) => (page.meta?.title ? String(page.meta.title) : capitalize(page.name));

export const getPageDescription = (page: Page) => (page.meta?.description ? String(page.meta.description) : undefined);

export const getPageReadTime = (page: Page) => (page.meta?.readTime ? String(page.meta?.readTime) : undefined);

export const getPageReadType = (page: Page) => (page.meta?.readType ? String(page.meta?.readType) : undefined);
