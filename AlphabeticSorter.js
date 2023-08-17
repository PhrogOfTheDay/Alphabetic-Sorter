/** 
*@param {string} string
*/

function sortAlphabetically(string){
    let strArr = string.split('');
    let charArr = strArr.map(char=>{
        return char.charCodeAt(0);
    })
    charArr = charArr.map(char =>{
        if(char>96){
            return [char-32, true]
        }
        return [char, false]
    })
    console.log(charArr);
    charArr.sort((a,b) =>{
        return a[0] - b[0]
    })
    console.log(charArr)
    return charArr.map(char =>{
        return char[1] ? 
        String.fromCharCode(char[0]+32) 
        : String.fromCharCode(char[0]);
    }).join('')
}


console.log(sortAlphabetically('cbazZx'));
