// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// a) Get all the countries from Asia continent /region using Filter function :

// const countries = new XMLHttpRequest();
// countries.open("GET","https://restcountries.com/v3.1/all",true)
// countries.send();
// countries.onload=function(){
//     var data = countries.response
//     var result = JSON.parse(data)
//     // console.log(result)
//     var res = result.filter((ele)=>ele.region==="Asia")
//     // console.log(res)
//      var final = res.forEach(element => console.log(element.name.common));
//     //  console.log(final);
// }

// b) Get all the countries with a population of less than 2 lakhs using Filter function :

// countries = new XMLHttpRequest();
// countries.open("GET","https://restcountries.com/v3.1/all",true)
// countries.send();
// countries.onload=function(){
//     var data = countries.response
//     var result = JSON.parse(data)
//     // console.log(result)
//     var res = result.filter((ele)=>ele.population<="2000000")
//     // console.log(res)
//      var final = res.forEach(element => console.log(element.name.common));
//     //  console.log(final);
// }


// c) Print the following details name, capital, flag, using forEach function :

// const countries = new XMLHttpRequest();
// countries.open("GET","https://restcountries.com/v3.1/all",true)
// countries.send();
// countries.onload=function(){
//     var data = countries.response
//     var result = JSON.parse(data)
//     // console.log(result)
//     var res = result.forEach(ele => console.log(`Country : ${ele.name.common}, Capital : ${ele.capital}, Flag : ${ele.flags.png}`));
//      console.log(res);

// }

// d) Print the total population of countries using reduce function :

// const countries = new XMLHttpRequest();
// countries.open("GET","https://restcountries.com/v3.1/all",true)
// countries.send();
// countries.onload=function(){
//     var data = countries.response
//     var result = JSON.parse(data)
//     // console.log(result)
//     var res = result.reduce((pop,i)=>{

//         return pop+i.population;

//     },0)
//     console.log(res)

// }

// e) Print the country that uses US dollars as currency :

// const countries = new XMLHttpRequest();
// countries.open("GET", "https://restcountries.com/v3.1/all", true);
// countries.send();
// countries.onload = function () {
//   var data = countries.response;
//   var result = JSON.parse(data);
//   // console.log(result)
//   var res = result.filter((ele) => ele.currencies && ele.currencies.USD);

//   var final = res.forEach((element) => console.log(element.name.common));
//   console.log(final);
// };

