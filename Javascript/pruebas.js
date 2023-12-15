
let n0 = 0
let n1 = 1

for (let i = 0; i < 10; i++) {
    console.log(n0)
    n0 = n0 + n1
    n1 = n0 - n1
}