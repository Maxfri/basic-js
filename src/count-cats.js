
module.exports = function countCats(backyard) {
    const cat = '^^';
    let count = 0;

    backyard.reduce(function (previtem, item) {
        return item.reduce(function (prevelement, element) {
            if (element === cat) {
                count++;
            }
            return count;
        }, 0)
    }, 0)

    return count;
};
