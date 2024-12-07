module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:prettier/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: ["@typescript-eslint", "prettier", "react"],
	rules: {
		"@typescript-eslint/no-empty-interface": 0,
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/ban-ts-ignore": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"prettier/prettier": [
			"error",
			{
				semi: true,
				singleQuote: true,
				tabWidth: 4,
				useTabs: false,
				trailingComma: "none"
			}
		]
	}
};
