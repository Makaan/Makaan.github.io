const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const init = async () => {
  let response = await fetch('https://makaan.github.io/datos.json')
  let json = await response.json()

  var preguntas  = "{"+"\"Pais\""+":[";
  for(pais of json) {
    
    preguntas = preguntas + "{ "+"\"nombre\""+":"+ pais.NombreComun+","+"\"capital\""+":"+pais.Capital+"},"
    
  }
  alert(preguntas);

  //Una vez que ya tenes el json manipulalo como quieras
  document.getElementById('datos').textContent = JSON.stringify(preguntas, undefined, 2);
}

init()