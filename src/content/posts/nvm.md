---
draft: false
title: Instalación y Uso de Node Version Manager (NVM)
published: 2024-04-22
description: Gestionar de forma fácil multiples versiones de Node.js.
tags: [Node]
category: Enviroment
---

Permite gestionar fácilmente múltiples versiones de Node.js en un mismo sistema.

## Instalación de NVM

El primer paso es instalar NVM en tu sistema. A continuación, se detallan los pasos para sistemas basados en Unix (como Linux o macOS). Si utilizas Windows, puedes optar por herramientas alternativas como nvm-windows.

### Paso 1: Descargar el script de instalación de NVM

Abre tu terminal y ejecuta el siguiente comando para descargar el script de instalación de NVM desde el repositorio oficial de GitHub:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Checkear la última versión en su [repositorio oficial](https://github.com/nvm-sh/nvm).

### Paso 2: Verificación de la instalación

Primero reinicia el terminal o carga el script de nvm tras la instalación.

```bash
source ~/.nvm/nvm.sh
```

Para verificar que NVM se ha instalado correctamente, puedes ejecutar el siguiente comando en tu terminal:

```bash
nvm --version
```

Si todo ha ido bien, deberías ver la versión de NVM que has instalado.

## Uso de NVM

Una vez que NVM está instalado en tu sistema, puedes empezar a utilizarlo para gestionar las versiones de Node.js.

### Instalación de una versión específica de Node.js

Para instalar una versión específica de Node.js, puedes utilizar el siguiente comando:

```bash
nvm install <versión>
```

Por ejemplo, para instalar Node.js versión 20, ejecutarías:

```bash
nvm install 20
```

### Selección de una versión de Node.js

Puedes utilizar NVM para seleccionar una versión específica de Node.js que desees utilizar en tu sesión actual. Para ello, ejecuta el siguiente comando:

```bash
nvm use <versión>
```

Por ejemplo, para utilizar Node.js versión 20, ejecutarías:

```bash
nvm use 20
```

### Listado de versiones instaladas

Para ver todas las versiones de Node.js instaladas en tu sistema, puedes utilizar el siguiente comando:

```bash
nvm ls
```

### Definición de la versión por defecto

Puedes establecer una versión de Node.js como la versión por defecto en tu sistema utilizando el siguiente comando:

```bash
nvm alias default <versión>
```

Por ejemplo, para establecer Node.js versión 20 como la versión por defecto, ejecutarías:

```bash
nvm alias default 20
```
