class Vehicle {
  constructor(wheelCount, maxSpeed) {
    this.wheelCount = wheelCount;
    this.maxSpeed = maxSpeed;
  }

  print() {
    console.log( //esta impresión puede no ser la que necesitamos
      `Ruedas: ${this.wheelCount}, Velocidad máxima: ${this.maxSpeed}.` 
    );
  }
}

//se construye otra clase "printer" específica para imprimir por consola
// para poder especificar ahí como quiero que se imprima
class VehiclePrinter {
  print(vehicle) {
    console.log(
      `Ruedas: ${this.wheelCount}, Velocidad máxima: ${this.maxSpeed}.`
    );
  }
}
