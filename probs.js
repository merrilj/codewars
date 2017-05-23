// function that checks to see if parentheses are balanced

function balanced_parens(str) {
  let stack = []
  let open = { '{': '}', '[': ']', '(': ')' }
  let closed = { '}': true, ']': true, ')': true }

  for (let i = 0; i < str.length; i ++) {
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
function zip_arrays(arr1, arr2) {
  let combined = arr1.map( (e, i) => {
    return [e, arr2[i]]
  })
  return combined.reduce( (a, b) => {
    return a.concat(b)
  })
}

// for loop method
function zip_arrays(arr1, arr2) {
  let combined = []
  for (let i = 0; i < arr1.length; i++) {
    combined.push(arr1[i], arr2[i])
  }
  return combined
}


// function that finds longest string in array

function longest_string(arr) {
  let str_obj = {}

  let longest = arr.reduce( (acc, curr) => {
    return acc.length > curr.length ? acc : curr
  })

  str_obj[longest] = longest.length
  return str_obj
}
