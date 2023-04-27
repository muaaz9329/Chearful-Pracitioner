module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
  plugins: [
    [
      "module-resolver",
      {
        
        alias: {
          "@app": "./src",
          "@helper": "./src/helper",
          "@constants": "./src/constants",
          "@CommonComponents":"./src/common/components",
          "@svg":"./src/svgs/Index.js",
          "@hooks":"./src/hooks",
          "@models":"./src/common/Models"
        },
        
      },
    ],
    [
      "react-native-reanimated/plugin",
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
