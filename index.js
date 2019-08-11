// Function to match full words with no capitalization dependencies
const findMatching = (drivers,string) => {
    return drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
}

//Function to partially match substrings (i.e. first letter of each word)

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => {
        let i = string.length
        return driver.slice(0,i).toUpperCase() === string.toUpperCase()
    })
}

// Function to match object values to a provided string

const matchName = (drivers, string) => {
    return drivers.filter(driver => {
        return driver.name.toUpperCase() === string.toUpperCase()
    })
}