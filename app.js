const button = document.getElementById('generate-color-btn')

const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'pink', 'orange']

const generateRandomNumber = (maxNumber) => {
    return Math.floor(
        Math.random() * (maxNumber + 1)
    )
}

const generateRGBColor = () => {
    return [
        generateRandomNumber(255),
        generateRandomNumber(255),
        generateRandomNumber(255),
    ]
}



// button.addEventListener('click', () => {

// console.log('Button clicked')
// document.body.style.backgroundColor = colors[6];
// console.log(
//     Math.floor(
//         Math.random() = colors.length
//     )
// )

// const randomNumber = Math.floor(
//     Math.random() * 256

// )

// const randomNumber2 = Math.floor(
//     Math.random() * 256

// )
// const randomNumber3 = Math.floor(
//     Math.random() * 256

// )

button.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${generateRGBColor().join(', ')})`
})

