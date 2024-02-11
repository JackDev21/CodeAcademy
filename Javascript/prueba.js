var min = function (list) {

    let listOrder = list.sort((a, b) => a - b)
    return listOrder[0];
}

var max = function (list) {
    list.sort((a, b) => b - a)
    return list[0];
}



list = [-5, 5, 10, 0, 1, 2, 3, 4, -6, -7]

console.log(min(list))
console.log(max(list))