module.exports = {
  mount: {
    // "build": "/",
    // "src/scripts": "/_dist_"
    'src/_site': { url: '/', static: true, resolve: false },
    'src/scripts': { url: '/scripts' },
    'src/styles': { url: '/styles' },
  },
  plugins: [
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
    [
      '@snowpack/plugin-optimize',
      {
        preloadModules: true,
        target: ['es2020', 'safari12'],
      },
    ],
  ],
  packageOptions: {
    NODE_ENV: true,
    // source: 'remote',
  },
  buildOptions: {
    clean: true,
    out: 'dist',
  },
  devOptions: {
    hmrDelay: 1000,
    open: 'none',
  },
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: 'es2020',
  // },
};
