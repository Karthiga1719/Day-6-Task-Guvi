
//1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.

class movie{
  // title,
  // studio,
  // rating

  constructor(title,studio,rating="PG"){
      this.title = title
      this.studio = studio 
      this.rating = rating 
      console.log(this.title,this.studio,this.rating)
  }

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

getPG(movies){
  let  pgratedmovies = []
  console.log(movies.length)
   for(let i=0;i<movies.length;i++) {
       console.log(movies[i].rating)
       if(movies[i].rating == "PG"){
         pgratedmovies.push(movies[i])
   }
  // console.log(pgratedmovie)
   return pgratedmovies;
}

}
}


//c-option
const pgratedmovie = myMovie.getPG(allMovies)
console.log(pgratedmovie)
  

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

//const myMovies = new movie("Casino Player","Eon Production","PG13")
const myMovie = new movie("movie-1","studio-1")

const allMovies = [
    new movie("Movie1","studio-1"),
    new movie("Movie2","studio-2"),
    new movie("Movie3","studio-3","PG"),
    new movie("movies4","studio-4","PG")
]

// 2) Class Circle:-

// class circle {
//     constructor (radius) {
//       this.radius = radius;
//       this.color = "Red";
//     }
//     getarea() {
//       return Math.PI * Math.pow(this.radius, 1.0);
//     }
//     getperimeter() {
//       return 2 * Math.PI * this.radius;
//     }
//   };
  
//   let circle1 = new circle(10);
//   console.log(circle1.getarea());
//   console.log(circle1.getperimeter());


 
    

    


  