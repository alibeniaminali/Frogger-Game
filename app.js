function init() {
  const grid = document.querySelector('.grid')
  const result = document.querySelector('#result')
  const width = 10
  const cellCount = width * width
  const cells = []
  const frogClass = 'frog'
  const frogStartPosition = 98
  let frogCurrentPosition = 98
  const lilyClass = 'lily'
  const lilyPostition = 1
  let slowCar
  const slowCars = []
  const fastCars = []
  const slowWoods = []
  const fastWoods = []

  // * Create grid
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    // cell.innerText = i
    grid.appendChild(cell)
    cells.push(cell)
  }

  // * Add Lily to grid
  function addLily(position) {
    cells[position].classList.add(lilyClass)
  }
  addLily(lilyPostition)

  // * Add Frog to grid
  function addFrog(position) {
    cells[position].classList.add(frogClass)
  }

  // * Remove Frog from the grid
  function removeFrog(position) {
    cells[position].classList.remove(frogClass)
  }
  addFrog(frogStartPosition)

  // * Move Frog
  function handleKeyUp(event) {
    const key = event.keyCode
    const left = 37
    const right = 39
    const up = 38
    const down = 40
    removeFrog(frogCurrentPosition)

    if (key === right && frogCurrentPosition % width !== width - 1) {
      frogCurrentPosition++
    } else if (key === left && frogCurrentPosition % width !== 0) {
      frogCurrentPosition--
    } else if (key === up && frogCurrentPosition >= width) {
      frogCurrentPosition -= width
    } else if (key === down && frogCurrentPosition + width <= cellCount - 1) {
      frogCurrentPosition += width
    }
    addFrog(frogCurrentPosition)
    winOrLose()
  }
  document.addEventListener('keyup', handleKeyUp)

  // * Create river
  const river2 = cells.slice(20, 30)
  river2.forEach((element) => {
    element.classList.add('river')
  })
  const river1 = cells.slice(40, 50)
  river1.forEach((element, i) => {
    element.classList.add('river')
    if (i === 2 || i === 6 || i === 9) {
      element.classList.add('wood')
      slowWoods.push(element)
    }
  })
  // * Create road
  const road2 = cells.slice(60, 70)
  road2.forEach((element, i) => {
    element.classList.add('road')
    if (i === 2 || i === 5 || i === 8) {
      element.classList.add('car1')
      fastCars.push(element)
    }
  })
  const road1 = cells.slice(70, 80)
  road1.forEach((element, i) => {
    element.classList.add('road')
    if (i === 2 || i === 5 || i === 8) {
      element.classList.add('car')
      slowCars.push(element)
    }
  })

  slowCars.forEach((element) => {
    element.classList.add('car')
  })
  fastCars.forEach((element) => {
    element.classList.add('car1')
  })

  // * Create and position the woods
  // const wood1of2 = document.createElement('div')
  // river1[0].appendChild(wood1of2)
  // const wood2of2 = document.createElement('div')
  // river1[1].appendChild(wood2of2)
  // const wood1of22 = document.createElement('div')
  // river1[6].appendChild(wood1of22)
  // const wood2of22 = document.createElement('div')
  // river1[7].appendChild(wood2of22)

  // // * Fast woods
  // const fastWood1of2 = document.createElement('div')
  // river2[8].appendChild(fastWood1of2)
  // const fastWood2of2 = document.createElement('div')
  // river2[9].appendChild(fastWood2of2)
  // const fastWood1of22 = document.createElement('div')
  // river2[3].appendChild(fastWood1of22)
  // const fastWood2of22 = document.createElement('div')
  // river2[4].appendChild(fastWood2of22)

  // const slowWoods = [wood1of2, wood2of2, wood1of22, wood2of22]
  // const fastWoods = [fastWood1of2, fastWood2of2, fastWood1of22, fastWood2of22]

  slowWoods.forEach((element) => {
    element.classList.add('wood')
  })
  fastWoods.forEach((element) => {
    element.classList.add('wood')
  })

  // * Slow Items Movement
  // * Move Slow Cars
  slowCar = setInterval(() => {
    slowCars.forEach((car, i) => {
      const roadPosition = road1.indexOf(car)
      road1[roadPosition].classList.remove('car')
      if (roadPosition === road1.length - 1) {
        slowCars[i] = road1[0]
      } else {
        slowCars[i] = road1[roadPosition + 1]
      }
      slowCars[i].classList.add('car')
    })
    winOrLose()
  }, 300)

  slowWood = setInterval(() => {
    slowWoods.forEach((wood, i) => {
      const riverPosition = river1.indexOf(wood)
      river1[riverPosition].classList.remove('wood')
      if (riverPosition === river1.length - 1) {
        slowWoods[i] = river1[0]
      } else {
        slowWoods[i] = river1[riverPosition + 1]
      }
      slowWoods[i].classList.add('wood')
    })
    winOrLose()
  }, 300)

  // * Fast Items Movement
  // * Move Fast cars
  fastCar = setInterval(() => {
    fastCars.forEach((car1, i) => {
      const roadPosition = road2.indexOf(car1)
      road2[roadPosition].classList.remove('car1')
      if (roadPosition === 0) {
        fastCars[i] = road2[9]
      } else {
        fastCars[i] = road2[roadPosition - 1]
      }
      fastCars[i].classList.add('car1')
    })
    winOrLose()
  }, 300)

  fastWood = setInterval(() => {
    fastWoods.forEach((wood) => {
      const riverPosition = river2.indexOf(wood.parentElement)
      river2[riverPosition].removeChild(wood)
      if (riverPosition === 0) {
        river2[9].appendChild(wood)
      } else {
        river2[riverPosition - 1].appendChild(wood)
      }
    })
  }, 300)

  // * Win or Lose Functions
  // function winOrLose() {
  //   if (cells[1].classList.contains('frog')) {
  //     result.innerHTML = 'You Won!'
  //     result.style.color = 'green'
  //     result.style.fontSize = '50px'
  //     result.style.padding = '2px'
  //     removeFrog(frogCurrentPosition)
  //     frogCurrentPosition = frogStartPosition
  //     addFrog(frogStartPosition)
  //   } else if (
  //     cells[frogCurrentPosition].classList.contains('car') ||
  //     cells[frogCurrentPosition].classList.contains('river')
  //   ) {
  //     result.innerHTML = 'You Lost!'
  //     result.style.color = 'red'
  //     removeFrog(frogCurrentPosition)
  //     frogCurrentPosition = frogStartPosition
  //     addFrog(frogStartPosition)
  //   }
  // }

  function winOrLose() {
    if (cells[1].classList.contains('frog')) {
      result.innerHTML = 'You Won!'
      result.style.color = 'green'
      result.style.fontSize = '50px'
      result.style.padding = '2px'
      removeFrog(frogCurrentPosition)
      frogCurrentPosition = frogStartPosition
      addFrog(frogStartPosition)
    } else if (
      cells[frogCurrentPosition].classList.contains('car') ||
      cells[frogCurrentPosition].classList.contains('car1') ||
      cells[frogCurrentPosition].classList.contains('wood')
    ) {
      result.innerHTML = 'You Lost!'
      result.style.color = 'red'
      removeFrog(frogCurrentPosition)
      frogCurrentPosition = frogStartPosition
      addFrog(frogStartPosition)
    }
  }
}
window.addEventListener('DOMContentLoaded', init)
