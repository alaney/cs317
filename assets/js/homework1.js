var array = generateArray(100);
console.log(bubblesort(array));
console.log(insertionsort(array));
fibonacci(1,0,20);
console.log(factorial(21));

/**
 * generate random array of integers
 */
function generateArray(length) {
    var array = [];
    for (var i = 0; i < length; i++) {
        var num = Math.floor(Math.random() * length);
        array.push(num);
    }
    return array;
}

/**
 * The Bubble Sort algorithm passes over a list item by item, comparing each 
 * item's value to the one after it. If the first value is greater than 
 * the second, the items' positions are switched. Once all items have been visited
 * they will be in their correct sorted positions.
 *
 * This algorithm is adapted from an example on http://rosettacode.org/
 */
function bubblesort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                done = false;
                var temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}

/**
 * Insertion Sort algorithm works by inserting one item at a 
 * time into a previously sorted part of the list, moving items 
 * up as necessary. To start, the first item in the list is
 * considered the sorted part.
 *
 * This algorithm is adapted from an example on http://rosettacode.org/
 */
function insertionsort(array) {
    for (var i = 0; i < array.length; i++) {
        var temp = array[i];
        for (var j = i; j > 0 && temp < array[j - 1]; j--) {
            array[j] = array[j - 1];
        }
        array[j] = temp;
    }
    return array;
}

/** 
 * This algorithm lists the fibonacci sequence using recursion. To start, the 
 * algorithm uses 1 as the current value, 0 as the last value, and n. It sums 
 * the last and current values and passes the sum as the new current value to the 
 * next iteration. 
 * 
 */
function fibonacci(current, last, n) {
    if (n == 0) {
        return;
    }
    else {
        console.log(current);
        fibonacci(current + last, current, --n);
    }
}

/**
 * This recursive factorial algorithm returns n multiplied by the result of 
 * the previous iteration of the algorithm. This is repeated until n is less 
 * than 2. 
 */
function factorial (n) {
    if (n < 2) {
        return 1;
    }
    else {
        return n * factorial(--n);
    }
}