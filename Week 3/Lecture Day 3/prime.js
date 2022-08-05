


function isprime(n){
    if(n<2)
    console.log(`${n} is not a prime number`)
    for (let i=2; i<n; i++){
        if(n% i==0) {
            console.log(`${n} is not a prime number`)
            return
        }
    }
    console.log(`${n} is a prime number`)
}

n = parseInt(prompt("enter a number: "))
isprime(n)

