function allowdrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


const draggable = document.querySelectorAll('draggable')
const grid = grid.querySelectorAll('grid')

draggable.forEach(draggable => {
  draggable.addEventListener('dragstart',() => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

grid.forEach(grid => {
  grid.addEventListener('dragover', () e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(grid, e.clientY)
    console.log(afterElement)
    if (afterElement == null) {
      grid.appendChild(draggable)
    } else {
      grid.insertBefore(draggable, afterElement)
    }
    const draggable = document.querySelector('dragging')
    grid.appendChild(draggable)
  }
  const draggable = document.querySelector('dragging')
})
})

function getDragAfterElement(grid, y) {
  grid.querySelectorAll('draggable')
  const draggableElements = [...grid.querySelectorAll('draggable:not (.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundbyClientRect()
    const offset = y - box.top - box.height / 2
    console.log(offset)
    if (offset < 0 && offset > closest.offset)
    return {offset: offset, element: child}
    else {
      return closest
    }
  },{offset:Number.NEGATIVE_INFINITY})
}
