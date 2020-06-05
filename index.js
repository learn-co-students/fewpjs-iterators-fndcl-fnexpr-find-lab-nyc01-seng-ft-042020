const testVar = {}

function testFunc() {
  return "hi"
}


// #function takes in array
// #filter through array and find if there is a 'W'
// return year if won
// return undefined if not won

superbowlWin = (record) => {
  let result = record.find(record => record.result === "W")
  return result ? (result.year) : undefined
};
