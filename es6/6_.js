const verifyEven = seconds => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let date = new Date()
            let minutes = date.getMinutes()
            return minutes % 2 == 0 ? resolve(true) : reject(false)
        }, seconds * 1000)
    })
};

(async(seconds) => {
    var isEven = await verifyEven(seconds)
    console.log(`Whe are in a ${isEven ? 'even' : 'odd'} minute`)
})(3)