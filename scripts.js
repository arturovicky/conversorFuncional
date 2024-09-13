
function miFuncion(tipo) {
    
    
    valores = {
        c: document.getElementById('c').value,
        f: document.getElementById('f').value,
        k: document.getElementById('k').value,
    };
    var valoresFinales={
        c: 0,
        f: 0,
        k: 0,
    }
    switch (tipo) {
        case "c":
           enviarHttp(tipo,valores.c);
            document.getElementById('f').value=valoresFinales.f;
            document.getElementById('k').value=valoresFinales.k;
           

            
            break;
        case 'f':
            enviarHttp(tipo,valores.f);
            break;
        case 'k':
            enviarHttp(tipo,valores.k);
            break;
    
        
    }
    
}
//la funcion envia la informacion mediante post y recibe la informacion en formato json
function enviarHttp(tipo,valor){
    datos={
        c: 0,
        f:0,
        k:0,
    }
    fetch('convertir.php',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({tipo:tipo, valor:valor})
    }).then(response =>response.json())
    .then(data=>{
       switch (tipo) {
        case 'c':

            document.getElementById('k').value =Number(`${data.k}`).toFixed(2);
            document.getElementById('f').value =Number(`${data.f}`).toFixed(2);
            break;
        case 'f':
            document.getElementById('k').value =Number(`${data.k}`).toFixed(2);
            document.getElementById('c').value =Number(`${data.c}`).toFixed(2);
            break;
        case 'k':
            document.getElementById('c').value =Number(`${data.c}`).toFixed(2);
            document.getElementById('f').value =Number(`${data.f}`).toFixed(2);
            break;

       }
        
    })
    .catch(error => console.error('Error:', error));
}

