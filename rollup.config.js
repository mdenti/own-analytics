// import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/public/lib.ts',
  output: {
    file: 'dist/public/bundle.js',
    format: 'iife',
    name: 'an'
  },
	plugins: [
		typescript({
      tsconfig: "tsconfig.browser.json"
    }),
    commonjs(),
    // minify({
    //   comments: false,
    // })
	]
}