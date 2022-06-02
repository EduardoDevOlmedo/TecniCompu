- Typescript React 
- NextJS
- ✨Next UI ✨
- Docker
- MongoDB

## USAR

Para usar, simplemente tenemos que tener docker y yarn instalado.

```bash
npm i yarn
```

Recuerde también ocupar la variable de entorno para la DB.

Revisar .env-template

También puedes usar NPM pero toma en cuenta que tendras que eliminar el yarn.lock.

Para levantar el proyecto con el servivcio y nombre que quieras, edita el archivo
```JS
docker-compose.yaml
```

De no querer/tener que editar el archivo de compose, levantamos la imágen de MongoDB
con docker.

```bash
    docker-compose up -d
```

Una vez ya instalada la imágen, inicie el contenedor de docker, conectese a la base
de datos (vease el archivo .env-template)

## Y por último, para correr el proyecto:
```bash
npm run dev
# or
yarn dev
```