function selectionSort(arr) {
    const animation = [];
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            animation.push({
                type: 'comparing',
                targets: [j, minIndex],
            });
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                animation.push({
                    type: 'marking',
                    targets: [j],
                });
            }
        }
        animation.push({
            type: 'switching',
            targets: [i, minIndex],
        });
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return animation;
}

export default selectionSort;
