# 🚀 Parte 1: Cómo mostrar la lista de productos vendidos en el sitio web

Como se puede observar tenemos toda nuestra página casi terminada pero la sección de top sales no muestra la lista de productos vendidos. Vamos a solucionar este inconveniente usando JavaScript (resolver la parte 1 del reto en el archivo `script.js`).

## Paso 1️⃣: Obtener los productos a mostrar

Para poder mostrar la lista de productos vendidos en la sección de top sales, necesitamos obtener los datos de la API Fake Store. Para esto, realiza los siguientes pasos:

1. Llama a la API utilizando la URL https://fakestoreapi.com/products, y guárdala en una constante llamada `data`.
2. Utiliza el método `.json()` para convertir los datos obtenidos a formato JSON, y guárdalos en una constante llamada `result`.

## Paso 2️⃣: Renderizar los productos obtenidos

Una vez obtenidos los datos de la API, debemos renderizar cada producto en una tarjeta HTML utilizando la función `card(id, title, category, description, image, price)`. Para esto, realiza los siguientes pasos:

1. Recorre el array `result` utilizando el método `map()`, y utiliza la función `card()` pasando como parámetros las llaves correspondientes de cada objeto en el array.
2. Guárdalos en un nuevo array llamado `arrayCards`.

```javascript
const card = (id, title, category, description, image, price) => {
  // Lógica para construir la tarjeta
};

const arrayCards = result.map(...);
```

## Paso 3️⃣: Mostrar los productos renderizados en el contenedor

Finalmente, debemos mostrar las tarjetas de los productos en la sección de top sales. Para esto, realiza los siguientes pasos:

1. Obtén el elemento del documento que tendrá los productos renderizados, utilizando `getElementsByClassName()` y guardándolo en la constante `productsContainer`.
2. Utiliza el método `.reduce()` para convertir el array `arrayCards` en una cadena de texto que agrupe todas las tarjetas.
3. Utiliza el método `.innerHTML` para inyectar la cadena de texto en el contenedor.

```javascript
const productsContainer = ...;
const stringArrayCards = arrayCards.reduce(...);
```

### Ejecutar el script

Por último, es necesario inicializar el script llamando a la función `init()`.

# 🚀 Parte 2: obtener y mostrar información de un producto a través de una API

Como puedes observar el detalle del producto no tiene los valores correspondientes al producto seleccionado vamos a colocar los valores correspondientes de cada producto que vengan de la API `https://fakestoreapi.com` (resolver la parte 2 del reto en el archivo productScript.js).

## Paso 1️⃣: Obtener el detalle del producto

Para obtener los detalles del producto correspondiente debemos hacer lo siguiente:

1. Llamar a la API `https://fakestoreapi.com` y guardar los resultados en una constante llamada `result`.
2. Para obtener los detalles de un solo producto debemos obtener el `id` que se encuentra en los query params de la url. Para hacer esto, utilizamos el `window.location.search`.

## Paso 2️⃣: Inyectar o remplazar la información en el HTML

Una vez que tenemos la información del producto debemos remplazar los valores por la información obtenida de la API.

Para hacer esto:

1. Revisa el elemento `<div class="small-container single-product">` y encuentra los elementos que debemos modificar.
2. Para cada elemento que deseamos actualizar, obtenemos su id y actualizamos su valor con la información obtenida de la API.

## Paso 3️⃣: Agregar evento al botón "add to cart"

Para agregar el evento al botón "add to cart" debemos seguir estos pasos:

1. Obtener la cantidad de productos seleccionados en el input `<input type="number" value="1" id="quantity"/>`.
2. Obtener el botón "add to cart".
3. Agregar el evento para emitir la ventana de alerta con el mensaje `se tiene agregados ${numero de elementos agregados} con valor total ${el precio del producto multiplicado por la cantidad}`.
4. Si el valor es negativo, emitir una alerta con el mensaje "valores negativos no permitidos".

### 🗒 NOTAS:

para ver el comportamiento esperado de nuestra pagina en la carpeta [img](https://github.com/buty619/Reto_E-commerce/tree/main/img), podras ver el video `home.mov` que muestra el comportamiento esperado de la pagina principal y `detail.mov` que muestra el comportamiento esperado de la pagina de detalle del producto.

# ✨¡Listo! Ya hemos completado el proceso para obtener y mostrar la información del producto a través de una API.
