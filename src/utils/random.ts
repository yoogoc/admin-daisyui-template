/* eslint-disable @typescript-eslint/indent */
export function randomNum(minNum: number, maxNum: number): number {
  switch (arguments.length) {
  case 1:
    return parseInt((Math.random() * minNum + 1).toString(), 10)
  case 2:
    return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10)
  default:
    return 0
  }
}

export function randomNumX(x: number) : number {
  return randomNum(10 ** (x - 1), 10 ** x - 1)
}
