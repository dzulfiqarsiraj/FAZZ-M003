// Soal 2

function lengthCheck(s) {
    let arr = s.split(" ")
    return arr[arr.length - 1].length
}

console.log(lengthCheck("Hello World"))
console.log(lengthCheck("Saya adalah siswa Fazztrack"))