
//creating an object in js
const obj ={ 
    firstName: "David",
    lastName: "Tucker"
};

//creating a map

const map1 = new Map();
map1.set("firstName", "David");
map1.set("lastName", "David");
console.log(map1);
//Using Non-string Keys
map1.set(new Date().getTime(),"Numer Key");
console.log()
