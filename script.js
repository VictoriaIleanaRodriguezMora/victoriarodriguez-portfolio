let botonEnviar = document.querySelector("button");
let input = document.querySelector("input");
let ciudad;

function cargarCiudad() {
    ciudad = input.value;
        if(ciudad.length === 0){
            return alert("Campo vacio")
        }

    let request = $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916")

    request.done(function (data) {
        console.log(data);
        document.querySelector(".container").style.visibility = "visible";
        document.querySelector("#ciudad").textContent = data.name;
        document.querySelector("#temperatura").innerHTML = parseInt(data.main.temp - 273.15) + "<sup>°C</sup>";
        document.querySelector("img").setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
        document.querySelector("#descripcion").innerHTML = data.weather[0].description;
        ciudad.textContent = " "
        console.log(input.textContent)
    })

    request.fail(function(){
        alert("Ciudad Inexistente")
    })
}

botonEnviar.addEventListener("click", cargarCiudad);