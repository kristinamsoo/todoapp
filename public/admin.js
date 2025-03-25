const adminSisu = document.getElementById('admin-sisu')
let tood = [] 


async function loeToodeAndmedjaKuvaLeht() {
    const result = await fetch('/api/tood', )
    if (!result.ok) {
        console.log('Viga andmete lugemisel')
        return;
    }

    tood = await result.json()
    adminSisu.innerHTML = looLeheHTML(tood)

    naitaParemPaan(0)
   
}


function looLeheHTML(tood) {
    const vasakPaan = looVasakPaanHTML(tood)
    return `
     <div class="row">
        <div class="col-4">
            ${vasakPaan}
        </div>
        <div id="parem-paan-sisu" class="col-8">
            siia tuleb parem paan
        </div>
     </div>
    `
}

    function looVasakPaanHTML(tood) {
        console.log(tood)
        let vasakPaan = ''
        let id = 0
        for (too of tood) {
          vasakPaan += `   
        <div class="vasak-paan-valik" onclick="naitaParemPaan(${id})">
        ${too.nimetus}
        </div>
        `
        id += 1
    }
    return vasakPaan
 }

 function naitaParemPaan(tooId) {
    const paremPaan = document.getElementById('parem-paan-sisu')
    const too = tood[tooId]
    

    const paremPaanHtml = `
    <h5>${too.nimetus}</h5>
    <div>Prioriteet: ${too.prioriteet}</div>
    <div>
        <label>
            <input type="checkbox" id="tehtud-checkbox" ${too.kasTehtud ? 'checked' : ''}>
            Tehtud
        </label>
    </div>
`
paremPaan.innerHTML = paremPaanHtml

    document.getElementById('tehtud-checkbox').addEventListener('change', (event) => {
    too.kasTehtud = event.target.checked;
    console.log(`Ülesanne "${too.nimetus}" tehtud olek: ${too.kasTehtud}`)
})
}
loeToodeAndmedjaKuvaLeht()
