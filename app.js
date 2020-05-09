const init = async () => {
  let response = await fetch('/datos.json')
  let json = await response.json()

  //Una vez que ya tenes el json manipulalo como quieras
  document.getElementById('datos').innerHTML = JSON.stringify(json, null, 2) 
}

init()