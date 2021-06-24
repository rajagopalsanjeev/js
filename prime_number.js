let arr = [2,3,4,5,6,7,8,9,10].filter(num=>{
    for(let i = 2; i <= num/2 ; i++){
        if(num % i === 0 )
            return false;
    }
    return num >= 2;
})
console.log(arr);
