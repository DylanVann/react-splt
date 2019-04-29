import commonjs from 'rollup-plugin-commonjs'
import autoExternal from 'rollup-plugin-auto-external'
import resolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import compiler from '@ampproject/rollup-plugin-closure-compiler'

import pkg from './package.json'

const extensions = ['.js']

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'default',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'default',
            sourcemap: true,
        },
        {
            file: pkg.umd,
            format: 'umd',
            exports: 'default',
            name: 'Splitterer',
            sourcemap: true,
            globals: {
                react: 'React',
            },
        },
    ],
    plugins: [
        autoExternal(),
        commonjs(),
        resolve({ extensions }),
        compiler(),
        filesize(),
    ],
}
