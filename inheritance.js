class Parents{
    constructor(){
        this.fathername="Schewzengger";
    }
    
}
class Child extends Parents{
    constructor(givenName){
        super();
        this.name=givenName;
    }
}
const baby=new Child("Tuktuki");
const baby2=new Child("Miguel");

console.log(baby);
console.log(baby2);