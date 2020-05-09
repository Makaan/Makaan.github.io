function async init() {
  let response = await fetch('/datos.json')
  let json = await response.json()
  document.getElementById('datos').innerHTML = json
}

init()