/**
 * @jest-environment jsdom
 */
import "isomorphic-fetch";

const htmlHome = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <title>Document</title>
    <script defer src="../js/script.js"></script>
  </head>
  <body>
    <section class="top-txt">
      <div class="head container">
        <div class="head-txt">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
        <div class="sing_in_up">
          <a href="# ">SIGN IN</a>
          <a href="# ">SIGN UP</a>
        </div>
      </div>
    </section>
    <nav class="navbar">
      <div class="navbar-container">
        <input type="checkbox" name="" id="checkbox" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li><a href="#home">Home</a></li>
          <li><a href="#sellers">Shop</a></li>
          <li><a href="#news">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="logo">
          <img src="../assets/Ubits-logo.png" alt="" style="width: 165px" />
        </div>
      </div>
    </nav>
    <section id="home">
      <div class="home_page">
        <div class="home_img">
          <img src="../assets/home2.jpeg" alt="img " />
        </div>
        <div class="home_txt">
          <p class="collectio">SUMMER COLLECTION</p>
          <h2>FALL - WINTER<br />Collection 2023</h2>
          <div class="home_label">
            <p>
              A specialist label creating luxury essentials. Ethically
              crafted<br />with an unwavering commitment to exceptional quality.
            </p>
          </div>
          <button>
            <a href="#sellers">SHOP NOW</a><i class="bx bx-right-arrow-alt"></i>
          </button>
          <div class="home_social_icons">
            <a href="#"><i class="bx bxl-facebook"></i></a>
            <a href="#"><i class="bx bxl-twitter"></i></a>
            <a href="#"><i class="bx bxl-pinterest"></i></a>
            <a href="#"><i class="bx bxl-instagram"></i></a>
          </div>
        </div>
      </div>
    </section>
    <section id="collection">
      <div class="collections container">
        <div class="content">
          <img src="../assets/clothing.webp" alt="img" />
          <div class="img-content">
            <p>Clothing Collections</p>
            <button><a href="#sellers">SHOP NOW</a></button>
          </div>
        </div>
        <div class="content2">
          <img src="../assets/shoes.webp" alt="img" />
          <div class="img-content2">
            <p>Shoes Spring</p>
            <button><a href="#sellers">SHOP NOW</a></button>
          </div>
        </div>
        <div class="content3">
          <img src="../assets/access.webp" alt="img" />
          <div class="img-content3">
            <p>Accessories</p>
            <button><a href="#sellers">SHOP NOW</a></button>
          </div>
        </div>
      </div>
    </section>
    <section id="sellers">
      <div class="seller container">
        <h2>Top Sales</h2>
        <div class="best-seller">
          acá se debe inyectar las tarjetas llamas desde la api https://fakestoreapi.com/products
        </div>
    </section>
    <section id="news">
      <div class="news-heading">
        <p>LATEST NEWS</p>
        <h2>Fashion New Trends</h2>
      </div>
      <div class="l-news container">
        <div class="l-news1">
          <div class="news1-img">
            <img src="../assets/news1.jpeg" alt="img" />
          </div>
          <div class="news1-conte">
            <div class="date-news1">
              <p><i class="bx bxs-calendar"></i> 12 February 2022</p>
              <h4>What Curling Irons Are The Best Ones</h4>
              <a
                href="#"
                >read more</a
              >
            </div>
          </div>
        </div>
        <div class="l-news2">
          <div class="news2-img">
            <img src="../assets/news2.jpeg" alt="img" />
          </div>
          <div class="news2-conte">
            <div class="date-news2">
              <p><i class="bx bxs-calendar"></i> 17 February 2022</p>
              <h4>The Health Benefits Of Sunglasses</h4>
              <a
                href="#"
                >read more</a
              >
            </div>
          </div>
        </div>
        <div class="l-news3">
          <div class="news3-img">
            <img src="../assets/news3.jpeg" alt="img" />
          </div>
          <div class="news3-conte">
            <div class="date-news3">
              <p><i class="bx bxs-calendar"></i> 26 February 202</p>
              <h4>Eternity Bands Do Last Forever</h4>
              <a
                href="#"
                >read more</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="contact container">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.121169986175!2d73.90618951442687!3d18.568575172551647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c131ed5b54a7%3A0xad718b8b2c93d36d!2sSky%20Vista!5e0!3m2!1sen!2sin!4v1654257749399!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form action="https://formspree.io/f/xzbowpjq" method="POST">
          <div class="form">
            <div class="form-txt">
              <h4>INFORMATION</h4>
              <h1>Contact Us</h1>
              <span
                >As you might expect of a company that began as a high-end
                interiors contractor, we pay strict attention.</span
              >
              <h3>USA</h3>
              <p>
                195 E Parker Square Dr, Parker, CO 801<br />+43 982-314-0958
              </p>
              <h3>India</h3>
              <p>HW95+C9C, Lorem ipsum dolor sit.<br />411014</p>
            </div>
            <div class="form-details">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="52"
                rows="7"
                placeholder="Message"
                required
              ></textarea>
              <button>SEND MESSAGE</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    <footer>
      <div class="footer-container container">
        <div class="content_1">
          <img src="../assets/ubits.png" alt="logo" />
          <p>
            The customer is at the heart of our<br />unique business model,
            which includes<br />design.
          </p>
          <img src="../assets/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#sellers">Clothing Store</a>
          <a href="#sellers">Trending Shoes</a>
          <a href="#sellers">Accessories</a>
          <a href="#sellers">Sale</a>
        </div>
        <div class="content_3">
          <h4>SHOPPING</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="https://payment-method-sb.netlify.app/" target="_blank"
            >Payment Method</a
          >
          <a href="https://delivery-status-sb.netlify.app/" target="_blank"
            >Delivery</a
          >
          <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank"
            >Return and Exchange</a
          >
        </div>
        <div class="content_4">
          <h4>NEWLETTER</h4>
          <p>
            Be the first to know about new<br />arrivals, look books, sales &
            promos!
          </p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  </body>
