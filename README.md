# react-components-starter

A starter for creating a React component library.

## 安装

```bash
pnpm add react-components-starter
# 或
npm install react-components-starter
```

### Peer Dependencies

| 平台 | 需要安装 |
|------|----------|
| 所有平台 | `react` |
| React Native / Expo | `react-native` |
| Web（Vite、Webpack 等） | `react-dom` |

Expo Web 项目一般已有 `react-native` 和 `react-native-web`，无需额外配置。

## 导入方式

**所有平台用同样的 import 路径**，不需要 `@web` / `@native` 后缀，也不需要装两个包。  
具体加载哪份代码，由消费方 bundler 根据 `package.json` 的 `exports` 条件自动选择。

### 主入口（组件）

```tsx
import { MyButton, Token } from "react-components-starter";
import type { TokenProps } from "react-components-starter";
```

#### 使用示例

**React Native / Expo**

```tsx
import { Token } from "react-components-starter";

export function Example() {
  return (
    <Token
      token={{
        text: "こんにちは",
        pos: "感動詞",
        start: 0,
        end: 5,
      }}
    />
  );
}
```

**Vite / Webpack（纯 Web）**

```tsx
import { Token } from "react-components-starter";

export function Example() {
  return (
    <Token
      token={{
        text: "hello",
        pos: "INTJ",
        start: 0,
        end: 5,
      }}
    />
  );
}
```

### 底层 primitives 子路径（可选）

如需直接使用跨平台抽象层（`View`、`Text`、`StyleSheet`），可导入：

```tsx
import { View, Text, StyleSheet } from "react-components-starter/primitives";
```

库内组件写法（开发本库时）：

```tsx
import { StyleSheet, Text } from "./primitives";
```

## 各平台实际加载的文件

发布时 **只发一个 npm 包**，`dist/` 内包含多份构建产物：

| 文件 | 用途 |
|------|------|
| `dist/index.js` | Web（Vite、Webpack 等） |
| `dist/index.native.js` | React Native（Metro、Expo） |
| `dist/primitives.js` | Web 版 primitives |
| `dist/primitives.native.js` | RN 版 primitives |

`package.json` 中的条件导出：

```json
{
  "exports": {
    ".": {
      "react-native": "./dist/index.native.js",
      "default": "./dist/index.js"
    },
    "./primitives": {
      "react-native": "./dist/primitives.native.js",
      "default": "./dist/primitives.js"
    }
  }
}
```

| 消费方 | 解析条件 | 实际文件 | 运行时组件 |
|--------|----------|----------|------------|
| Metro / Expo（iOS、Android） | `react-native` | `index.native.js` | `react-native` 的 `Text` 等 |
| Expo Web（react-native-web） | `react-native` | `index.native.js` | 由 rn-web 映射到 DOM |
| Vite | `default` | `index.js` | 自研 `div` / `span` 实现 |
| Webpack | `default` | `index.js` | 自研 `div` / `span` 实现 |

## 发包

只需发布 **一个包**，无需 Web / RN 分包：

```bash
pnpm run build   # 构建 dist/（含 index.js 与 index.native.js）
npm publish      # prepublishOnly 会自动执行 build
```

## Development

- Install dependencies:

```bash
npm install
```

- Run the playground:

```bash
npm run play
```

- Run the unit tests:

```bash
npm run test
```

- Build the library:

```bash
npm run build
```
