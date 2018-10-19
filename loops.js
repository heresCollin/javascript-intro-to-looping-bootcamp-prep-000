function forLoop(arr){
  for (i=0;i<25;i++) {
    if(i == 1) {
      arr.push('I am 1 strange loop.');
    }
    else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr
}

function whileLoop(num) {
  let countdown = num;
  while(countdown > 0){
    console.log(countdown);
    --countdown
  }
  return "done"
}