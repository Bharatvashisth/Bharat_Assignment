/* if(true)
{
    let x=25;
}
console.log(x); */

/* let Order={
    id:1,
    title:'Bigbrother',
    price:100,

    printOrder:function(){
        console.log(this.title);
    },
     
    getPrice:function(){
        console.log(this.price);
    }

}

let copyOrder=Object.assign({},Order);
console.log(copyOrder); */


/* 
let arr=['Bharat','Amit','Capgemini'];
let arr2=arr.map((str,index)=>({name:str,length:str.length}));
console.log(arr2); */

/* let sum=function(x=5,y=7){
    return x+y;
}

sum(6,2);
sum(); */

/* let userFriends=function(username:any , ...friends:any){
    console.log(username);

    for(let f in friends)
    {
        console.log(friends[f]);
    }
}

userFriends('Bharat','Amit','Sagar'); */

/* 
let printCapitalNames=function(...names:any)
{
    for(let name of names){
        console.log(name.toUpperCase());
    }
}

let NamesArray=['aman','bharat','amit','shubham'];
printCapitalNames(...NamesArray); */

/* let value=48000;
let desk="PC-120";
let myname ="bharat";

console.log(`my name is ${myname} having desk no ${desk} worth ${value} is facing issue`);
 */
/* let Colors=['Red','Pink','green','blue'];
let [, ,wallcolor,]=Colors;
console.log(wallcolor); */

/* let org={

    name:'Bharat',
    address:{
        street:'Rohtak',
        pin:124001
    }
}

let fun=function(){
    let {name,address}=org;
    console.log(address.pin);
}

fun(); */

class Account{
   static sum=0;
   constructor(id,name,balance){
       Account.sum+=balance;
   }

   getBalance()
   {
       return Account.sum;
   }

}

class SavingAccount extends Account{
     constructor(id,name,balance,interest,cash_credit)
      {balance+=cash_credit+interest;
        super(id,name,balance);
        console.log('Balance Added to saving account');}
       

     }

class CurrentAccount extends Account{
    constructor(id,name,balance,interest,cash_credit){

        balance+=cash_credit+interest;
        super(id,name,balance);
          console.log('Balance Added to current');
    }

}    

interface Printable{
 fname?:string,
 lname?:string,
 id?:number,
 circumference?:number,
 area?:number
};

let Circle:Printable={
   circumference:583,
   area:600

};

let Employee:Printable={
    fname:'Bharat',
    lname:'Vashisth',
    id:83
};

function printAll(Circle,Employee){
console.log(Circle);
console.log(Employee);
}
printAll(Circle,Employee);











