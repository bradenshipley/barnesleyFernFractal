let x = 0
let y = 0
function setup() {
  createCanvas(600, 600)
  background(36)
}
function nextPoint() {
  let nextX
  let nextY
  //generating a random number
  let r = random(1)
  //assiging the next X and Y points based on the percentage chances given
  if (r < 0.01) {
    //option 1
    nextX = 0
    nextY = 0.16 * y
  } else if (r < 0.86) {
    //option 2
    nextX = 0.85 * x + 0.04 * y
    nextY = -0.04 * x + 0.85 * y + 1.6
  } else if (r < 0.93) {
    //option 3
    nextX = 0.2 * x + -0.26 * y
    nextY = 0.23 * x + 0.22 * y + 1.6
  } else {
    //option 4
    nextX = -0.15 * x + 0.28 * y
    nextY = 0.26 * x + 0.24 * y + 0.44
  }

  x = nextX
  y = nextY
}
//x range = (-2.1820 < x < 2.6558) and y range = (0<= y < 9.9983)
function drawPoint() {
  //changing our Colormode away
  colorMode(HSB, 255, 255, 255)
  //making the first argument of our color reference the current y position of the point
  stroke(map(y, 0, 9.9983, 0, 255), 255, 255, 200)
  strokeWeight(2)
  //giving the x and y ranges
  let px = map(x, -2.182, 2.6558, 0, width)
  let py = map(y, 0, 9.9983, height, 0)
  point(px, py)
}

function draw() {
  //having a loop occur each frame makes it so that we can load more than one pixel at a time
  for (let i = 0; i < 150; i++) {
    drawPoint()
    nextPoint()
  }
}
