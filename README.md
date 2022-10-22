# hardhat-Create2any

Hardhat plugin to automatically deploy the [`create2any`](https://github.com/ysqi/create2any) contract.

## Installation

```bash
yarn add --dev hardhat-create2any
```

Import the plugin in your `hardhat.config.js`:

```js
require("hardhat-create2any");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "hardhat-create2any";
```

You also can run it as hardhat task:

```ts
hre.run("ensureCreate2any");
```