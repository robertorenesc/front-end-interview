const verifyEven = seconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let date = new Date()
            let minutes = date.getMinutes()
            return minutes % 2 == 0 ? resolve(`Whe are in an even minute`) : reject(`Whe are in an odd minute`)
        }, seconds * 1000)
    })
};
