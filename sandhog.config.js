/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check

/**
 * @type {import("helpertypes").PartialDeep<import("sandhog").SandhogConfig>}
 */
const config = {
	...require("@wessberg/ts-config/sandhog.config.json"),
	logo: {
		url: "https://raw.githubusercontent.com/wessberg/ts-clone-node/master/documentation/asset/logo.png",
		height: 100
	}
};

module.exports = config;
