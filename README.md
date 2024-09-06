# Basic Routing (http://localhost:3001/about)

- All routes must be placed inside the app folder.
- Every file that corresponds to a route must be named page.js or page.tsx
Example :

u can simpley create a page.tsx file in src\app\about\page.tsx
when u navigate to http://localhost:3001/about, the ui should display About Page

# Nested Routes (http://localhost:3001/blog/first)

- Create a file in src\app\blog\first\page.tsx.
- add some code in it and navigate to http://localhost:3001/blog/first
- the ui should display First Blog

# Dynamic Routes (http://localhost:3001/products/1)

- Create a file in src\app\products\[productId]\page.tsx
- Add some code to it
```
export default function ProductDetail() {
  return <h1>Detail Product Page</h1>;
}
```
- When u open http://localhost:3001/products/1, the ui should display Detail Product Page.
- U can change the number in the url and there will be no errors
- Change the code to the following
```
export default function ProductDetail({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Detail Product Page {params.productId}</h1>;
}

```
- When u open http://localhost:3001/products/1, the ui should display Detail Product Page 1.
- The params is a object that contains the id of the product.