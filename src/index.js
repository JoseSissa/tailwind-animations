/* eslint-disable indent */
import createPlugin from 'tailwindcss/plugin'
import theme from './theme'

// JSDoc para tipar la sifuiente configuración sin usar typeScript
/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = (api) => {
    console.log('pluginCreator')
}

/** @type {import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig)
