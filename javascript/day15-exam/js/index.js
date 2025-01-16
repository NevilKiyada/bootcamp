let products = JSON.parse(localStorage.getItem('products')) || [];
let totalPrice = 0;

document.getElementById('product-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let title = document.getElementById('title').value.trim();
  let price = parseFloat(document.getElementById('price').value.trim());
  let category = document.getElementById('category').value.trim();
  let image = document.getElementById('image').value.trim();

  if (!title || !price) {
    alert('Title and Price are required!');
    return;
  }

  products.push({ title, price, category, image });
  saveProducts();
  renderProducts();
  this.reset();
});

function saveProducts() {
  localStorage.setItem('products', JSON.stringify(products));
}

function renderProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  let filteredProducts = [...products];

  const searchValue = document.getElementById('search').value;
  const filterValue = document.getElementById('filter').value;
  const sortValue = document.getElementById('sort').value;

  if (searchValue) {
    filteredProducts = filteredProducts.filter(p => 
      p.title.includes(searchValue)
    );
  }

  if (filterValue) {
    filteredProducts = filteredProducts.filter(p => 
      p.category.includes(filterValue)
    );
  }

  if (sortValue === 'low-to-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'high-to-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  
  filteredProducts.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <div>
        <h3>${product.title}</h3>
        <p>Price: ₹${product.price.toFixed(2)}</p>
        <p>Category: ${product.category}</p>
      </div>
      <img src="${product.image }" alt="${product.title}">
      <div>
        <button onclick="editProduct(${index})">Edit</button>
        <button onclick="deleteProduct(${index})">Delete</button>
      </div>
    `;
    productList.appendChild(productDiv);
  });
}

function editProduct(index) {
  const product = products[index];
  document.getElementById('title').value = product.title;
  document.getElementById('price').value = product.price;
  document.getElementById('category').value = product.category;
  document.getElementById('image').value = product.image;

  deleteProduct(index);
}

function deleteProduct(index) {
  products.splice(index, 1);
  saveProducts();
  renderProducts();
}

document.getElementById('search').addEventListener('input', renderProducts);
document.getElementById('sort').addEventListener('change', renderProducts);
document.getElementById('filter').addEventListener('input', renderProducts);

renderProducts();
