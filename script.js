//This code augments the sorter function directly into the String object for greater ease

String.prototype.noCaseSort = function(){
    let strArr = this.split('');
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