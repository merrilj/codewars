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


// function that capitalizes a string

function capitalize(str) {
  return str.replace(/\w\S*/g, ( (char) => {
    return char.charAt(0).toUpperCase() + char.substr(1).toLowerCase()
  }))
}


// function that counts specified char in string

function count_char(str, char) {
  return str.toLowerCase().split(char.toLowerCase()).length - 1
}


// function that accumulates each char in a string

function accum(str) {
  return str.split('').map( (c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}


// function that prints odd numbers up to num specified

function print_odds(num) {
  let odds = []
  for (let i = 0; i < num; i++) {
    if (i % 2 !== 0)
      odds.push(i)
  }
  return odds
}


// function that finds largest element in array

// Math.max method
function find_largest(arr) {
  return arr.reduce( (a, b) => {
    return Math.max(a, b)
  })
}

// sort reduce method
function find_largest(arr) {
  let sorted = arr.sort( (a, b) => {
    return a - b
  })
  return sorted[sorted.length - 1]
}
