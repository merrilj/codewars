// function that checks to see if parentheses are balanced

function balancedParens(str) {
  let stack = []
  let open = { '{': '}', '[': ']', '(': ')' }
  let closed = { '}': true, ']': true, ')': true }

  for (var i = 0; i < str.length; i ++) {
    let chr = str[i]

    if (open[chr]) {
      stack.push(chr)
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false
    }
  }

  return stack.length === 0
}
