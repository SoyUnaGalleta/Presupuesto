var arrayNombreGasto = []
var arrayCantidadGasto = []


function funciones() {
    let btnCalcular = document.getElementById('botonCalcular')
    btnCalcular.addEventListener('click', realizarCalculo)

    let btnAgregar = document.getElementById('botonAgregar')
    btnAgregar.addEventListener('click', agregarGasto)
}


function realizarCalculo() {
    let presupuesto = document.getElementById('presupuesto').value
    let calculos = document.getElementsByClassName('calculos')

    if (Number.isInteger(parseInt (presupuesto))) {
        calculos[0].innerHTML = presupuesto
        let calculoFinal = parseInt (presupuesto) - parseInt(calculos[1].innerHTML)
        calculos[2].innerHTML = calculoFinal
    } else {
        alert ('Ingrese un número entero.')
    }
}


const crearGasto = (arrayNombreGasto,arrayCantidadGasto)  => {

    let listaGasto = document.getElementsByClassName('listaGastos')[0]
    let paraEliminar = document.getElementsByClassName('detalleGastos')

    while (0 < paraEliminar.length) {
        paraEliminar[0].remove()
    }

    for (let i = 0; i < arrayNombreGasto.length; i++) {

        let detalleGastos = document.createElement('div')
        detalleGastos.setAttribute('class','detalleGastos')
        listaGasto.appendChild(detalleGastos)

        let cajaUno = document.createElement('p')
        cajaUno.setAttribute('class','cajaGastosUno')
        cajaUno.innerHTML = arrayNombreGasto[i]
        detalleGastos.appendChild(cajaUno)

        let cajaDos = document.createElement('p')
        cajaDos.setAttribute('class','cajaGastosDos')
        cajaDos.innerHTML = '<span>$</span>' + arrayCantidadGasto[i]
        detalleGastos.appendChild(cajaDos)

        let cajaTres = document.createElement('p')
        cajaTres.setAttribute('class','cajaGastosTres')
        cajaTres.setAttribute('onclick',`borrarElemento(${i})`)
        cajaTres.innerHTML = 'Borrar'
        detalleGastos.appendChild(cajaTres)

    }

    let gastoTotal = 0
    for (let i = 0; i < arrayCantidadGasto.length; i++) {
        gastoTotal += parseInt(arrayCantidadGasto[i])
    }

    let calculos = document.getElementsByClassName('calculos')
    calculos[1].innerHTML = gastoTotal

    let calculoFinal = parseInt(calculos[0].innerHTML)- parseInt(calculos[1].innerHTML)
    calculos[2].innerHTML = calculoFinal

}


function agregarGasto() {
    let nombreGasto = document.getElementById('nombreGasto').value
    let cantidadGasto = document.getElementById('gasto').value

    if (Number.isInteger(parseInt (cantidadGasto))) {
        arrayNombreGasto.push(nombreGasto)
        arrayCantidadGasto.push(parseInt (cantidadGasto))

        let gastoTotal = 0
        for (let i = 0; i < arrayCantidadGasto.length; i++) {
            gastoTotal += parseInt(arrayCantidadGasto[i])
        }

        let presupuesto = document.getElementsByClassName('calculos')
        if (gastoTotal <= parseInt(presupuesto[0].innerHTML)) {
            crearGasto(arrayNombreGasto,arrayCantidadGasto)
        } else {
            alert (`¡No te alcanza! Tienes un saldo de: $${presupuesto[2].innerHTML}`)
        }

    } else {
        alert ('Ingrese un número entero.')
    }

}


function borrarElemento(i) {
    arrayNombreGasto.splice(i, 1)
    arrayCantidadGasto.splice(i, 1)
    crearGasto(arrayNombreGasto,arrayCantidadGasto)
}