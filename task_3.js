function firstFunc(a){
  return function(b){
    console.log(a+b)
  }
}

let sum = firstFunc(5)
sum(6)
