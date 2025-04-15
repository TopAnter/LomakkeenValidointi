document.getElementById("form").addEventListener("submit", formSubmit);

function formSubmit(event){
    salasana = document.getElementById("salasana").value

    let numeroOK = /[0-9]/.test(salasana);
    let isoKirjainOK = /[A-Z]/.test(salasana);
    let erikoismerkkiOK = /[!@£$€&%#]/.test(salasana);
    let postiNum = document.getElementById("postiNum").value
    let valittu = document.querySelector('input[name="gender"]:checked')
    let valittu2 = document.querySelector('input[name="kieli"]:checked')

    console.log(valittu2)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById("tulostus").innerText =""
    if(document.getElementById("käytId").value.length < 6){
        document.getElementById("tulostus").innerText ="Käyttäjä ID liian lyhyt"
        event.preventDefault()
        return
    } else if(salasana.length < 6){
        document.getElementById("tulostus").innerText ="Salasana liian lyhyt"
        event.preventDefault()
        return
    } else if (numeroOK == false || isoKirjainOK == false || erikoismerkkiOK == false){
        document.getElementById("tulostus").innerText ="Salasana vaatii numeron, ison kirjaimen sekä erikoismerkin"
        event.preventDefault()
        return
    } else if(document.getElementById("nimi").value.length < 1){
        document.getElementById("tulostus").innerText ="Nimi vaadittu"
        event.preventDefault()
        return
    } else if(document.getElementById("osoite").value.length < 1){
        document.getElementById("tulostus").innerText ="Osoite vaadittu"
        event.preventDefault()
        return
    } else if(document.getElementById("maa").value == ""){
        document.getElementById("tulostus").innerText ="Valitse maa"
        event.preventDefault()
        return
    } else if(/^[0-9]{5}$/.test(postiNum) == false){
        document.getElementById("tulostus").innerText ="Postinumeron tulee olla 5 numeroinen luku"
        event.preventDefault()
        return
    } else if(regex.test(document.getElementById("email").value.trim()) == false){
        document.getElementById("tulostus").innerText ="Sähköpostin tulee olla oikean muotoinen"
        event.preventDefault()
        return
    } else if(valittu == null){
        document.getElementById("tulostus").innerText ="sukupuoli vaaditaan"
        event.preventDefault()
        return
    } else if(valittu2 == null){
        document.getElementById("tulostus").innerText ="Kieli vaaditaan"
        event.preventDefault()
        return
    }
    event.preventDefault()
}