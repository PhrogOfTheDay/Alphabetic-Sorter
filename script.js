//This code augments the sorter function directly into the Array object for greater ease

Array.prototype.noCaseSort = function(){
    return this.map(char=>{
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
    })
}

console.log(['A','a','b','D','Y','Z'].noCaseSort())