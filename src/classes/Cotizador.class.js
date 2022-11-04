class Cotizador {
  static tasas = {
    USD: 1,
    ARS: 280,
  };

  getPrecioSegunMoneda(precio, moneda) {
    switch (moneda) {
      case "USD":
        return precio * Cotizador.tasas["USD"];
      case "ARS":
        return precio * Cotizador.tasas["ARS"];
      default:
        break;
    }
  }
}

module.exports = Cotizador;
