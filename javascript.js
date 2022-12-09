// var divs = document.getElementsByTagName('div');


// for(let i = 0; i <divs.length; i++){
//   divs[i].addEventListener('click', function(){
//     console.log('You Clicked! div #'+ i)

//   })
// }


// const cupcake = document.querySelector('.cupcake');
// const container = document.querySelector('.orders')

// let cupcakes = [
//  {id:1,flavor:'Strawberry'},
//  {id:2,flavor:'Apple'},
//  {id:3,flavor:'Banana'}
// ]

// let randomCupcake;
// let orderNumber = 0;
// let baseAmount = 5;
// let finalAmount;
// const dicountID = 2;
// let dicountAmount = 3;
// let message

// cupcake.addEventListener("click",function(){
//  // Select a random cupcake
//  randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;

//  // Increment the order number, we get a different order with each cupcake.
//  orderNumber += 1;

//  // Depending on the "dicountID" variable, this cupcake is on sale or not.
//  finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;

//  // Create the message
//  message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
//  container.insertAdjacentHTML('beforeend',message)

// });


// function returnEmployee(){
//   const name = 'Francis';
//   const age = 21;
//   const position = "Manager";

//   console.log(`His name is ${name}, he is ${age} years old`)
// }

// returnEmployee(); 



// const names = ["James", "Ron", "Ace"]

// console.log(`The name is ${names[Math.floor(Math.random() * names.length )]}`)

// var list = document.querySelector('.user-list')


// function addUser (name,lastname){
  
  
//   var template = 
//   `
//     <div>
//       <div>${name} ${lastname} </div>
//     </div>
//   `;

//   list.insertAdjacentHTML("beforeend", template)
// }


// addUser('Veejay','Lemita');



// We have a user profile with a name, lastname, age, profession and salary.

// And we want to console log everything just like:

// "My name is xxx xxx, i'm xxx years old. I work as xxx and make $xxx.



// const profile = {
//   name : 'Veejay',
//   age: 22,
//   profession: 'Frontend Developer',
//   salary: 5000
// };

// console.log(`My name is ${profile.name}, I'm ${profile.age}. I work as a ${profile.profession} and make $${profile.salary}`)

// const ul = document.querySelector(".players");

// const players = [
//   {jersey:56,name:"Djounte Murray",position:"Point guard",PPG:2.6},
//   {jersey:98,name:"Dennis Rodman",position:"Small Forward",PPG:10.8},
//   {jersey:1,name:"Michael Jordan",position:"Small Forward",PPG:345.6},
//   {jersey:2,name:"Lebron James",position:"Shooting Guard",PPG:26.7},
//   {jersey:33,name:"Patrick Ewing",position:"Center",PPG:20.2}
// ]


// let list = '';

// for(let i = 0; i <players.length; i++){
//   let player = players[i]

//   list += `
//     <li>${player.name}  ${player.jersey} ${player.position} ${player.PPG}<li>
//   `
// }

// ul.insertAdjacentHTML("afterend", list)



// var developers = ['Veejay','Menard','Neil','Dave','Jethro','Zeus']

// for (var i = 0; i < developers.length; i++){
//   console.log(developers[i])
// }



// const iNetdevelopers = ['MBDG','VAML','NACB','JMCC','ZG','JL','DF']

// iNetdevelopers.forEach(function(titi){
//   console.log(titi)
// })

// let template = ''

// iNetdevelopers.forEach(function(iNetdeveloper){
//   template += `<div>HI, my name is ${iNetdeveloper}</div>`
// });

// document.body.insertAdjacentHTML("afterbegin",template)


// let purchases = [
//   {quantity:2,amount:200},
//   {quantity:22,amount:200},
//   {quantity:24,amount:200}
// ]

// let total = 0;

// purchases.forEach(function(item){
//   total += item.quantity * item.amount
// });

// console.log(total)



// We have an array with products, and each product has a name and a price.

// We want to loop the array and print a div with the name and price, and if it is less than 100 bucks, we want to show an ON SALE.

// const products = [
//   {name:'Iphone',price:200},
//   {name:'Motorola',price:70},
//   {name:'Samsung',price:150},
//   {name:'Sony',price:98},
//   {name:'Windows phone',price:10}
// ];

// let template = '';

// products.forEach(function(product){
//   function discount(){
//     if(product.price < 100){
//       return (`<span>On sale !!</span>`)
//     }else {
//       return(``)
//     }
//   }
  
//   template += `
//     <div class="product">
//       <h1>${product.name}</h1>
//       ${discount()}
//       <strong>Price: $ ${product.price} </strong>
//     </div>
//   `

// });

// document.body.insertAdjacentHTML("afterbegin", template)

// const numbers = [1,2,3,4,5]

// const otherArray = numbers.map(function(number){
//   return number * 50
// });

// console.log(otherArray)

 

// const users = [
//   {user:'Veejay Lemita', age:18,eyes:'black'},
//   {user:'Adolf Manalo', age:23,eyes:'black'},
//   {user:'Manalo Lemita', age:22,eyes:'black'}
// ]


// const listOfUsers = users.map(function(user){
//   return user.user
// });

// console.log(users)
// console.log(listOfUsers)

// listOfUsers.forEach(function(name){
//   const select = document.querySelector('select')

//   select.insertAdjacentHTML("afterbegin", `<option value="${name}">${name}</option>`)

// })


// const paintings = [
//   {name:'Mona lisa',width:200,height:200},
//   {name:'The scream',width:400,height:600},
//   {name:'The last supper',width:600,height:700}
// ]

