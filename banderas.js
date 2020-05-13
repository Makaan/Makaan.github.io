document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  const datos = await response.json()
  const paises = datos.map((dato) => {
    return {
      pais: dato.name,
      capital: dato.capital,
      banderaSrc: dato.flag
    }
  })
  
  const container = document.getElementById('container')
  for(let pais of paises) {
    const item = document.createElement('div')
    item.className = 'item-pais'
    item.innerHTML = `<h3>${pais.pais}</h3><h4>${pais.capital}</h4><img src=${pais.banderaSrc} class="img-pais" />`

    container.appendChild(item)
  }
}
, false);

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'es'}, 'container');
}