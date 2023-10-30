# Software_WSN

## Ejecutar el Backend

- Para poner en marcha el servidor backend de esta aplicación, sigue estos pasos:

1. Primero, asegúrate de que todas las dependencias estén instaladas. Para ello, ejecuta el siguiente comando en tu terminal:

   ```bash
   npm install
   ```

2. Una vez que todas las dependencias estén instaladas correctamente, inicia el servidor ejecutando el siguiente comando:

    ```bash
    node ./server.js
    ```


- En Frontend se debe reemplazar en mapa.html, en la linea 141, en AGREGAR-API-AQUI, por su API de Google Maps:
    ```bash
        <script src="https://maps.googleapis.com/maps/api/js?key=AGREGAR-API-AQUI&callback=initMap" async defer></script>
    ```

    
