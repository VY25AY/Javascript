console.log(2<2);
console.log(2>9);
console.log(3==3);
console.log(4<=3);
console.log(5>=0);



// let's apply our comparison  on different data type 
// so in js this is not a good pratice
console.log("2">1);//true
console.log("3"<5);//true



console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
// so the reason behind the output is that 
// equality check and comparison check work differently comparison check take null as a number 0.




// now let's check with undefined also
console.log(undefined>0);//false
console.log(undefined<0);//false
console.log(undefined==0);//false
console.log(undefined>=0);//false
console.log(undefined<=0);//false 

console.log("2"===2);//false