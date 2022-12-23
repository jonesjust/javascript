const arr = [1,2,3,4];

export function getSum(array) {
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    console.log(sum);
    return sum;
}

getSum(arr);