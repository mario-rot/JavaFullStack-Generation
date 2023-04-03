let people = ["Maria", "Dani", "Luis", "Juan", "Camila"]

console.log(`People in the list: ${people}`)
people.splice(people.indexOf("Dani"),1)
people.splice(people.indexOf("Juan"),1)
people.splice(people.indexOf("Luis"),1)
people.unshift("Luis")
// const luisIndex = people.indexOf("Luis")
// [people[luisIndex], people[0]] = [people[0], people[luisIndex]]
people.push('Mario')
for(let i = 0; i < people.length; i++){
	console.log(people[i])
	if (people[i] == "Maria"){
	break;
	}
}
console.log(people.indexOf("Maria"))
console.log(`People in the list after mods: ${people}`)
