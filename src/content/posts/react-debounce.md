---
draft: false
title: Input useDebounceHook
published: 2024-04-24
description: Agregar delay en la ejecución de peticiones de búsqueda.
tags: [React, Debounce, Input, Preact]
category: FrontEnd
---

# UseDebounceHook para React o Preact

## ¿Qué es el Input Debounce?

El "input debounce" es como poner un temporizador en tus acciones cuando estás escribiendo en un campo de texto o seleccionando opciones. Imagina que estás buscando algo en internet y cada vez que escribes una letra, tu búsqueda se activa, con el debounce podrás establecer un delay entre la última pulsación y la ejecución. Esto evita que se lance la búsqueda cada vez que escribes algo nuevo, haciéndola más eficiente y manteniendo la experiencia del usuario fluida.

## Para crear tu propio Hook para el Input Debounce

```javascript
import { useEffect, useRef, useState } from "preact/hooks"

export default function useDebounce<T>(value: T, delay: number = 500): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)
	const debounceRef = useRef<NodeJS.Timeout>()

	useEffect(() => {
		debounceRef.current = setTimeout(() => setDebouncedValue(value), delay)

		return () => {
			clearTimeout(debounceRef.current)
		}
	}, [value, delay])

	return debouncedValue
}
```

## Usar Hook mediante dependencia

Desde [**usehooks.com/usedebounce**](https://usehooks.com/usedebounce)

```bash
npm i @uidotdev/usehooks
// or
pnpm add @uidotdev/usehooks
```
