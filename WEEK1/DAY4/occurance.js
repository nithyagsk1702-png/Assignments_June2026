function countOccurance()
{
    let input="JavaScript"
    let count = 0
    for (let i = 0; i < input.length; i++) {
       if(input[i]==='a'){
        count++;
       }
        
    }
    console.log("Number of Occurance of a in given input is " + count);
}

 countOccurance()
