const path = require('path')
const fs = require('fs');
const babel = require('rollup-plugin-babel');
const babelCompilerPlugin = require('./babel-compiler-plugin');
const cjs = require('@rollup/plugin-commonjs')
const vue = require('rollup-plugin-vue');
const node = require('@rollup/plugin-node-resolve')
const flow = require('rollup-plugin-flow-no-whitespace')
const postcss = require('rollup-plugin-postcss')
const postcssEnv = require('postcss-preset-env');
const externals = require('rollup-plugin-node-externals')
// const typescript = require('@rollup/plugin-typescript');
// const typescript = require('rollup-plugin-typescript2');
const alias = require('@rollup/plugin-alias');

const stylusCompilerPlugin = require('./rollup-plugin-stylus-compiler');
const stylusMixin = require('./stylus-mixin')
const terser = require("rollup-plugin-terser").terser;
const css = require('rollup-plugin-css-porter');
const cssnano = require('cssnano')
const version = process.env.VERSION || require('../package.json').version
const aliases = {}
const json = require('rollup-plugin-json');
const resolve = p => {
    const base = p.split('/')[0]
    if (aliases[base]) {
        return path.resolve(aliases[base], p.slice(base.length + 1))
    } else {
        return path.resolve(__dirname, '../', p)
    }
}
const banner =
    '/*!\n' +
    ` * vue-rt-style-kit-aks.js v${version}\n` +
    ` * (c) 2018-${new Date().getFullYear()} Alex Nikolaev / Cryingjoker\n` +
    ' * Released under the MIT License.\n' +
    ' */';
const builds = {
    'web-full-prod': {
        entry: resolve('src/index.js'),
        // entry: [resolve('src/index.js'),resolve('src/css/vue-rt-style-atoms.styl')],
        dest: resolve('lib/vue-rt-style-kit-aks.js'),
        // dest: [resolve('lib/vue-rt-style-kit-atoms.js'),resolve('lib/vue-rt-style-kit-atoms.js')],
        destCss: resolve('lib/vue-rt-style-kit-aks.css'),
        destCssPath: resolve('lib/'),
        format: 'umd',
        env: 'production',
        sourcemap: true,
        banner,
        assetPath: resolve('lib'),

    },
    'web-es-full-prod': {
        entry: resolve('src/index.js'),
        // entry: [resolve('src/index.js'),resolve('src/css/vue-rt-style-atoms.styl')],
        dest: resolve('lib/vue-rt-style-kit-aks.esm.js'),
        // dest: [resolve('lib/vue-rt-style-kit-atoms.js'),resolve('lib/vue-rt-style-kit-atoms.js')],
        destCss: resolve('lib/vue-rt-style-kit-aks.css'),
        destCssPath: resolve('lib/'),
        format: 'umd',
        env: 'production',
        sourcemap: true,
        banner,
        assetPath: resolve('lib'),

    },
}

function genConfig(name = 'web-full-prod') {
    const opts = builds[name];
    const config = {
        input: opts.entry,
        external: opts.external,
        plugins: [

            flow(),

            alias({
              entries: [
                { find: '@projectAks', replacement: '../package.json' },
            ]}),
            json(),
            externals({
                include: [
                    'vue',
                    'vue-rt-style-kit-atoms'
                ],
                exclude:[
                    'debounce'
                ]
            }),

            stylusCompilerPlugin({
                fn: stylusMixin,
            }),

            postcss({
                inject: false,
                minimize: true,
                extract: true,
                plugins: [
                    postcssEnv({
                        stage: 3,
                        features: {
                            'nesting-rules': true,
                        },
                        exportTo: opts.destCss
                    }),
                    cssnano()
                ],
            }),
            // typescript(),
            // babelCompilerPlugin(),
            babel({
                babelrc: true
            }),





            node({
                jsnext: true,
                skip: ['vue-rt-style-kit-atoms']
            }),

            terser(),


            vue(),
            cjs(),


        ].concat(opts.plugins || []),
        output: {
            file: opts.dest,
            format: opts.format,
            banner: opts.banner,
            name: opts.moduleName || 'vue-rt-style-kit-aks',
            sourcemap: true,
            // dir: resolve('lib')
        },
        onwarn: (msg, warn) => {
            if (!/Circular/.test(msg)) {
                warn(msg)
            }
        },
    }
    // console.info('config',config)
    const vars = {
        __VERSION__: version
    }
    // feature flags
    // Object.keys(featureFlags).forEach(key => {
    //     vars[`process.env.${key}`] = featureFlags[key]
    // })
    // build-specific env

    // config.plugins.push(replace(vars))

    // if (opts.transpile !== false) {
    //     config.plugins.push(buble())
    // }

    Object.defineProperty(config, '_name', {
        enumerable: false,
        value: name
    })

    return {
        config: config,
        opts: opts
    }
}

module.exports = genConfig
