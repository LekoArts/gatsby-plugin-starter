import type { GatsbyConfig, PluginRef } from "gatsby"
import type { PluginOptions } from "@lekoarts/gatsby-plugin-starter"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `@lekoarts/gatsby-plugin-starter`,
    siteUrl: `https://urltodeployeddemo.com`,
  },
  jsxRuntime: `automatic`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-plugin-starter`,
      options: {
        optionA: `valueA`,
        optionB: `valueB`,
      } as PluginOptions,
    },
  ] as PluginRef[],
}

export default config
