let amigos = [];

// Mostrar lista al cargar
document.addEventListener("DOMContentLoaded", mostrarLista);

// Función para agregar un amigo
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    mostrarLista();
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaDeAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");

        // Texto del amigo
        let nombreTexto = document.createElement("span");
        nombreTexto.textContent = amigos[i];
        nombreTexto.style.marginRight = "10px";

        // Botón de eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.title = "Eliminar";
        botonEliminar.style.cursor = "pointer";
        botonEliminar.style.background = "transparent";
        botonEliminar.style.border = "none";
        botonEliminar.style.color = "red";
        botonEliminar.style.fontSize = "16px";

        botonEliminar.onclick = function () {
            eliminarAmigo(i);
        };

        li.appendChild(nombreTexto);
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    }
}

// Función para eliminar un amigo
function eliminarAmigo(indice) {
    amigos.splice(indice, 1);
    mostrarLista();
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML =
        `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

