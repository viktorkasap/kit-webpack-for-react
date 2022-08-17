module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        browserslistEnv: '> 0.25% not dead',
      },
      '@babel/preset-react',
    ],
  ],
};
