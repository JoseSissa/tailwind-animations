import tailwindcss from 'tailwindcss'
import postcss from 'postcss'
import minify from '@csstools/postcss-minify'
import animationPlugin from '../src/index.js'

const TAILWIND_BASE = '@tailwindcss utilities;'

export function generatePluginCss (options = {}) {
    const { inline = '', content = '' } = options
    
    // Devuelve con PostCSS los plugiens que queremo utilizar
    return postcss([
        minify(),
        tailwindcss({
            plugins: [animationPlugin],
            content: [{ raw: content }]
        })
    ])
        .process(`${TAILWIND_BASE} ${inline}`, {
            from: undefined
        })
        .then(result => result.css)
}

console.log(await generatePluginCss({
    content: '<div class"animate-rotate-90">Hello</div>'
}))