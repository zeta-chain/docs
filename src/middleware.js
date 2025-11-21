// src/middleware.js
import { locales as nextraLocales } from "nextra/locales";

export function middleware(request) {
  console.log('🔵 Middleware 执行:', request.nextUrl.pathname);
  console.log('🔵 Cookie:', request.cookies.get('NEXT_LOCALE')?.value);
  return nextraLocales(request);
}