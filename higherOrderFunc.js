// A function that takes a function as an argument
function add(x, y) {
    console.log(x + y);
    return x + y;
}

function subtract(x, y) {
    console.log(x - y);
    return x - y;
}

function math(x, y, operator) {
    return operator(x, y);
}
  
math(5, 2, add); // 7