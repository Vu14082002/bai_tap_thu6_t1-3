const BMIfn = function(mass, height) {
    return mass / (height * height)
}
const John = {
    mass: 78,
    height: 1.69
}

const Mark = {
    mass: 92,
    height: 1.95
}
console.log(`John`, BMIfn(John.mass, John.height))
console.log(`Mark`, BMIfn(Mark.mass, Mark.height))
const markHigherBM = BMIfn(John.mass, John.height) <= BMIfn(Mark.mass, Mark.height)
console.log(markHigherBM)