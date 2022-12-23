function encapsulatedState(x) {
    let state = 10;
    return function() {
      state += x;
      console.log(state);
      return state;
    }
}

console.log(encapsulatedState(10));