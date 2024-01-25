<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Instalar dependencias
yarn 

## Llenar las variables de entorno
Crear un archivo .env, y colocarle las mismas variables que se encuentran en .env.template pero con los valores acoplados a tu gusto.
Importante que la información del .env de la base de datos sea la misma que termines usando en el archivo de docker-compose.yml

## Levantar la base de datos
``` docker-compose up -d ```

## Root de la aplicación
El cerebro de la aplicación está en app.module.ts, aunque lo primero en ejecutar configuraciones globales como el globalPrefix es en main.ts. 
Cada carpeta dentro de src es un router de ese endpoint.

## Correr servidor de desarrollo
yarn start:dev

## Utilizar Prettier para formateo de código
yarn format

