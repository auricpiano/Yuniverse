module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        // To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin.
        // The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library.
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
