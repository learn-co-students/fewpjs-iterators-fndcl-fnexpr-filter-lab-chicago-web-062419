// Code your solution here

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
let string = "Sa"

const findMatching = (drivers, string) => {
    return drivers.filter(n => {
        return n.toLowerCase() == string.toLowerCase()
    })
}

const fuzzyMatch = (drivers, string) => {
    let x = string.length
    return drivers.filter(n => {
        return n.slice(0, x).toLowerCase() == string.toLowerCase()
    })
}

const matchName = (drivers, string) => {
    return drivers.filter(n => {
        return n.name.toLowerCase() == string.toLowerCase()
    })
}

console.log(fuzzyMatch(drivers, string))