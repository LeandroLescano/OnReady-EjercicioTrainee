IngresoDatos = () => {
  const vehicle = {
    marca: "",
    modelo: "",
    puertas: null,
    cilindrada: null,
    precio: 0,
  };

  var vehicle1 = Object.create(vehicle);
  vehicle1.marca = "Peugeot";
  vehicle1.modelo = "206";
  vehicle1.puertas = 4;
  vehicle1.precio = 200000;

  var vehicle2 = Object.create(vehicle);
  vehicle2.marca = "Honda";
  vehicle2.modelo = "Titan";
  vehicle2.cilindrada = 125;
  vehicle2.precio = 60000;

  var vehicle3 = Object.create(vehicle);
  vehicle3.marca = "Peugeot";
  vehicle3.modelo = "208";
  vehicle3.puertas = 5;
  vehicle3.precio = 250000;

  var vehicle4 = Object.create(vehicle);
  vehicle4.marca = "Yamaha";
  vehicle4.modelo = "YBR";
  vehicle4.cilindrada = 160;
  vehicle4.precio = 80500.5;

  var array = [vehicle1, vehicle2, vehicle3, vehicle4];

  return array;
};

Ejercicio = () => {
  var arrayVehicle = IngresoDatos();
  var expensiveV = arrayVehicle[0];
  var cheapV = arrayVehicle[0];
  var letterV = "Inexistente";
  arrayVehicle.forEach((v) => {
    let precioAct = Intl.NumberFormat(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
      .format(v.precio)
      .replace(".", ",")
      .replace(",", ".");

    if (v.precio > expensiveV.precio) {
      expensiveV = v;
    }
    if (v.precio < cheapV.precio) {
      cheapV = v;
    }
    if (v.modelo.toLowerCase().indexOf("y") >= 0) {
      letterV = v.marca + " " + v.modelo + " $" + precioAct;
    }
    if (v.puertas > 0) {
      console.log(
        "Marca: " +
          v.marca +
          " // Modelo: " +
          v.modelo +
          " // Puertas: " +
          v.puertas +
          " // " +
          "Precio: $" +
          precioAct
      );
    } else {
      console.log(
        "Marca: " +
          v.marca +
          " // Modelo: " +
          v.modelo +
          " // Cilindrada: " +
          v.cilindrada +
          "c // " +
          "Precio: $" +
          precioAct
      );
    }
  });
  console.log("=============================");
  console.log(
    "Vehículo más caro: " + expensiveV.marca + " " + expensiveV.modelo
  );
  console.log("Vehículo más barato: " + cheapV.marca + " " + cheapV.modelo);
  console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + letterV);
  console.log("=============================");
  console.log("Vehículos ordenados por precio de mayor a menor:");
  arrayVehicle.sort((a, b) => {
    return b.precio - a.precio;
  });
  arrayVehicle.forEach((v) => {
    console.log(v.marca + " " + v.modelo);
  });
};

Ejercicio();
