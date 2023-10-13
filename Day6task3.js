//3)Write a “person” class to hold all the details.


class Person {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person1 = new Person('Karthiga', 'Velu', 31, 'India', 'Dharmapuri')
  
  console.log(person1)



  //4)write a class to calculate the uber price.


  let baseFee = 5
let cities = ["Dharmapuri", "Chennai", "Bangalore", ]
let uberRates = [5, 15, 10]

let customerName = "Karthiga" 
let customerCity = "Chennai" 

console.log("Hello", customerName+ ", welcome to the Uber ")

function getRate(customerCity) {
  
  function uberRate(customerCity, index) {
   
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  
  console.log(customerCity, "rate perKM:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)
