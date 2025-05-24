//Question 1

let arr = [1,2,3,5,2,3,4,1];

let num;

console.log(arr.filter((num)=> num != 2));


//Question 2

let number = 287152;

let count = number.toString().length;

console.log(count);


//Question 3

let Num = 287152;

let sum = 0;

let copy = Num;

while(copy > 0){
    digit = copy % 10;
    sum +=digit;
    copy = Math.floor(copy/10)
}

console.log(sum);


//Question 4

let n = 5;
    let factorial = 1;
    for(let i = 1; i <= n ; i++){
        factorial *= i;
    }
console.log(`factorial of ${n} is ${factorial}`);
        

//Question 5

let Arr = [5,6,4,8,7,9,3,10,15];

let Largest = 0;

for(let i = 0; i < Arr.length ; i++){
    if(Arr[i] > Largest){
        Largest = Arr[i];
        
    }
}
console.log(Largest);
