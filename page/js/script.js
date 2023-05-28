// como puedes observar tenemos toda nuestra pagina casi terminada pero la sección de top sales no muestra la lista de productos vendidos
// vamos a solucionar este inconveniente usando javascript.

const init = async () => {
  // 1. obtener todos los productos a mostrar, para esto debes llamar la api https://fakestoreapi.com/products
  // y guardar los resultados en una constante llamada `result`

  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();

  // 2. dada la estructura de las tarjetas de los productos en la función card, renderizar los productos obtenidos
  // del llamado API, para esto debes recordar que el resultado del llamado API es un array que se debe recorrer con
  // con la función card y guarda el resultado en la contante `arrayCards`, fíjate en los parámetros que necesita la función card
  // y cuales son las llaves que llegan del llamado al API.

  const card = (id, title, category, description, image, price) =>
    `<div class="wsk-cp-product">
    <div class="wsk-cp-img">
      <img
        src="${image}"
        alt="${title}"
        class="img-responsive"
      />
    </div>
    <div class="wsk-cp-text">
      <div class="category">
        <span>${category}</span>
      </div>
      <div class="title-product">
        <h3>My face not my heart</h3>
      </div>
      <div class="description-prod">
        <p>
         ${description}
        </p>
      </div>
      <div class="card-footer">
        <div class="wcf-left"><span class="price">$${price}</span></div>
        <div class="wcf-right">
          <div class="buy-now">
            <button>
              <a href="product.html?id=${id}"
                >Buy Now</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  const arrayCards = result.map(
    ({ id, title, category, description, image, price }) =>
      card(id, title, category, description, image, price)
  );

  // 3. inyecta el array de elementos construidos dentro del contenedor que sera el <div class="best-seller">, para esto:
  // 3.1 recuerda obtener el elemento del document
  // 3.2 convierte el array de cards a un único string que agrupe todas las cards utilizando el método `reduce`
  // 3.3 inyecte el string obtenido en el contenedor utilizando el método `innerHTML`
  const productsContainer = document.getElementsByClassName("best-seller")[0];
  const stringArrayCards = arrayCards.reduce(
    (acc, elemento) => acc + elemento,
    ""
  );
  productsContainer.innerHTML = stringArrayCards;
};

// se inicializa el script

init();
