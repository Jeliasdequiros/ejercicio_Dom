// Recogemos los elementos que vamos a usar en variables(podemos usar tanto let como const) para poder trabajar con elllas a posteriori
let huevos_fritos = document.getElementById('huevos fritos'),
    salchichas = document.getElementById('salchichas'),
    zumo_de_naranja = document.getElementById('zumo de naranja'),
    Cafe_con_leche = document.getElementById('Cafe_con_leche'),
    btn_elegir = document.getElementById('Ordene')


// Aquí ya me he liado con las variables y los callback. No consigo que funcionen los precios!!!
btn_elegir.addEventListener('click', () => {
    let total = pedido.value
    carta.innerHTML = total
})