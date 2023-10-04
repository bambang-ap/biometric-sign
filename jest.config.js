module.exports = {
  preset: 'react-native',
  coveragePathIgnorePatterns: ['node_modules', '(\\w\\W)(type|d).ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@|jest-)?react-native?(-community)?|@?react-navigation|global-methods)',
  ],
};
