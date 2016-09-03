# es62bin-cli
[![Build Status](https://travis-ci.org/cntanglijun/es62bin-cli.svg?branch=master)](https://travis-ci.org/cntanglijun/es62bin-cli)
[![npm](https://img.shields.io/npm/dm/es62bin-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/es62bin-cli)
[![npm](https://img.shields.io/npm/v/es62bin-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/es62bin-cli)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/cntanglijun/es62bin-cli/master/LICENSE.md)

用于将 es6 文件转换成 bin 格式文件

## Nodejs's `bin`

Nodejs 中的命令行工具需要在根目录建立 bin 文件夹, 在 bin 文件中的头部添加

```js
#!/usr/bin/env node
```

es62bin 的任务就是省去手动添加这行代码的步骤。因为我们不一定每时每刻都能记住这行代码。

## Installation

```bash
npm i es62bin-cli -g
```

## Usage

```bash
es62bin <path> [option]
```

|参数             |说明            |
|:---------------:|:--------------:|
|&lt;path&gt;|指定 es6 文件名|
|--out-file [path]|指定输出编译后的文件名|
|--watch|监视文件变动并重新编译|
|-V|查看版本号|
|-h|查看帮助|

## License

MIT
