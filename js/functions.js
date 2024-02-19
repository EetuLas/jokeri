const button = document.querySelector('button')
const table = document.querySelector('table')
const rivit = document.querySelector('p')

let jokeriRivit = 1

button.addEventListener('click', () => {
    const newRow = table.insertRow(0)
    
    for (let i = 0;i < 7; i++) {
        const cell1 = newRow.insertCell()
        const random_numbers = Math.floor(Math.random() * 10) 
        cell1.innerHTML = random_numbers
    }

    rivit.innerHTML = "Valmiita rivejä: " + jokeriRivit++

})