/**
 * Get the circumference of a circle from a radius
 * @param {Number} radius
 * @return {Int or decimal} Return the circumference of the circle.
 **/
function circumferenceOfACircle(radius) {
  let parsedRadius = parseInt(radius, 10);

  if (isNaN(parsedRadius)) {
    return 0;
  } else {
    let fullNum = 2 * Math.PI * radius;
    let rounded = fullNum.toFixed(2);
    return parseFloat(rounded, 10);
  }
}

module.exports = circumferenceOfACircle;