</html>
`;

const htmlDetail = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/productStyle.css" />
    <title>Document</title>
    <script defer src="../js/productScript.js"></script>
  </head>
  <body>
    <section class="top-txt">
      <div class="head container">
        <div class="head-txt">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
        <div class="sing_in_up">
          <a href="# ">SIGN IN</a>
          <a href="# ">SIGN UP</a>
        </div>
      </div>
    </section>
    <nav class="navbar">
      <div class="navbar-container">
        <input type="checkbox" name="" id="checkbox" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li><a href="#home">Home</a></li>
          <li><a href="#sellers">Shop</a></li>
          <li><a href="#news">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="logo">
          <img src="../assets/Ubits-logo.png" alt="" style="width: 165px" />
        </div>
      </div>
    </nav>
    <section>
      <!-- single product details -->
      <div class="small-container single-product">
        <div class="row">
          <div class="col-2">
            <img
              src="../assets/placeholder.png"
              alt=""
              width="100%"
              id="image"
            />
          </div>
          <div class="col-2">
            <p>
              Home /
              <span id="category"
                >{ acá debes colocar la categoría del producto }</span
              >
            </p>
            <h1 id="title">{ acá debes colocar el titulo del producto }</h1>
            <h4 id="price">{ acá debes colocar el precio del producto }</h4>

            <input type="number" value="1" id="quantity" />
            <button href="" class="btn" id="btn">Add To Cart</button>

            <h3>Product Details</h3>
            <br />
            <p id="description">
              { acá debes colocar los detalles del producto }
            </p>
          </div>
        </div>
      </div>

      <!-- title -->
      <div class="small-container">
        <div class="row row-2">
          <h2>Related Products</h2>
          <p>View more</p>
        </div>
      </div>

      <!-- products -->

      <div class="small-container">
        <div class="row">
          <div class="col-4">
            <img src="../assets/product-1.jpeg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <p>$500</p>
          </div>

          <div class="col-4">
            <img src="../assets/product-2.jpeg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <p>$500</p>
          </div>

          <div class="col-4">
            <img src="../assets/product-3.jpeg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <p>$500</p>
          </div>

          <div class="col-4">
            <img src="../assets/product-4.jpeg" alt="" />
            <h4>Red Printed T-shirt</h4>
            <p>$500</p>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer-container container">
        <div class="content_1">
          <img src="../assets/ubits.png" alt="logo" />
          <p>
            The customer is at the heart of our<br />unique business model,
            which includes<br />design.
          </p>
          <img src="../assets/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#sellers">Clothing Store</a>
          <a href="#sellers">Trending Shoes</a>
          <a href="#sellers">Accessories</a>
          <a href="#sellers">Sale</a>
        </div>
        <div class="content_3">
          <h4>SHOPPING</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="https://payment-method-sb.netlify.app/" target="_blank"
            >Payment Method</a
          >
          <a href="https://delivery-status-sb.netlify.app/" target="_blank"
            >Delivery</a
          >
          <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank"
            >Return and Exchange</a
          >
        </div>
        <div class="content_4">
          <h4>NEWLETTER</h4>
          <p>
            Be the first to know about new<br />arrivals, look books, sales &
            promos!
          </p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  </body>
</html>
`;

const successPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;34m\x1b[38;5;15m";
const failPrintStyle = "\x1b[1m\x1b[3m\x1b[48;5;208m\x1b[38;5;15m";

describe("testing reto de E-commerce", () => {
  let testStatus = false;
  let passTests = 0;
  let failedTest = 0;

  afterEach(() => {
    if (testStatus) {
      passTests += 1;
    } else {
      failedTest += 1;
    }

    testStatus = false;
  });

  afterAll(() => {
    const success =
      "🚀🚀 EXCELENTE TRABAJO COMPLETASTE LA PRUEBA DE MANERA SATISFACTORIA ESTE ES EL CÓDIGO SECRETO: UBITSJSCOMM1122 🚀🚀 \x1b[0m";
    const error =
      "❌❌ AUN NO HAS SUPERADO LA PRUEBA POR FAVOR VERIFICA QUE CUMPLAS CON TODOS LOS CRITERIOS SOLICITADOS ❌❌ \x1b[0m";
    if (failedTest > 0) {
      console.log(`${failPrintStyle} ${error}`);
    } else {
      console.log(`${successPrintStyle} ${success}`);
    }
  });

  it("hace el render de los 20 productos", (done) => {
    document.body.innerHTML = htmlHome;
    require("./js/script");
    setTimeout(() => {
      const cards = document.getElementsByClassName("wsk-cp-product");
      expect(cards.length).toBe(20);
      expect(cards[5].getElementsByClassName("price")[0].innerHTML).toBe(
        "$168"
      );
      expect(cards[13].querySelector(".title-product h3").textContent).toBe(
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "
      );
      expect(cards[18].getElementsByClassName("price")[0].innerHTML).toBe(
        "$7.95"
      );
      expect(
        cards[9].querySelector(".wsk-cp-text .category span").textContent
      ).toBe("electronics");
      testStatus = true;
      done();
    }, 1000);
  });

  it("hace el render del product detail", (done) => {
    document.body.innerHTML = htmlDetail;
    delete window.location;
    window.location = { replace: jest.fn() };
    window.location.search = "?id=3";
    require("./js/productScript");
    setTimeout(() => {
      const title = document.getElementById("title");
      const price = document.getElementById("price");
      expect(title.innerHTML).toBe("Mens Cotton Jacket");
      expect(price.innerHTML).toBe("$55.99");
      testStatus = true;
      done();
    }, 1000);
  });

  it("se llama correctamente el valor de la compra total", (done) => {
    const mockAlert = jest.fn();
    delete window.alert;
    window.alert = mockAlert;
    setTimeout(() => {
      const quantity = document.getElementById("quantity");
      quantity.value = 3;
      const btn = document.querySelector("#btn");
      btn.click();
      setTimeout(() => {
        expect(mockAlert).toHaveBeenCalledWith(
          "se tiene agregados 3 con valor total 167.97"
        );
        testStatus = true;
        done();
      }, 1000);
    }, 1000);
  });

  it("se llama correctamente el mensaje de error para valores negativos", (done) => {
    const mockAlert = jest.fn();
    delete window.alert;
    window.alert = mockAlert;
    setTimeout(() => {
      const quantity = document.getElementById("quantity");
      quantity.value = 0;
      const btn = document.querySelector("#btn");
      btn.click();
      setTimeout(() => {
        expect(mockAlert).toHaveBeenCalledWith(
          "valores negativos no permitidos"
        );
        testStatus = true;
        done();
      }, 1000);
    }, 1000);
  });
});
