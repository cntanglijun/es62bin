#!/usr/bin/env node

import 'babel-polyfill';
import 'colors';
import program from 'commander';
import fs from 'fs';
import fse from 'fs-extra';
import compiler from '../lib/compiler';
import { version } from '../package.json';

let path;

program
  .version( version )
  .arguments( '<path>' )
  .option( '-o --out-file [path]', ' Compile `es6` files into a `bin` file' )
  .option( '-w --watch', 'Recompile files on changes' )
  .action( ( p ) => {
    path = p;

    _exists( path )
      .then( () => {
        return _isFile( path )
      } )
      .then( file => {
        if ( file ) {
          if (program.watch) {
            console.log('Recompile files on changes. Press `Ctrl + C` to stop'.yellow);
            fs.watchFile(path, () => {
              _compile();
            });
          }
          _compile();
        } else {
          console.log( 'Sorry, only supports single file at present'.yellow );
        }
      } )
      .catch( err => {
        console.log( err.message.red );
      } );
  } )
  .parse( process.argv );

function _compile() {
  fse.outputFileSync( program.outFile || path, compiler( path ), 'utf8' );
  console.log( 'compiled: '.cyan + path + ' => ' + program.outFile.magenta );
}

function _isFile( path ) {
  return new Promise( ( resolve, reject ) => {
    fs.stat( path, ( err, stats ) => {
      if ( err ) {
        reject( err );
      } else {
        resolve( stats.isFile() );
      }
    } );
  } );
}

function _exists( path ) {
  return new Promise( ( resolve, reject ) => {
    fs.access( path, fs.constants.F_OK, err => {err ? reject( err ) : resolve()} );
  } );
}

if ( Object.is( path, undefined ) ) {
  console.log( 'Use `es62bin -h` to get more information.'.yellow );
  process.exit( 1 );
}
