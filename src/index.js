// You should implement your task here.

module.exports = function towelSort(matrix) {
    let sortedArr = [];
    let previousReverse = false;
    if (matrix) {
        matrix.map((el) => {
            if (previousReverse) {
                el.reverse();
            }
            sortedArr.push(...el);
            previousReverse = previousReverse ? false : true;
            return sortedArr;
        });
    }
    return sortedArr;
};
