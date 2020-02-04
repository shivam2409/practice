
class Person{
    constructor(name, lastName, Dob){
    this.name=name;
    this.lastName=lastName;
    this.Dob=Dob;
    }
    calcAge(){
        var age= new Date().getFullYear()-this.Dob;
    console.log(age);
    }
}

class Athe extends Person{
    constructor(name,lastName,Dob,madel,oly){
    super(name,lastName,Dob)
    this.madel=madel;
    this.oly=oly;
    }

    won(){
        this.madel++;
        console.log(this.madel);
    }
} 

const shivam = new Athe('shivam','patel',1996,10,1);

shivam.calcAge();
shivam.won();