document.getElementById("form").addEventListener("submit", formSubmit);

function formSubmit(event){
    salasana = document.getElementById("salasana").value
    document.getElementById("tulostus").innerText =""
    if(document.getElementById("käytId").value.length < 6){
        document.getElementById("tulostus").innerText ="Käyttäjä ID liian lyhyt"
        event.preventDefault()
        return
    } else if(salasana.length < 6){
        let numeroOK = /[0-9]/.test(salasana);
        let isoKirjainOK = /[A-Z]/.test(salasana);
        let erikoismerkkiOK = /[!@£$€&%#]/.test(salasana);
        document.getElementById("tulostus").innerText ="Salasana liian lyhyt"
        event.preventDefault()
        return
    }
    event.preventDefault()
}