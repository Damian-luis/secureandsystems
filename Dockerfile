# Establece la imagen base
FROM node:14-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias del proyecto
COPY package.json yarn.lock /app/

# Instala las dependencias
RUN yarn install --frozen-lockfile

# Copia el resto de los archivos del proyecto
COPY . /app/

# Construye la aplicación Next.js
RUN yarn build

# Expone el puerto en el que corre la aplicación Next.js
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["yarn", "start"]
