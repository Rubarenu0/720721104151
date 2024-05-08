const num=parseInt(prompt("Enter the numbers:"));
if(num===1){
    console.log("1 is neither prime or composite number");
}
else if(number>1){
    for(let i=2;i<num;i++)
    {
        if(num%1==0)
        {
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(`${number}is a prime number`);
    }
    else{
        console.log(`${number}is a not prime number`);
    }
}
else{
    console.log("The number is not a prime number");
}