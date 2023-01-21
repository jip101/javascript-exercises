const removeFromArray = function(list, ...remove) {
    for (let item = list.length - 1; item >= 0; item--) {
        for (let value of remove){
            if (list[item] === value) {
                list.splice(item, 1);
            }
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;