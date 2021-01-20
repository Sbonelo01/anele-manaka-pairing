/*
 * Have the function largestFour(arr) take the array of integers stored in arr, and find the four largest elements and return their sum. 
 * For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the four largest elements in this array are 6, 6, 4, and 5 and the total sum of these numbers is 21, 
 * so your program should return 21. If there are less than four numbers in the array your program should return the sum of all the numbers in the array. 
 *
 */


 function largestFour(arr) {

    var sortedArray = [];

    var largest = arr.sort(function(a, b){return b-a});

    sortedArray.push(largest);


    // From here, once the array is properly sorted in descending order, 
    // add the total of the first four numbers in the array


    // 1. Get the first four digits

    // 2. Store the first four digits in a variable 

    // 3. Loop through the variable containing the first four digits

    // 4. Add all the numbers at index "i"
    
    var sum = sortedArray[0][0] + sortedArray[0][1] + sortedArray[0][2] + sortedArray[0][3]; 

    console.log(sum);

    return sum;

 }

 largestFour([4, 5, -2, 3, 1, 2, 6, 6]);