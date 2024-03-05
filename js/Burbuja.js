const FRM_CALCULAR = document.querySelector("#frmCalcula");

FRM_CALCULAR.addEventListener("submit", function (event) {
    event.preventDefault();
});

let elementosIngresados = [];

document.getElementById("botones").addEventListener("click", function () {
    let numeroIngresado = parseInt(document.querySelector("#txtNumero").value);
    let numeroIngresadoInput = document.querySelector("#txtNumero");

    if (numeroIngresadoInput.value.trim() == "") {
        alert("Ingresa un valor en la caja de texto");
        return;
    }

    elementosIngresados = [];
    
    for (let i = 0; i < numeroIngresado; i++) {
        const num = prompt(`Ingrese el elemento # ${i + 1}:`);

        if (!num) {
            alert('Por favor, ingrese un número válido.');
            return;
        }

        elementosIngresados.push(Number(num));
    }

    const originalArray = [...elementosIngresados];
    printArray('resultado', originalArray);

    document.getElementById("botones").style.display = "none";
    document.getElementById("ordenar").style.display = "block";
    document.getElementById("ordenSelect").style.display = "block";
});

document.getElementById("ordenar").addEventListener("click", function () {
    let ordenSeleccionado = document.querySelector("#ordenSelect").value;
    if(ordenSeleccionado==='nada'){
        alert("Por favor seleccione un tipo de orenamiento");
        return;

    }

    const arrayCopy = [...elementosIngresados];

    bubbleSort(arrayCopy, ordenSeleccionado);

    printArray('resultado2', arrayCopy);
});

function printArray(elementId, array) {
    document.getElementById(elementId).textContent = array.join(', ');
}

function bubbleSort(array, orden) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let comparacion = orden === 'ascendente' ? array[j] > array[j + 1] : array[j] < array[j + 1];
            
            if (comparacion) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
document.getElementById("imprimir").addEventListener("click", function () {
    location.reload();
});

