
module.exports = function countCats(backyard) {
    const cat = '^^';
    let count = 0;

    backyard.flat().reduce(function (previtem, item) {
        if (item === cat) {
            count++;
        }
        return count;
    }, 0)

    return count;
};
