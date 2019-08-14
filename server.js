const express = require('express');
const app = express();

app.listen(3030, () => {
  console.log('Server listening on port 3000');
});

app.get('/products', (req, res) => {
  let page = req.query.page;
  let products = [];

  if (!page || page <= 0) {
    page = 1;
  }

  const startingItem = (page * 12) - 11;
  const lastItem = page * 12;

  for (i = startingItem; i <= lastItem; i++) {
    const product = {
      id: i,
      name: `Sample Product ${i}`,
      description: `This is a sample description for product ${i}`,
      price: 9.99,
      thumbnailUrl: `https://picsum.photos/id/${i}/200/120`
    }
    products.push(product);
  }

  res.setHeader('Content-Type', 'application/json');
  res.json(products);
});

app.get('/product/:id', (req, res) => {
  const id = req.params.id;
  const product = {
    id: parseInt(id),
    name: `Sample Product ${id}`,
    description: `This is a sample description for product ${id}`,
    price: 9.99,
    imageUrl: `https://picsum.photos/id/${id}/400/240`,
  }

  res.setHeader('Content-Type', 'application/json');
  res.json(product);
});
