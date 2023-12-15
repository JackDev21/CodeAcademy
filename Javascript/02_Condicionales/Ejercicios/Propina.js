const tipCalculator = (quality, total) => {
    let bad = (total * 5) / 100;
    let ok = (total * 15) / 100;
    let good = (total * 20) / 100;
    let excellent = (total * 30) / 100;

    if (quality === "bad") {
        return bad;
    } else if (quality === "ok") {
        return ok;
    } else if (quality === "good") {
        return good;
    } else if (quality === "excellent") {
        return excellent;
    } else {
        return (total * 18) / 100;
    }
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator("good", 100)); //should return 20

