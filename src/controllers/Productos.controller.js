const ProductosDAO = require('../services/ProductosDAO.js');
const ProductoDTO = require('../classes/ProductoDTO.class.js');
const Cotizador = require('../classes/Cotizador.class.js');

const PrdDAO = new ProductosDAO();
const cot = new Cotizador();

const ProductosController = {
  async guardar(elemento) {
    return await PrdDAO.guardar(elemento);
  },
  async listarAll() {
    return await PrdDAO.listarAll();
  },
  async listarAllCotizaciones() {
    const docs = await PrdDAO.listarAll();

    const docsDto = docs.map((producto) => {
      const cotizaciones = {
        precioDolar: cot.getPrecioSegunMoneda(producto.price, "USD"),
        precioARS: cot.getPrecioSegunMoneda(producto.price, "ARS"),
      };

      console.log(Object.entries(cotizaciones));

      return new ProductoDTO(producto, cotizaciones);
    });

    return docsDto;
  },
};

module.exports = ProductosController;
