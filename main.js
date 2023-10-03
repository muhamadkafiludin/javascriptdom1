document.title = 'kafil'
console.log(document.body)
//append
const body = document.body
// body.append('HELLO WORLD')

// const h1 = document.createElement('h1')
// h1.textContent = 'INI H1 BRO'

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML ="<marquee>KAFIL</marquee>"

// const namaKamu = document.createElement('b')
// namaKamu.innerText = 'MUHAMAMMAD>'

// body.append(h1)
// body.append(namaSaya)
// body.append(namaKamu)
//endappend

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultText = 'klik saya 1'
btn1.textContent = defaultText

console.log(btn1)
console.log(btn2)

function clikButton() {
    const newText = document.createElement('p')
    newText.textContent = 'HALLO BUNG'
    body.append(newText)
}

function ubahText() {
    btn1.textContent = 'hehehe'
}

function oriText() {
    btn1.textContent = defaultText
}

function clikButton1() {
    const newText = document.createElement('p')
    newText.textContent = 'kafill'
    body.append(newText)
}