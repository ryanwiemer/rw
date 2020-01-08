export const clamp = (value, min, max) =>
  value < min ? min : value > max ? max : value

export const scale = (num, outMin, outMax) => {
  return ((num - 0) * (outMax - outMin)) / (1 - 0) + outMin
}

export function getOffsetTop(element) {
  let offsetTop = 0
  while (element) {
    offsetTop += element.offsetTop
    element = element.offsetParent
  }
  return offsetTop
}
