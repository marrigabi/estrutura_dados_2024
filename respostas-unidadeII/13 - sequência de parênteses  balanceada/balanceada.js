function isBalanceado(sequencia) {
    let stack = [];
    let pairs = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
  
    for (let char of sequencia) {
      if (['(', '[', '{'].includes(char)) {
        stack.push(char);
      } else if ([')', ']', '}'].includes(char)) {
        if (stack.pop() !== pairs[char]) return false;
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isBalanceado("(]")); // false
  console.log(isBalanceado("{[()]}")); // true
  