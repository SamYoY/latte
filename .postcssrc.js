module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: [
        '> 1% in CN',
        "last 2 versions",
        "not ie <= 8",
        "iOS >= 4",
        "Android >= 4"
      ]
    },
    "postcss-pxtorem": {
      rootValue: 14,
      propList: ['*', '!border', '!border-top', '!border-left', '!border-right', '!border-bottom'],
    },
  },
};
