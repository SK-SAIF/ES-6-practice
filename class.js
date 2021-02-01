class Student{
    constructor(givenName,givenId,givenAge){
        this.name = givenName;
        this.id = givenId;
        this.age = givenAge;

        this.school="Kalimunnesa school"
    }

}
const std1=new Student("Arefin",25232323,23);
const std2=new Student("Mitu",34232342,24);
console.log(std1,std2);
