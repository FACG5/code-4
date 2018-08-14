
/**
 * Genome function is a function that assending sort an array by swaping 
 * the array elements.
 * 
 * example:
 * 
 * gnomeSort([3, 0, 2, 5, -1, 4, 1])
 * 
 * the result 
 * // => [ -1, 0, 1, 2, 3, 4, 5 ]
 */


function gnomeSort(arr) {

    // loop over the arry and check the which element is the smalest 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) swap(arr, i);
    }
    return arr;
}


function swap(arr, i) {

    // loop over the two element and made a swap
    for (; i > 0 && arr[i - 1] > arr[i]; i--) {
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
}
console.log(gnomeSort([3, 0, 2, 5, -1, 4, 1]));
