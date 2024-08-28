

document.addEventListener("DOMContentLoaded", function() {
  const secretCode = ["a", "b", "a", "c", "a", "b", "b"];

  const aButton = 65
  const bButton = 66
  const cButton = 67

  let index = 0

  // step 1: grab target of the event
  const button = document.querySelector('button#click-me-btn')
  const p = document.querySelector('p')
  const form = document.querySelector('form')
  const a = document.querySelector('a')
  const hiddenP = document.getElementById('cheat-code')

  document.addEventListener('keydown', function(event) {
    let character = convertkeyCodeToCharacter(event.which)
    if(secretCode[index] == character) {
      if (index == secretCode.length - 1) {
        hiddenP.textContent = "blood code enabled"
        index = 0
      }
      index++
    } else {
      index = 0
    }
  })

  function convertkeyCodeToCharacter(keyCode) {
    if (keyCode == aButton) {
      return "a"
    } else if (keyCode == bButton) {
      return "b"
    } else if (keyCode == cButton) {
      return "c"
    }
  }

  // step 2: attach event
  button.addEventListener('click', addExclamationMark)
  p.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = "24px"
    event.target.style.fontWeight = "bold"
  })

  p.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = "16px"
    event.target.style.fontWeight = "normal"
  })

  form.addEventListener('submit', handleSubmit)

  a.addEventListener('click', function(event) {
    event.preventDefault()

    console.log('we did not go to google!')
  })

  function addExclamationMark(event) {
    // how do we add an exclamation to our header?

    const header = document.getElementById('header-1')
    
    header.innerText = header.innerText + "!"
  }

  function handleSubmit(event) {
    event.preventDefault()

    // how do we create an li and add to our ul of users
    // how can we grab the value of the text field?

    const ul = document.getElementById('users')
    const li = document.createElement('li')
    const username = form[0].value
    li.textContent = username
    ul.appendChild(li)
    form[0].value = ""

    /* 
      <ul id="users">
        <li>Bob</li>
      </ul>
    */
  }
})
