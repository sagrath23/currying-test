// this function will receive a function to currying
export function curry(fn) {
  function nest(N, args) { // the nest function acts as a clojure to get every individual param passed to subsequent calls of this
    return (...xs) => {// this return a function that receive some arguments (specified by spread operator ...)
      if (N - xs.length <= 0) { // check if are params to push to args 
        // if nest function push all params in args array, then, execute fn with that parameter
        return fn(...args, ...xs);
      }
      //if have more params to push, then, retur an execution of nest (that returns a function), adding received params to args array
      return nest(N - xs.length, [...args, ...xs]);
    };
  }
  // and return an execution of nest function (which is a function)
  return nest(fn.length, []);
}
