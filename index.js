function findMatching(arr , str){
    return arr.filter((element =>{
        return element.toLowerCase() === str.toLowerCase()
    }))
}

function fuzzyMatch(arr , str){
    return arr.filter(element =>{
        return element.substring(0 , str.length) === str
    })

}

function matchName(obj , str){
    return obj.filter(objElement =>{
        return objElement['name'] === str
    })
}
