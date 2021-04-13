module.exports = {
  presets: [
    require('@babel/preset-env'),
    require('@babel/preset-typescript'),
    [require('@babel/preset-react'), { runtime: 'automatic' }], // [TODO] Remove `runtime` option when Babel is version 8.
  ],
};
