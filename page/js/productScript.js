// como puedes observar el detalle del producto no tiene los valores correspondientes al producto seleccionado
// vamos a colocar los valores correspondientes de cada producto que vengan de la API https://fakestoreapi.com

const init = async () => {
  // 1. obtener el detalle del producto a mostrar, para esto debes llamar la api https://fakestoreapi.com
  // y guardar los resultados en una constante llamada `result`
  // te recomiendo que leas la documentación de la API para que puedas observar como se llama un solo producto
  // 1.1 para obtener un solo producto debes obtener el id que se encuentra en los query params de la url
  // esto lo podemos realizar utilizando el `window.location.search` del cual podremos obtener el id
  // 1.2 llamar la api https://fakestoreapi.com y guardar los resultados en una constante llamada `result`.

  const id = "";

  const result = "...";

  // 2. con la data del producto inyecta o remplaza la información que se encuentra en el HTML por la información obtenida de la API
  // te recomiendo que revises el elemento <div class="small-container single-product"> en el encontraras todos los elementos que debes
  // modificar con Javascript y asi mostrar la información correcta

  const titleElement = "...";

  // 3. agrega evento al botón `add to card` de tal manera que cuando se presione se emita una window alarm con el mensaje
  // `se tiene agregados ${numero de elementos agregados} con valor total ${el precio del producto multiplicado por la cantidad}`
  // 3.1 para esto primero debes obtener la cantidad de productos seleccionados en el input `<input type="number" value="1" id="quantity"/>`
  // 3.2 obtén del documento el botón `add to card` y agrega el evento para emitir el window alarm.
  // 3.3 si el valor es negativo emitir en el window alarm el mensaje `valores negativos no permitidos`

  const button = "...";
  const quantity = "...";
};

init();
