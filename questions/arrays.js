// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

function solution(A) {
    
    let ordered = [...A]

    var aux = 0
    for (let i = 0; i < ordered.length - 1; i++) {
        
        if (ordered[i] > ordered[i+1]) {
            aux = ordered[i]
            ordered[i] = ordered[i+1]
            ordered[i+1] = aux
        }
        
    }
    console.log(ordered)

}

console.log(solution([1, 3, 10, 5, 1, 2, 7]))