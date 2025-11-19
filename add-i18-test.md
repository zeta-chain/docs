## work repoter

I am try to reading the nextra/next.js & i18n official docs to add a touch-down button on zetachain docs. Help users can click to switch en & zh, and other languages.

### reading
- https://github.com/shuding/nextra/blob/main/packages/nextra-theme-docs/src/components/locale-switch.tsx
- https://nextra-v2-oe0zrpzjp-shud.vercel.app/docs/guide/i18n

denis dev a demo to help me understand how i18n work, I have been read.

- https://docs-v2-git-feat-i18n.zetachain.app/start/app
- https://docs-v2-git-feat-i18n.zetachain.app/zh-CN/start/app

### developing
[2025.11.19 09:29] I have been modify `next.config.js` and `/src/theme.config.tsx` to add i18n languages switch feature. testing in cloud server always downtime, so I use my local pc try again.

[2025.11.19 15:15] in macmini is successfully add i18n. I match the en & zh pages:

- [x] about
- [x] developers
- [x] nodes
- [x] reference
- [x] start
- [x] users

I add the nextra LocaleSwitch to switch languages, now is support en & zh.

in `src` add the new file `middleware.js`, will help to match the files path.

every english docs is named `xxx.en-US`, every chinese docs is named `xxx.zh-CN`.

but now have three questions in this branch.

1. the sidebar is not turn with the language switch
2. when user click someone page, the sidebar is not highlight.
3. in nextra setting, `index.en-US` or `index.zh-CN` will be redirect to the father path, but the true path is the children. such as view `http://localhost:3001/zh-CN/developers/evm` is 404 not found. I am check the problem, but need some times.