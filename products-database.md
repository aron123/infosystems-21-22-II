# Database of products
- `products.json` contains an array of product objects. [[Download]](https://raw.githubusercontent.com/aron123/infrend-2022/master/_data/products.json)
- `products.sql` contains a MySQL dump with the same data. [[Download]](https://github.com/aron123/infrend-2022/blob/master/_data/products.sql)

## Schema
- `id`: ID of the product.
- `title`: Name of the product.
- `description`: Description of the product (optional, can be `null`).
- `price`: Price in US dollars.
- `imgUrl`: URL of the product image (optional, can be `null`).
- `brand`: Brand name (optional, can be `null`).
- `categories`: List of categories the product belongs to.

## Data example
```json
{
   "id": "0130350591",
   "title": "Le Creuset Kiwi (Green) Butter Dish Stoneware",
   "description": "Each piece of Le Creuset dinnerware is crafted in the same careful process as all Le Creuset stoneware - with a colorful, durable exterior enamel that matches other stoneware flawlessly while protecting from utensil marks and scratches. Every plate, bowl and mug is designed to complement any collection of stoneware, and is finished with Le Creuset's signature three-ring accent along the exterior.",
   "price": 14.05,
   "imgUrl": "http://ecx.images-amazon.com/images/I/21zcx6RCDoL.jpg",
   "brand": null,
   "categories": [
      "Home & Kitchen",
      "Kitchen & Dining",
      "Dining & Entertaining",
      "Serveware",
      "Butter Dishes"
   ]
},
```

## Reference
J. McAuley, C. Targett, J. Shi, A. van den Hengel: Image-based recommendations on styles and substitutes. SIGIR, 2015.