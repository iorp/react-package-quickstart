// rollup.config.js
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'dist/demo-lib.js',
    format: 'cjs',
  },
  plugins: [babel()]
};
