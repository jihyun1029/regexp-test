const str = `
010-1234-5678
thesecon@gmail.com
https://www.mdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the laszy dog.
abbcccdddd
`

// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.mdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the laszy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

// // const regexp = new RegExp('the', 'gi')
// // const regexp = /the/gi
// const regexp = /fox/gi
// // console.log(regexp.test(str))
// // console.log(str.replace(regexp, 'AAA'))
// str = str.replace(regexp, 'AAA')
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(regexp))
console.log(str.match(/\.$/gim))
// 이스케이프 문자(Escape Character)란 \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다.

console.log(str.match(/d$/g))
console.log(str.match(/^t/gm))
console.log(str.match(/h..p/g))
console.log(str.match(/fox|dog/g))
console.log(str.match(/http?/g))
console.log(str.match(/d{2}/g))
console.log(str.match(/d{2,}/g))
console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.match(/[fox]/g))
console.log(str.match(/[0-9]/g))
console.log(str.match(/[0-9]{1,}/g))

console.log(str.match(/\w/g))
console.log(str.match(/\bf\w{1,}\b/g))
console.log(str.match(/\d{1,}/g))
console.log(str.match(/\s/g))

const h = `   the hello  world   !`
console.log(h.replace(/\s/g, ''))

console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))