import 'babel-polyfill';
import assert from 'assert';
import compiler from '../lib/compiler';
import path from 'path';
import { transformFileSync } from 'babel-core';

describe('es62bin', () => {
  it( 'should return code`s header is `#!/usr/bin/env node`', () => {
    const fileName = path.join(__dirname, './fixtures/demo.es6');
    const myRes = compiler(fileName);
    const babelRes = transformFileSync(fileName, {
      presets: 'latest',
      minified: true,
      compact: true
    }).code;

    assert.equal( myRes,  '#!/usr/bin/env node\n' + babelRes);
  } );
} );
