const testVar = {}

function testFunc() {
  return "hi"
}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
//   //...
// ]

const recordArray = [
  {year: "2000", result: "W"}
]

function superbowlWin(recordArray) {
  // for each year, check if the result was "W"

  let result = recordArray.find(record => record.result === "W")

  // return the year if it found a matching result
  return result ? result.year : undefined
}

superbowlWin(recordArray)
