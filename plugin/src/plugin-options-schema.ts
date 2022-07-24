import type { GatsbyNode } from "gatsby"
import prettier from "prettier"
import type { ObjectSchema } from "gatsby-plugin-utils"
import { DEFAULT_OPTIONS } from "./constants"

const PRETTIER_CONFIG = {
	printWidth: 80,
	semi: false,
	trailingComma: `es5`,
}

const wrapOptions = (innerOptions) =>
	prettier
		.format(
			`const something = {
  resolve: \`plugin\`, options: {
    ${innerOptions.trim()}
  },
}`,
			{ parser: `babel`, ...PRETTIER_CONFIG }
		)
		.replace(`const something = `, ``)

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({ Joi }): ObjectSchema =>
	Joi.object({
		optionA: Joi.string()
			.required()
			.description(`Example description for optionA`)
			.meta({ example: wrapOptions(`optionA: "Hello World"`) }),
		optionB: Joi.string()
			.default(DEFAULT_OPTIONS.optionB)
			.description(`Example description for optionB`)
			.meta({ example: wrapOptions(`optionB: "Hello World Again"`) }),
	})
