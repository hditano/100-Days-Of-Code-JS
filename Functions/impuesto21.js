const impuesto = {
  iva (num) {
    console.log(`El total en pesos argentinos es $${(parseFloat((num * 87) *  1.21).toFixed(2))}`);
  } 
}

impuesto.iva(20);