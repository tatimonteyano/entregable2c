// Inicializa products como un arreglo vacío.
class ProductManager {
   constructor() {
     this.products =[];
     this.id = 0; // Propiedad de instancia para el ID
   }
//agrega un producto
addProduct (title, description, price, thumbnail ="https://acortar.link/EzwwQl", code, stock){
         //id autoincrementable
         this.id++
        // Validación de propiedades
      if (!title || !description || price === undefined || code === undefined || stock === undefined) {
          console.log("Faltan propiedades o algunas son inválidas.");
          return;
        }
        // Validación de código no repetido
        const codeExists = this.isCodeRepeated(code);
        if (codeExists) {
          console.log("El código ya está en uso para otro producto.");
          return;
        }
     this.products.push({title, description, price, thumbnail, code, stock, id:this.id});
   };
isCodeRepeated(code) {
   return this.products.some((product) => product.code === code);
}
//agregar metodo getProducts
getProducts() {
       return this.products;
};
//get product by id
getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
         return "Not found"; // Devuelve un mensaje en lugar de imprimirlo
      }
      return product;
   }; 
};

const products = new ProductManager();
products.addProduct("Bolsa de alimento", "bolsa de alimento de 15kg, Milhosky", 35000, "https://acortar.link/EzwwQl",253, 50);
products.addProduct("Bolsa de alimento", "bolsa de alimento de 15kg, Benikosky", 38000, "https://acortar.link/EzwwQl",254, 20);
products.addProduct("Bolsa de alimento", "bolsa de alimento de 15kg, Garfieldsky", 40000, "https://acortar.link/EzwwQl", 254, 20); //El código ya está en uso para otro producto.
console.log(products.getProducts());
products.getProductById (8);