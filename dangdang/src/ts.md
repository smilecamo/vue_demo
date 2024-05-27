在 TypeScript 中，`reference` 和 `import` 是两种不同的导入和引用代码的方式。它们有不同的用途和语法。下面是对这两者的详细解释：

### `reference`

`reference` 是 TypeScript 特有的指令，用于在文件之间引用类型声明文件（通常是 `.d.ts` 文件）。它使用三斜线（`///`）指令的形式，并在文件的顶部声明。

#### 用途

- **引用类型声明文件**：主要用于旧的 TypeScript 项目或者需要引用第三方库的类型定义时。
- **声明文件的顺序**：在需要控制文件编译顺序时使用。

#### 语法

```typescript
/// <reference path="path/to/file.d.ts" />
```

#### 示例

假设你有一个类型声明文件 `globals.d.ts`：

```typescript
// globals.d.ts
declare var globalVar: string;
```

你可以在另一个 TypeScript 文件中引用这个声明文件：

```typescript
/// <reference path="./globals.d.ts" />

console.log(globalVar);
```

### `import`

`import` 是 ES6（也称为 ES2015）引入的一部分，用于在模块系统中导入其他文件或模块的内容。TypeScript 支持 ES6 模块系统，并扩展了其功能来支持类型导入。

#### 用途

- **模块化代码**：在现代 JavaScript/TypeScript 项目中进行模块化开发。
- **导入和导出**：从一个模块中导入和导出变量、函数、类、接口、类型等。

#### 语法

- **导入默认导出**：
  ```typescript
  import defaultExport from "module";
  ```
- **导入命名导出**：
  ```typescript
  import { namedExport } from "module";
  ```
- **导入所有导出**：
  ```typescript
  import * as name from "module";
  ```
- **导入类型**（TypeScript 特有）：
  ```typescript
  import type { SomeType } from "module";
  ```

#### 示例

假设你有一个模块 `math.ts`：

```typescript
// math.ts
export function add(x: number, y: number): number {
  return x + y;
}

export const PI = 3.14;
```

你可以在另一个文件中导入并使用它们：

```typescript
// main.ts
import { add, PI } from "./math";

console.log(add(2, 3)); // 输出: 5
console.log(PI); // 输出: 3.14
```

### 区别总结

- **作用域**：

  - `reference`：主要用于引用类型声明文件，适用于旧项目或需要特定声明顺序的情况。
  - `import`：用于模块化代码，适用于现代 JavaScript/TypeScript 项目，支持导入变量、函数、类、类型等。

- **用法场景**：

  - `reference`：适合引用全局类型声明，或者在某些特殊情况下需要引用特定顺序的声明文件。
  - `import`：适合模块化开发，导入和导出代码片段，使代码更加组织和维护。

- **语法**：
  - `reference`：使用 `/// <reference path="..." />` 语法。
  - `import`：使用 ES6 模块语法，如 `import { ... } from '...'`。

现代 TypeScript 项目通常推荐使用 `import` 来进行模块化开发，而 `reference` 更多用于兼容旧有代码或特定类型声明文件的引用。
