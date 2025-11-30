---
title: Personalización de PowerShell
published: 2025-11-30
description: Guía para crear comandos personalizados en PowerShell.
tags: [PowerShell, Scripting, Personalización]
category: Environment
draft: false
---

## Crear Comandos Personalizados en PowerShell

PowerShell permite a los usuarios crear sus propios comandos personalizados mediante funciones y scripts. A continuación, se muestra un ejemplo básico de cómo crear un comando personalizado que saluda al usuario.

Primero vamos a comprobar que tenemos un perfil de PowerShell. Puedes verificarlo ejecutando:

```powershell
Test-Path $PROFILE
```
Si el resultado es `False`, crea un nuevo perfil con el siguiente comando:

```powershell
New-Item -Path $PROFILE -ItemType File -Force
```

Luego, abre el perfil en tu editor de texto favorito:

```powershell
notepad $PROFILE
```

Dentro del archivo de perfil, podemos crear funciones personalizadas.

### Ejemplo de comando para navegar al directorio de documentos
```powershell
function Go-Documents {
		Set-Location -Path "$HOME\Documents"
}
```

## Crear un documento con la lista de comandos personalizados
Para listar todos los comandos personalizados que has creado, puedes agregar la siguiente función a tu perfil de PowerShell:

```powershell
function List-CustomCommands {
		Get-Command -CommandType Function | Where-Object { $_.Definition -like "*function*" } | Select-Object Name
}
```
Después de agregar estas funciones, guarda el archivo y reinicia PowerShell o ejecuta el siguiente comando para cargar los cambios:

```powershell
. $PROFILE
```

## Crear un alias para un comando personalizado
Puedes crear un alias para tus comandos personalizados para facilitar su uso. Por ejemplo, para crear un alias para el comando `Go-Documents`, agrega la siguiente línea a tu perfil:

```powershell
Set-Alias gd Go-Documents
```
Después de guardar los cambios y recargar tu perfil, podrás usar `gd` para navegar rápidamente al directorio de documentos.

Con estos pasos, puedes comenzar a personalizar tu entorno de PowerShell con comandos que se adapten a tus necesidades diarias.

## Crear un documento .ps1 donde modularizar tus comandos
Si deseas mantener tus comandos personalizados organizados, puedes crear un archivo `.ps1` separado  para tus funciones y luego importarlo en tu perfil de PowerShell. Por ejemplo, crea un archivo llamado `NavigateCommands.ps1` en una ubicación de tu elección y agrega tus funciones allí:

> Lo vamos a ubicar en `C:\Users\TuUsuario\Documents\WindowsPowerShell\NavigateCommands.ps1`
```powershell
function Go-Documents {
		Set-Location -Path "$HOME\Documents"
}
```

Luego, en tu perfil de PowerShell, importa este archivo agregando la siguiente línea:

```powershell
. "C:\Users\TuUsuario\Documents\WindowsPowerShell\NavigateCommands.ps1"
```

## Ejemplo de $PROFILE completo
```powershell
function List-CustomCommands {
	Get-Command -CommandType Function | Where-Object { $_.Definition -like "*function*" } | Select-Object Name
}
. "C:\Users\vlore\Documents\WindowsPowerShell\gh-copilot.ps1"
. "C:\Users\vlore\Documents\WindowsPowerShell\navigate-commands.ps1"
Set-Alias gd Go-Documents
Set-Alias lcc List-CustomCommands
```
