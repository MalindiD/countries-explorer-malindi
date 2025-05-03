module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest', // let babel-jest handle all JS/JSX files
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(axios)/)', 
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  