// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtseo/module"],
  ogImage: {
		fonts: ['Exo:400', 'Unbounded:500'],
		componentDirs: ['ogImage'],
	},
})