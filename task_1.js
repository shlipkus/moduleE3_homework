let myArr = [0, 1, 3, 5.5, 6, 8, "str", null];

function checkFunc(arr){
  let countChet = 0;
  let countNechet = 0;
  let countZero = 0;

  for (let i of arr){
    if (Number.isInteger(i)){
      if(i==0){
        ++countZero;
      }
      else if(i%2==0){
        ++countChet;     
      }
      else{
        ++countNechet;
      }
    }
  }
  let ans = 'Четных чисел: '+ countChet + '\n Нечетных чисел: ' + countNechet + '\n Нолей: ' + countZero;
  return ans
}
