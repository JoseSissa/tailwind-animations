# Plugin Taildwind CSS, animations

## Instalación

Instala el paquete con tu gestor de paquetes favorito:

```sh
$ npm i @jose-sissa-3s/tailwind-animations
```

Usa el plugin en tu configuración de Tailwind:

```js
// tailwind.config.mjs
import animations from '@jose-sissa-3s/tailwind-animations'

export default {
  // resto de opciones
  plugins: [
    animations
  ],
}
```

## Uso

Este plugin trae varias clases de utilidad así como varias animaciones CSS listas para usar. Aquí tienes algunos ejemplos simples:

```html
<div class="animate-fade-in">
  Fade in box
</div>

<div class="animate-slide-in-bottom animate-delay-300 animate-duration-slow">
  Slow animation after 300ms to slide in from bottom
</div>
```