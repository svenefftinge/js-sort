module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
	plugins: [
		'@typescript-eslint'
	],
	ignorePatterns: ['.*', '*.test.ts', 'lib/**', '*.config.js'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint'
	]
};