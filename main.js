

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=20");
  const products = await res.json();

  const container = document.getElementById("product-list");

  products.forEach((product) => {
    const item = document.createElement("div");
    item.className =
      "bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col";

    item.innerHTML = `
      <div class="relative bg-gray-50 rounded-xl flex items-center justify-center p-4">
        <img src="${product.image}" alt="${
      product.title
    }" class="w-40 h-40 object-contain" />
        <button class="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:scale-110 transition like-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="red" class="w-5 h-5 heart-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.05-4.5-4.5-4.5-1.74 0-3.356 1.003-4.125 2.507A4.499 4.499 0 0 0 8.25 3.75 4.5 4.5 0 0 0 3.75 8.25c0 7.125 8.25 11.25 8.25 11.25S21 15.375 21 8.25z" />
          </svg>
        </button>
      </div>

      <div class="flex gap-2 mt-3">
        <span class="bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">Aksiya</span>
        <span class="bg-yellow-400 text-purple-900 text-xs font-medium px-2 py-0.5 rounded-full">Original</span>
      </div>

      <h2 class="text-gray-900 text-sm font-semibold mt-2 line-clamp-2">${
        product.title
      }</h2>

      <div class="flex items-center text-xs text-gray-600 mt-1">
        <span class="text-yellow-500 text-lg mr-1">★</span> 
        4.8 <span class="ml-1">(84 sharh)</span>
      </div>

      <div class="bg-yellow-100 text-yellow-900 text-sm font-semibold px-2 py-1 rounded-md mt-2 inline-block">
        ${(product.price * 0.12).toFixed(2)} so'm/oyiga
      </div>

      <div class="mt-3">
        <p class="text-gray-400 text-sm line-through">${(
          product.price * 1.3
        ).toFixed(0)} so'm</p>
        <p class="text-black text-lg font-bold">${(
          product.price * 10_000
        ).toLocaleString()} so'm</p>
      </div>

      <button class="mt-auto ml-auto bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
        🛒
      </button>
    `;

    container.appendChild(item);
  });

 
  document.querySelectorAll(".like-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const heart = btn.querySelector(".heart-icon");
      const isLiked = heart.getAttribute("fill") === "red";

      if (isLiked) {
        heart.setAttribute("fill", "none");
      } else {
        heart.setAttribute("fill", "red"); 
      }
    });
  });
}

getProducts();
