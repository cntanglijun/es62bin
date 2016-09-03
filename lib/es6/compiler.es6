import 'babel-polyfill';
import { transformFileSync } from 'babel-core';

const binHeader = '#!/usr/bin/env node\n';

export default path => {
  return binHeader + transformFileSync(path, {
      presets: 'latest',
      minified: true,
      compact: true
    }).code;
};
