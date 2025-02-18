const items = [
  {
    id: 1,
    title: "steamed idli",
    category: "breakfast",
    price: 100,
    img: "./images/idli.webp",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "medu vada",
    category: "breakfast",
    price: 120,
    img: "./images/Medu-Vada.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "vada pav",
    category: "breakfast",
    price: 80,
    img: "./images/Vada-Pav.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "masala chai",
    category: "drinks",
    price: 30,
    img: "./images/chai.webp",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "coffee",
    category: "drinks",
    price: 60,
    img: "./images/coffee.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "masala dosa",
    category: "meals",
    price: 150,
    img: "./images/dosa.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "aloo paratha",
    category: "meals",
    price: 100,
    img: "./images/aloo-paratha.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "chole bhatura",
    category: "meals",
    price: 180,
    img: "./images/chole-bhatura.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "gulab jamun",
    category: "dessert",
    price: 60,
    img: "./images/GulabJamun.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "ice cream",
    category: "dessert",
    price: 80,
    img: "./images/ice-cream.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuDetails = document.querySelector(".menu-details");
const menu = document.querySelector(".menu");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(items);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="dish">
          <img src=${item.img} alt=${item.title} class="photo"/>
          <div class="dish-details">
            <div class="dish-heading">
              <h4>${item.title}</h4>
              <h4 class="price">Rs.${item.price}</h4>
            </div>
            <p class="dish-text">${item.desc}</p>
          </div>
        </article>`;
  });

  displayMenu = displayMenu.join(" ");
  menuDetails.innerHTML = displayMenu;
}

/* end of function*/

function displayMenuButtons() {
  const categories = items.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button class="btn" data-id=${category}>${category}</button>`;
    })
    .join(" ");

  menu.innerHTML = categoryBtns;

  const btns = menu.querySelectorAll(".btn");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = items.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(items);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

/* end of function*/
