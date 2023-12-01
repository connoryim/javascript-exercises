const removeFromArray = function() {
    let list = arguments[0];
    console.log(list);
    for(i=1; i < arguments.length;i++){
        console.log(i);
        for(k=0; k < list.length;){
            if(list[k]===arguments[i]){
               const removed = list.splice(k,1);
            }
            k++
            console.log(list);
        };
    };
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
