const BMIfn = function(mass, height) {
    return (mass / (height * height)).toFixed(1)
}
const John = {
    mass: 78,
    height: 1.69
}

const Mark = {
    mass: 92,
    height: 1.95
}
const data = [BMIfn(Mark.mass, Mark.height), BMIfn(John.mass, John.height)]
const markHigherBM = data[0] > data[1]
const text = markHigherBM ? `Mark's BMI is higher than John's!` : `"John's BMI is higher than Mark's!`
console.log(text)

//  2
const cau2 = markHigherBM ? `Mark's BMI ${data[0]} is higher than John's ${data[1]}!` : `"John's BMI${data[1]} is higher than Mark's ${data[0]}!`
console.log(cau2)