import Icon from "./images/rune-icon.png";

export function menu() {
  const main = document.createElement("main");

  const heading = document.createElement("div");
  heading.classList.add("text");
  heading.setAttribute("id", "heading");
  heading.textContent = "A Taste Of Asgard";
  main.append(heading);

  const menuItems = [
    {
      name: `Allfather's Burger`,
      price: 12.99,
      description: `A towering masterpiece fit for a god: flame-grilled beef patty topped with aged cheddar, crispy bacon, and a drizzle of Odin's secret sauce, all encased in a hearty Norse-style bun.`,
    },
    {
      name: `Valkyrie's Wings`,
      price: 10.99,
      description: `Crispy and succulent chicken wings, served with a choice of Odin's fiery habanero sauce or the milder, herby Freyja's honey glaze. Accompanied by a side of Yggdrasil-forged fries.`,
    },
    {
      name: `Mjölnir Meatball Sub`,
      price: 14.99,
      description: `An epic sub sandwich filled with tender, giant-sized meatballs, smothered in Odin's famous marinara sauce and topped with melted provolone. Served on freshly baked mjölnir-shaped bread.`,
    },
    {
      name: `Thor's Thunder Tots`,
      price: 7.99,
      description: `Golden-brown tater tots seasoned with a sprinkle of Odin's spice blend and served with a side of Thor's hammer-strength dipping sauce.`,
    },
    {
      name: `Bifrost Sundae`,
      price: 9.99,
      description: `A rainbow-colored, ice-cold delight: vanilla soft serve ice cream drizzled with shimmering, ethereal caramel sauce and crowned with crushed rainbow candies.`,
    },
  ];

  for (const [key, value] of Object.entries(menuItems)) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemHeading = document.createElement("div");
    itemHeading.classList.add("item-heading");

    const itemName = document.createElement("div");
    itemName.classList.add("item-name");
    itemName.textContent = value.name;

    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = `$${value.price}`;

    const itemDescription = document.createElement("div");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = `${value.description}`;

    main.append(menuItem);
    menuItem.append(itemHeading);
    itemHeading.append(itemName);
    itemHeading.append(itemPrice);
    menuItem.append(itemDescription);
  }

  function img() {
    const img = document.createElement("img");
    img.src = Icon;
    img.classList.add("icon");
    img.setAttribute("title", "Image credits: Flaticon - Rune - 336182");

    return img;
  }

  main.append(img());

  return main;
}
