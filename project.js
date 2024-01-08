const menuItems = [
    { name: "Veggie Hummus Sandwich", price: 12.99, description: "Sandwich with veggies, sprouts, and hummus", image: "https://simple-veganista.com/wp-content/uploads/2012/07/best-hummus-veggie-sandwich-8.jpg" },
    { name: "Avacado toast", price: 10.99, description: "Slice of toast piled with sliced avocado and sea salt.", image: "https://cdn.loveandlemons.com/wp-content/uploads/2021/01/healthy-vegan-breakfast-665x1024.jpg" },
    { name: "Spicy zucchini noodles", price: 14.99, description: "Zucchini noodles with dusting of almond parmesan.", image: "https://simple-veganista.com/wp-content/uploads/2013/04/Zucchini-Noodles-Creamy-Avocado-Cucumber-Sauce-2.jpg" },
    { name: "Vegan Curry Lentil Soup", price: 6.99, description: "Lentil soup with curry, potatoes and greens", image: "https://simple-veganista.com/wp-content/uploads/2012/10/curry-lentil-soup-recipe-with-potatoes-and-greens-7.jpg" },
    { name: "Vegan burrito ", price: 14.99, description: "Vegan burrito with extra condiments in the filling.", image: "https://simple-veganista.com/wp-content/uploads/2020/05/best-vegan-burrito-recipe-9.jpg" },
    { name: "Green Hemp Smoothie", price: 14.99, description: "Smoothie with spinach, banana, and hemp protein.", image: "https://simple-veganista.com/wp-content/uploads/2013/01/fresh-hemp-smoothie-with-spinach-3.jpg" },
    { name: "Healthy Rainbow Salad ", price: 14.99, description: "Rainbow Salad with spicy mango salad dressing.", image: "https://simple-veganista.com/wp-content/uploads/2014/03/healthy-rainbow-salad-recipe.jpg" },
    { name: "Vegan Peanut Butter Cookies", price: 14.99, description: "Peanut Butter Cookies Dairy and egg-free", image: "https://simple-veganista.com/wp-content/uploads/2019/08/vegan-peanut-butter-cookies_3.jpg" },
  ];
  
  const menuList = document.getElementById("menu-list");
  menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
      <h3>${item.name}</h3>  
      <img src="${item.image}" alt="${item.name}">
      <p>${item.description}</p>
      <p>Price: $${item.price.toFixed(2)}</p>
      <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
    `;
    menuList.appendChild(menuItem);
  });
  
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
      const itemName = this.getAttribute("data-name");
      const itemPrice = parseFloat(this.getAttribute("data-price"));
      console.log(`Added "${itemName}" to cart for $${itemPrice.toFixed(2)}`);
      // You can implement cart logic here

// Existing code...

const cartItems = [];
const cartItemsContainer = document.getElementById("cart-items");

addToCartButtons.forEach(button => {
  button.addEventListener("click", function() {
    const itemName = this.getAttribute("data-name");
    const itemPrice = parseFloat(this.getAttribute("data-price"));

    const cartItem = { name: itemName, price: itemPrice };
    cartItems.push(cartItem);

    updateCartDisplay();
  });
});

function updateCartDisplay() {
  cartItemsContainer.innerHTML = "";

  cartItems.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");
    cartItemElement.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)}</p>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Existing code...

      
    });
  });
  