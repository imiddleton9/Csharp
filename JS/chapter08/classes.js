class Car{
    constructor(type, model, color){
        this.type = type;
        this.model = model;
        this.color= color;
    }
    get type(){
        return this._type.toUpperCase();
    }
    set type(newType){
        this._type = newType;
    }
    drive(){
        return(this.type + ' is driving too fast.');
    }
}
class SelfDrivingCar extends Car{
    constructor(type, model, color, numberOfSensors){
        super(type, model, color);
        this.numberOfSensors = numberOfSensors;
    }
}
let myCar = new SelfDrivingCar('Mazda', '3', 'Grey', 300);
let yourCar = new Car('Ford', 'Fusion', 'Black', 50);
console.log(myCar.color);
console.log(yourCar.color);
console.log(myCar.numberOfSensors);