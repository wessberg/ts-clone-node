import shared from "@wessberg/ts-config/eslint.config.js";

export default [
	...shared,
	{
		rules: {
			"@typescript-eslint/no-deprecated": "off",
			"@typescript-eslint/no-empty-object-type": "off"
		}
	}
];
