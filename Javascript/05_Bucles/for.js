// Write your code below
const bobsFollowers = ["Pepe", "Paco", "Luna", "Lolo"]
const tinasFollowers = ["Lorena", bobsFollowers[2], bobsFollowers[3]]
const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j])
        }
    }
}

console.log(mutualFollowers)



