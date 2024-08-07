function formateNumber(inputString) {
    const regex = /[0-9]+\.?[0-9]*/
    const match = inputString.match(regex)
    if(!match) return ''

    let numberString = match[0]
    if(numberString.includes(".")){
        let parts = numberString.split('.')
        let interPart = parts[0]
        let decimalPart = parts[1]
        decimalPart = decimalPart.substring(0,2)
        while(decimalPart.length < 2){
            decimalPart += '0'
        }
        numberString = `${interPart}.${decimalPart}`
    }else {
        numberString += '.00'
    }

    // console.log(inputString, ":", numberString)
    return numberString
}

formateNumber('abc123.456') // "123.45"
formateNumber('abc123') // "123.00"
formateNumber('abc888efg.456789') // "888.00"
formateNumber('a6b7c8efg.456789') // "6.00"
formateNumber('hhhh') // ""
