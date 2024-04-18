---
draft: true
title: Personalización scrollbar
published: 2024-04-18
description: Personalizar colores, tamaño y hover de la scrollbar.
tags: [Webkit, CSS]
category: FrontEnd
---

```css
::-webkit-scrollbar {
 width: 8px;
}
::-webkit-scrollbar-track {
 background: transparent;
 backdrop-filter: blur(10px);
 border-radius: 5px;
}
::-webkit-scrollbar-thumb {
 background: rgba(0, 0, 0, 0.445);
 backdrop-filter: blur(10px);
 border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
 background: rgba(0, 0, 0, 0.836);
}
```
