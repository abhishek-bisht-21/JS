/**
 * Iterator: 
 * { 
 *   value: It stores the next value you get the sequence
 *   done: true/false [To know if the array is exhausted]
 *   next: function fetches the data for you. It returns an object which has value and done property
 * }
 */

let arr = [1,2,3,4,5]
iterator = arr[Symbol.iterator]();
iterator.next(); // {value: 1, done: false}