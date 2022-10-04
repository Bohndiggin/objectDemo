let person = {
    firstName: "William",
    lastName: "Bohn",
    heightInFeet: 6,
    age: 25,
    favorites: {
        movie1: "Patton",
        movie2: "Batman"
    },
    favFoods: ["Pizza", "Cheese", "More pizza"]
}

console.log(person.firstName)
console.log(person["firstName"])


let {lastName: last_name} = person

console.log(last_name)

console.log(person.favorites.movie1)

class Dog {
    constructor(name, color, age) {
        this.name = name
        this.color = color
        this.age = age
    }

    greeting() {
        console.log(`Hi! I'm ${this.name}! I am a dog.`)
    }
}

let arr = []
arr.push(new Dog("jimmy", "brown", 60))
arr.push(new Dog("james", "blue", 11))


arr[0].greeting()


console.log(arr)