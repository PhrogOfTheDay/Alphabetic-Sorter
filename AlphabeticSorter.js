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
    charArr.sort((a,b) =>{
        a[0] - b[0]
    })
    charArr.map(char =>{
        char[0] > 96 ? String.fromCharCode(char[0]+32) : String.fromCharCode(char[0]);
    })
}

console.log(sortAlphabetically('cbazx'));
