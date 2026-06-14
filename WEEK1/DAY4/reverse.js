function reverseString()
{
    let input="Testleaf"
    let result = ""
    for (let i = input.length-1; i >= 0; i--) {
        
         result = result+input[i];
        }
         console.log(result);
     }


reverseString()