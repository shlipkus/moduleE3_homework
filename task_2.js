function primeNumber(num){
  if(Math.abs(num)>1000){
    console.log('Данные неверны');
    return
  }
  if(num===0||num==1||num==-1){
    console.log('Число не является простым');
    return
  }
  if(num==2||num==-2){
    console.log('Число является простым');
    return
  }
  for(let i=2; i<num; ++i){
    if(num%i==0){
      console.log('Число не является простым');
      return
    }    
  }
  console.log('Число является простым');
  return
}

primeNumber(-145)
