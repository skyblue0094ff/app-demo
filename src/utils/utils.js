export const getStyle = (element, attr, NumberMode) => {
  let target
  if (attr === 'scrollTop') {
    target = element.scrollTop
  } else if (element.currentStyle) {
    target = element.currentStyle[attr]
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr]
  }
  return NumberMode === 'float' ? parseFloat(target) : parseInt(target)
}
