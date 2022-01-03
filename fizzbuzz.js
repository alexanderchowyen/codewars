// Return an array
function fizzbuzz(n){
    let array = []
    for(var i=1;i<=n;i++){
     i % 15===0 ? array.push('FizzBuzz') : i % 5===0 ? array.push('Buzz') :
     i % 3===0 ? array.push('Fizz'): array.push(i)
    }
     return array
   }
