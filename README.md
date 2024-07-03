# MarketApp Frontend

Este proyecto es una aplicación web creada con Next.js y TypeScript para una prueba técnica en Security and System. La aplicación tiene varias funcionalidades, incluyendo un login, una ruta protegida, gestión de intereses, y el envío de correos electrónicos.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instrucciones para clonar el proyecto e instalar dependencias

1. Clona este repositorio en tu máquina local:
    
    git clone https://github.com/Damian-luis/secureandsystems.git
    

2. Navega al directorio del proyecto:


3. Instala las dependencias:
   
    npm install
    

4. Crea un archivo `.env` en la raíz del proyecto y añade las  variables de entorno que se enviaron por mail 


5. Inicia la aplicación en modo de desarrollo:
 
    npm run dev


## Funcionalidades

### Estado local con intereses precargados

La aplicación carga un estado local con una lista de intereses precargados. Los usuarios pueden añadir más intereses a esta lista.

### Añadir intereses

Los usuarios pueden añadir nuevos intereses a la lista. Estos intereses se gestionan en el estado local de la aplicación.

### Login y ruta protegida

La aplicación incluye un sistema de autenticación simple. La página de inicio de sesión es la principal y la página de inicio es una ruta protegida. Los usuarios deben iniciar sesión para acceder a la página de inicio.

### Envío de correos electrónicos

La aplicación permite enviar correos electrónicos mediante un formulario de contacto. Los correos se envían tanto al usuario que se contacta como al propietario de la aplicación.

## Estructura del proyecto

```plaintext
sandsapp/
├── components/
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   ├── index.tsx
│   ├── login.tsx
│   └── _app.tsx
├── styles/
│   ├── Home.module.css
│   ├── Layout.module.css
│   ├── Login.module.css
│   └── MainLayout.module.css
├── utils/
│   └── auth.ts
├── public/
├── .env
├── next-env.d.ts
├── tsconfig.json
├── package.json
└── README.md