// let template = '';

// const paintingsDimension = paintings.map(function(painting){
//   return `The ${painting.name} is ${painting.width} X ${painting.height}`
// }) 


// console.log(paintingsDimension)

// paintingsDimension.forEach(function(paintingDimension){

//   template += `
//     <div>
//         ${paintingDimension}
//     </div>
//   `

//   console.log(paintingDimension)
// });

// document.body.insertAdjacentHTML("afterbegin", template)


// const cars = [
//   {name:'Ford',price:200},
//   {name:'Nissan',price:400},
//   {name:'Nissan',price:600}
// ]

// function convertPrice(price){
//   return price * 5000;
// }


// const price = cars.map(function(car){
//   return `The ${car.name} is Php ${convertPrice(car.price)}`
// })

// console.log(price)


// const channels = [
//   {name:'HBO',premium:true},
//   {name:'LIFE',premium:false},
//   {name:'Max',premium:true},
//   {name:'Cooking channel',premium:false},
//   {name:'WOBI',premium:false}
// ];

// const result = channels.filter(function(channel){
//   return channel.premium === true
// })

// console.log(result)



// const channels = [
//   {name:'HBO',premium:true},
//   {name:'LIFE',premium:false},
//   {name:'Max',premium:true},
//   {name:'Cooking channel',premium:false},
//   {name:'WOBI',premium:false}
// ];
// const user = {
//   name:'Francis',
//   premium:true,
//   premiumChannels:function(){
//     const $this = this;
//     return channels.filter(function(channel){
//       return channel.premium && $this.premium
//     })
//       // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
//   },
//   channels:function(){
//     return channels.filter(function(channel){
//       return channel.premium === false
//     })
//       // GET THE NON-PREMIUM CHANNELS
//   }
// }
// console.log(user.premiumChannels())
// // brings HBO and MAX
// console.log(user.channels())
// // brings LIFE, COOCKING CHANNEL AND WOBI





// const students = [
//   {name:"Francis",grade:6},
//   {name:"Martin", grade:5},
//   {name:"Martha",grade:6}
// ]

// ES5 Syntaxx
// let allStudentsPassedTheCourse = false

// for(let i = 0; i < students.length; i++){
//   let student = students[i]

//   if(student.grade < 6){
//     allStudentsPassedTheCourse = false;
//     break;
//   }else{
//     allStudentsPassedTheCourse=true;
//   }
// }

// ES6 every syntax

// let allStudentsPassedTheCourse = students.every(function(student){
//   return student.grade >= 6;
// })

// let allStudentsPassedTheCourse = students.some(function(student){
//   return student.grade >= 6;
// })

// console.log(allStudentsPassedTheCourse) 

// const previous = 200;
// const current= [
//   {item:'Guitar',amount:200},
//   {item:'Mic',amount:100},
//   {item:'Strap',amount:100}
// ]

// const results = current.reduce(function(sum,expense){
//   return sum + expense.amount
// },0)

// console.log(results)


// const users = [
//   {
//     name:"Francis",
//     lastname:"Norton",
//     age:25
//   },
//   {
//     name:"Martha",
//     lastname:"Norton",
//     age:25
//   },
//   {
//     name:"Rob",
//     lastname:"Norton",
//     age:25
//   }
// ]

// const name = users.reduce(function(start,user){
  
//   start.push(user.name)

//   return start;

// },[])

// console.log(name)

// // We need to calculate how many Km or Miles the user traveled.

// const trips = [
//    {to:'Brazil',distance:1000},
//    {to:'Chine',distance: 2500},
//    {to:'India',distance: 3000}
// ]

// const travel = trips.reduce(function(sum,destination){

//   return sum + destination.distance

// },0)

// console.log(`You traveled ${travel} miles`)

// //We have an object with computers. And what we want to know, HOW many computer we have with MAC and how many with WINDOWS.

// const computers = [
//    {type:'Laptop',price:124, os:'Windows'},
//    {type:'Desk',price:124, os:'Mac'},
//    {type:'Desk',price:124, os:'Windows'},
//    {type:'Laptop',price:124, os:'Mac'},
//    {type:'Laptop',price:124, os:'Windows'},
// ];

// let ostypes = computers.reduce(function(start, item){

//   return item.os === 'Mac'? {mac:start.mac + 1,windows:start.windows}:{mac:start.mac ,windows:start.windows+ 1};
  
//   if(item.os === 'Mac'){
//     return {mac:start.mac + 1,windows:start.windows}
//   }else{
//     return {mac:start.mac ,windows:start.windows+ 1}
//   }

// },{mac:0,windows:0})

// console.log(ostypes)


//For of


// const users = ['Neil','Menard','Veejay']

// for(let user of users){
//   console.log(user)
// }


// const numbers = [10,20,30,40,50];
// let total = 0

// for(let number of numbers){
//    total += number
// }

// console.log(total)


// Fat arrow function 

// const value = function(name,age){
//   return `My name is ${name} and age ${age}`
// }

// console.log(value("Veejay",25))

// const result = (name,age) => {
//   return `My name is ${name} and age ${age}`
// }

// console.log(result("Veejay",25))

// //Fat arrow function single expression

// const sum = (x,y) => {
//   return x+y;
// }
// console.log(sum(1,2))


// const diff = (x,y) =>  x-y;
// console.log(diff(1,2))

// const multiple = x =>  x*10;
// console.log(multiple(2))

