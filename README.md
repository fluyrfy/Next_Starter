網路前端開發架構模板

## 簡介

經由 `next-starter` 快速產生的專案，內建 `Next.js/ts` 開發用環境。

## 資源介紹

- style
  - scss
  - linaria
  - next-linaria
- locale
  - i18n
- lint
  - eslint
  - ts eslint
  - husky
  - lint-staged
- format
  - prettier
- test
  - jest
  - cypress
- optimization
  - lighthouse-ci
  - github-action

其他更多插件功能請參考 [Next.js 官方文檔](https://nextjs.org/)

## 如何開始

- 安裝 nodejs v14 以上的版本

- 使用 npx 安裝此模板

```
npx degit ServiceKiitzu/next-starter your-project-name
```

- 安裝依賴套件

```
pnpm i
```

啟動開發 server

```
pnpm dev
```

即可在 <http://localhost:3000> 看到本地伺服器並開發 😊

## 專案架構

此架構是參考 [Atom design](http://bradfrost.com/blog/post/atomic-web-design/) 和 [Fractal Project Structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) 所整理出來

components

- **atom**: 原子 component ，不可再分割的基本 component， ex `button`, `label`, `html tag`

- **molecules**: 分子 component，由原子組成的基本 component， ex `地址輸入欄位` (包含 `label`, `input`, `button` 等)

- **organisms**: 組織 component，由原子、分子組成的多功能 component， ex `header`, `footer`
