markdown
Copiar código
# Coworking Nest JS

Una aplicación para gestionar reservas de espacios de trabajo.

## Descripción

Proyecto destinado para el manejo de las bases de datos con lógica de negocio para un coworking, permitiendo manejar reservas, usuarios y todos los movimientos dentro del coworking.

## Índice

- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [API](#api)
- [Contribuciones](#contribuciones)
- [Pruebas](#pruebas)
- [Despliegue](#despliegue)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Instalación

### Requisitos Previos

- Node.js (v14.x o superior)
- npm (v6.x o superior)

### Pasos de Instalación

1. Clona el repositorio:

  - git clone https://github.com/Thomasrr29/Coworking-Nest-JS.git


# Navega al directorio del proyecto:
cd coworking_Nest

- Instala las dependencias:
npm install

- Configura las variables de entorno (crea un archivo .env y añade las variables necesarias):

# variables de entorno  

DB_USER=default
DB_HOST=ep-little-term-a4b3qgv3-pooler.us-east-1.aws.neon.tech
DB_PASS=U1o8DhSAOWsY
DB_NAME=verceldb
DB_PORT=5432


Ejecuta las migraciones de la base de datos:
npm run migrate


# Inicia la aplicación:
npm run start
Comandos Principales

API
La documentación completa de la API está disponible en Swagger. Puedes acceder a la documentación en:
http://localhost:3000/api#/

Postman: 


# Endpoints Disponibles
- Ver la lista de espacios de trabajo disponibles de una sala en una sesión x.

- Ver la lista de espacios de trabajo ocupados de una sala en una sesión x.

- Ver las sesiones con orden por las más ocupadas.

- Ver las sesiones con orden por las más disponibles.

- Ver la lista de espacios de trabajo asignados a un usuario.

- Ver la lista de espacios de trabajo asignados a una sesión.