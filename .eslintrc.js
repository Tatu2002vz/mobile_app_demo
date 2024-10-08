module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    "babelOptions": {
       "presets": ["@babel/preset-react"]
    },
  },
  parserOpts: {
    plugins: ["jsx"]
  }
};
