
function forLoop(array) {
  for (let beans = 0; beans < 25; i++) {
    if beans === 1 {
      array.push("I am ${i} strange loop")
    } else {
      array.push("I am ${i} strange loops")
    }
  }
  return array
}
var ary = [ ]
forLoop(ary)
