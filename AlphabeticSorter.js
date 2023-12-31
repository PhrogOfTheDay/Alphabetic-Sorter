/** 
*@param {string} string
*/

function sortAlphabetically(string){
    let strArr = string.split('');
    return strArr.map(char=>{
        return char.charCodeAt(0);
    })
    .map(char =>{
        if(char>96){
            return [char-32, true]
        }
        return [char, false]
    })
    .sort((a,b) =>{
        return a[0] - b[0]
    })
    .map(char =>{
        return char[1] ? 
        String.fromCharCode(char[0]+32) 
        : String.fromCharCode(char[0]);
    }).join('')
}

console.log(sortAlphabetically('ZxyAbc'));
//Outputs AbcxyZ