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


// function that zips two arrays

// map-reduce method
function zipArrays(arr1, arr2) {
  let combined = arr1.map( (e, i) => {
    return [e, arr2[i]]
  })
  return combined.reduce( (a, b) => {
    return a.concat(b)
  })
}

// for loop method
function zipArrays(arr1, arr2) {
  let combined = []
  for (let i = 0; i < arr1.length; i++) {
    combined.push(arr1[i], arr2[i])
  }
  return combined
}
