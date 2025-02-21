# Starcraft - Proyecto Ionic

Starcraft es un juego de estrategia en tiempo real (RTS) desarrollado por Blizzard Entertainment. Ambientado en un futuro lejano, enfrenta a tres razas con estilos de juego únicos:

- **Terran**: Humanos exiliados con tecnología avanzada y estrategia flexible.  
- **Zerg**: Criaturas biológicas con gran capacidad de reproducción y adaptación.  
- **Protoss**: Guerreros con habilidades psiónicas y tecnología superior.  

El juego se basa en la gestión de recursos, construcción de bases y batallas estratégicas en tiempo real. Es un referente en los eSports y ha influenciado el género de estrategia desde su lanzamiento en 1998.

Este proyecto es una aplicación desarrollada con [Angular](https://angular.io/) e [Ionic](https://ionicframework.com/) que permite gestionar las unidades del universo Starcraft.

## Requisitos previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (generalmente se incluye con Node.js)
- [Ionic CLI](https://ionicframework.com/docs/cli) (instalar con `npm install -g @ionic/cli`)

## Configuración de entornos

El proyecto requiere configurar los archivos de entorno antes de ejecutarse. Los archivos necesarios son:

- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`

1. Copia los archivos de ejemplo y renómbralos:
   ```bash
   cp src/environments/environment.ts.dist src/environments/environment.ts
   cp src/environments/environment.prod.ts.dist src/environments/environment.prod.ts
   ```
2. Edita los archivos `environment.ts` y `environment.prod.ts` segun sea necesario para su entorno

## Ejecución de la aplicación

```bash
ionic serve
```