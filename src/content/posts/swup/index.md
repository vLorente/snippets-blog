---
draft: true
title: Animaciones con SWUP
published: 2024-04-18
description: Animaciones y transiciones de página fluidas con Swup en AstroJS.
cover: "./swup-social.webp"
tags: [Animaciones, AstroJS, Swup]
category: FrontEnd
---

# Integración con AstroJS

[Repositorio](https://github.com/swup/astro) de la integración oficial de Swup para AstroJS.

[Documentación oficial de Swup](https://swup.js.org/getting-started/)

Primero, instalar el paquete de `@swup/astro`

```sh
# npm
npm install @swup/astro

# pnpm
pnpm add @swup/astro
```

Después, se aplica la integración en el fichero de configuración de astro usando la propiedad `integrations`:

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config"
import swup from "@swup/astro"
export default defineConfig({
 integrations: [swup()],
})
```

# Uso

## Cambio de página fluido

Una vez instalado `swup` de forma automática comienza a manejar las transiciones de página, de tal modo que el cambio de página comienza a hacerse de forma fluida y sin recargar los componentes estáticos.

## Animaciones

Primero, definir la animación que vamos a usar para la carga de los componentes en el los estilos globales del `Layout.astro`

```css
<style is:global>
		@keyframes fade-in-up {
			0% {
				transform: translateY(2rem);
				opacity: 0;
			}
			100% {
				transform: translateY(0);
				opacity: 1;
			}
		}
		.onload-animation {
			opacity: 0;
			animation: 300ms fade-in-up;
			animation-fill-mode: forwards;
		}
</style>
```

Se aplica la animación a los componentes que se quieren animar, en este caso lo que busco es que la carga de los componentes sea en cascada de arriba hacia abajo.

```html
<!-- Ejemplo -->
<Layout>
 <!-- NAVBAR WRAPPER -->
 <div id="top-row" class="onload-animation ">
  <Navbar />
 </div>
 <!-- SIDEBAR -->
 <SideBar class="onload-animation " />
 <!-- MAIN WRAPPER -->
 <div id="content-wrapper">
  <main id="swup" class="transition-fade">
   <slot />
  </main>
 </div>
 <!-- FOOTER WRAPPER -->
 <div id="footer" class="onload-animation">
  <footer />
 </div>
</Layout>
```

Cuando tenemos asignadas las animaciones a los componentes, les aplicamos delay para conseguir el efecto cascada.

```css
#top-row {
 animation-delay: 0ms;
}
#sidebar {
 animation-delay: 100ms;
}
#content-wrapper {
 animation-delay: var(--content-delay);
}
#footer {
 animation-delay: 400ms;
}
```

Se define la variable `content-delay` para establecer el valor inicial de delay para el contenedor y para los componentes que contiene, se usará a continuación para el delay dinámico de los componentes encapsulados por el `content-wrapper`.

```css
:root {
	--content-delay: 150ms;
}
```

### Delay dinámico

*Este ejemplo es para la estructura de AstroJS pero se puede adaptar a cualquier Framework.*

Primero, definir el valor inicial del `delay` y el valor constante de incremento `interval`.
```javascript
---
// Animation onload delay
let delay = 0
const interval = 50
---
```

A continuación, asignar de forma dinamica el atributo `animation-delay` al estilo del componente. En este caso, se trata de un mapeo de posts para mostrar un "PostCard" en la página inicial, de modo que aparecerán en cascada cara una de las "PostCard".

```javascript
{
		page.data.map(
			(entry: {
				data: {
					draft: boolean
					title: string
					tags: string[]
					category: string
					published: Date
					cover: ImageMetadata
					description: string
				}
				slug: string
			}) => {
				return (
					<PostCard
						entry={entry}
						title={entry.data.title}
						tags={entry.data.tags}
						category={entry.data.category}
						published={entry.data.published}
						url={getPostUrlBySlug(entry.slug)!}
						cover={entry.data.cover}
						description={entry.data.description}
						style={`animation-delay: calc(var(--content-delay) + ${delay++ * interval}ms);`}
					/>
				)
			}
		)
	}
```


