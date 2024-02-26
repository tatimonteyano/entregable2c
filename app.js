import {ProductManager} from "./productManager.js";
import express from 'express'
const app = express()
const port = 3000

// Ruta para obtener un producto por su id
app.get("/products/:pid", async (req, res) => {
  const id = req.params.pid; // extraemos el id del parámetro de la ruta
  const productId = await pm.getProductById(id); // intentamos obtener el producto por su id

  // Si el producto no existe, enviamos un mensaje de error con código  404
  if (!productId) {
    res.status(404).send("Product not found - 404");
  } else {
    res.json(productId); // si el producto existe, lo enviamos como respuesta
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
