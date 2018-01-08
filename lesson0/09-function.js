// 关键词 function*。这个星号表示这个函数是一个生成器函数。
// 这意味着这个函数可以在运行的时候跳出然后再跳回来
function* inc () {
  let number = 0
  while (true)
    yield number++
}

let test = inc()

console.log(test.next().value) // -> 0
console.log(test.next().value) // -> 1
console.log(test.next().value) // -> 2