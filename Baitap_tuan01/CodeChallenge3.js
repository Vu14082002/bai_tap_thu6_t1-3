const data1 = [{
        team: "Dolphins",
        score: [96, 108, 89]
    },
    {
        team: "Koalas",
        score: [88, 91, 110]
    }
]
const dataBonus1 = [{
        team: "Dolphins",
        score: [97, 112, 101]
    },
    {
        team: "Koalas",
        score: [109, 95, 123]
    }
]
const dataBonus2 = [{
        team: "Dolphins",
        score: [97, 112, 101]
    },
    {
        team: "Koalas",
        score: [109, 95, 106]
    }
]
const AvgFn = function(sroce) {
        const data = sroce.reduce(function(acc, value) {
            return acc + value
        }, 0) / 3
        console.log(data)
        return data
    }
    // Cau 2
if (AvgFn(data1[0].score) > AvgFn(data1[1].score)) {
    console.log(`Team Dolphins have avg score greater than Team Koalas`)
} else
if (AvgFn(data1[1].score) > AvgFn(data1[0].score)) {
    console.log(`Team Koalas  have avg score greater than Team Dolphins`)
} else {
    console.log(`Team Koalas  draw  Team Dolphins`)
}
// Cau 3