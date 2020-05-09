const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const init = async () => {
  let response = await fetch('https://makaan.github.io/datos.json')
  let json = await response.json()

  let preguntas = []

  for(pais of json) {
    const opciones = []
    let i = 0
    while (i < 2) {
      const random = randomNumberInRange(0, json.length - 1)
      if(json[random].Capital !== pais.Capital) {
        opciones.push(json[random].Capital)
        i++
      }
    }
    opciones.push(pais.Capital)
    preguntas.push({
      nombreComun: pais.NombreComun,
      capital: pais.Capital,
      opciones: opciones
    })
  }

  //Una vez que ya tenes el json manipulalo como quieras
  document.getElementById('datos').textContent = JSON.stringify(preguntas, undefined, 2);
}

init()