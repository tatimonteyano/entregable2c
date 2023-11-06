const fs = require("fs"); //import

// Inicializa products como un arreglo vacío.
class ProductManager {
  constructor(fileName) {
    this.id = 0;
    this.path = fileName;
   //aqui iba un this.products = []
    if (fs.existsSync(this.path)) {
      try {
        let productFile = fs.readFileSync(this.path, "utf-8");
        this.products = JSON.parse(productFile);
      } catch (error) {
        this.products = [];
      }
    } else {
      this.products = [];
   }
  }

  //agrega un producto
  async addProduct(title, description, price, thumbnail, code, stock) {
    //id autoincrementable
    this.id++;
    // Validación de propiedades
    if (
      !title ||
      !description ||
      price === undefined ||
      code === undefined ||
      stock === undefined
    ) {
      console.log("Faltan propiedades o algunas son inválidas.");
      return;
    }
    // Validación de código no repetido
    const codeExists = this.isCodeRepeated(code);
    if (codeExists) {
      console.log("El código ya está en uso para otro producto.");
      return;
    }
    this.products.push({
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: this.id,
    });
    await this.saveFileProducts();
  }

  isCodeRepeated(code) {
    return this.products.some((product) => product.code === code);
  }

  //agregar metodo getProducts
  getProducts() {
    return this.products;
  }

  async saveFileProducts (){
      try {
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(this.products, null, "\t")
        );
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
  };

  //get product by id
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      return "Not found"; // Devuelve un mensaje en lugar de imprimirlo
    }
    return product;
  }
}
const productManagerTest = new ProductManager("./pruebas.txt"); // instancia de la clase
console.log(productManagerTest.getProducts());
