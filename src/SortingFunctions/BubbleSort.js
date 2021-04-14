const animation = [];
let currentID = 0;

const bubbleSort = (arr) => {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            animation.push({
                id: currentID++,
                type: 'comparing',
                targets: [j, j + 1],
            });
            if (arr[j] > arr[j + 1]) {
                animation.push({
                    id: currentID++,
                    type: 'switching',
                    targets: [j, j + 1],
                });
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return animation;
};

export default bubbleSort;
