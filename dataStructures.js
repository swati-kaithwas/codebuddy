// level {1/2/3}
// 3. Check for balanced parentheses using a stack
// ```
// Example:
// exp = "{[({})]}" should be valid
// but "{[(]} should be invalid
// ```
function Parantheses(arr) {
  let stack = [];
  let object = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(" || arr[i] == "{" || arr[i] == "[") stack.push(arr[i]);
    else if (arr[i] == ")" || arr[i] == "}" || arr[i] == "]") {
      let x = object[arr[i]];
      if (stack[stack.length - 1] == x) stack.pop();
      else return "invalid";
    }
  }
  if (stack.length == 0) return "valid";
  else return "invalid";
}
let input = "{[(]}";
let arr = input.trim().split("");
console.log(Parantheses(arr));
