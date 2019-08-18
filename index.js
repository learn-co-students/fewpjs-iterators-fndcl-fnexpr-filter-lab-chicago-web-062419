// Code your solution here

const findMatching = (drivers,name) => {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
}



const fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => {
        return driver.charAt(0).toLowerCase() === name.charAt(0).toLowerCase()
    })
}



const matchName = (drivers, name) => {
    return drivers.filter(driver => {
        return driver.name.toUpperCase() === name.toUpperCase()
    })
}