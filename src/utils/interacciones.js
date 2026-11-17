// Manejadores de los botones de JS Básico.
// Cada función lee sus controles, llama al ejercicio y escribe en su output.
// Los ejercicios se importan para cpoder usarlos.
import * as ejercicios from './ejercicios.js';

// Cada botón llama a una función con nombre.
export function probarprecioPareja() {
  let precio = document.getElementById('precioPareja-precio').value;
  let resultado = ejercicios.precioPareja(precio);
  document.getElementById('resultado-precioPareja').textContent = resultado;
}

export function probarpuedeEntrar() {
  let edad = document.getElementById('puedeEntrar-edad').value;
  let resultado = ejercicios.puedeEntrar(edad);
  document.getElementById('resultado-puedeEntrar').textContent = resultado;
}

export function probarsumarPrecios() {
  let primero = document.getElementById('sumarPrecios-primero').value;
  let segundo = document.getElementById('sumarPrecios-segundo').value;
  let tercero = document.getElementById('sumarPrecios-tercero').value;
  // Agrupamos los textos de los tres controles en un único array.
  let precios = [primero, segundo, tercero];
  let resultado = ejercicios.sumarPrecios(precios);
  document.getElementById('resultado-sumarPrecios').textContent = resultado;
}

export function probarduracion() {
  let inicio = document.getElementById('duracion-inicio').value;
  let fin = document.getElementById('duracion-fin').value;
  let resultado = ejercicios.duracion(inicio, fin);
  document.getElementById('resultado-duracion').textContent = resultado;
}

export function probarhorarioValido() {
  let inicio = document.getElementById('horarioValido-inicio').value;
  let fin = document.getElementById('horarioValido-fin').value;
  let resultado = ejercicios.horarioValido(inicio, fin);
  document.getElementById('resultado-horarioValido').textContent = resultado;
}

export function probarcontarPorGenero() {
  let genero1 = document.getElementById('contarPorGenero-genero1').value;
  let genero2 = document.getElementById('contarPorGenero-genero2').value;
  let genero3 = document.getElementById('contarPorGenero-genero3').value;
  let buscado = document.getElementById('contarPorGenero-buscado').value;
  // Agrupamos los géneros en un array; el buscado es otro parámetro.
  let generos = [genero1, genero2, genero3];
  let resultado = ejercicios.contarPorGenero(generos, buscado);
  document.getElementById('resultado-contarPorGenero').textContent = resultado;
}

export function probarminutosTotales() {
  let primero = document.getElementById('minutosTotales-primero').value;
  let segundo = document.getElementById('minutosTotales-segundo').value;
  let tercero = document.getElementById('minutosTotales-tercero').value;
  // Los valores siguen siendo texto: el ejercicio hará la conversión.
  let duraciones = [primero, segundo, tercero];
  let resultado = ejercicios.minutosTotales(duraciones);
  document.getElementById('resultado-minutosTotales').textContent = resultado;
}

export function probarcoincideTexto() {
  let artista = document.getElementById('coincideTexto-artista').value;
  let texto = document.getElementById('coincideTexto-texto').value;
  let resultado = ejercicios.coincideTexto(artista, texto);
  document.getElementById('resultado-coincideTexto').textContent = resultado;
}

export function probarcoincideEscenario() {
  let escenario = document.getElementById('coincideEscenario-escenario').value;
  let buscado = document.getElementById('coincideEscenario-buscado').value;
  let resultado = ejercicios.coincideEscenario(escenario, buscado);
  document.getElementById('resultado-coincideEscenario').textContent = resultado;
}


export function probarhora() {
  let minutos = document.getElementById('hora-minutos').value;
  let resultado = ejercicios.hora(minutos);
  document.getElementById('resultado-hora').textContent = String(resultado);
}

export function probaraplicarDescuento() {
  let precio = document.getElementById('aplicarDescuento-precio').value;
  let porcentaje = document.getElementById('aplicarDescuento-porcentaje').value;
  let resultado = ejercicios.aplicarDescuento(precio, porcentaje);
  document.getElementById('resultado-aplicarDescuento').textContent = String(resultado);
}

export function probarmayorDuracion() {
  let textoduraciones = document.getElementById('mayorDuracion-duraciones').value;
  let duraciones = [];
  if (textoduraciones.trim() !== '') {
    duraciones = textoduraciones.split(';');
  }
  let resultado = ejercicios.mayorDuracion(duraciones);
  document.getElementById('resultado-mayorDuracion').textContent = String(resultado);
}

export function probargenerosUnicos() {
  let textogeneros = document.getElementById('generosUnicos-generos').value;
  let generos = [];
  if (textogeneros.trim() !== '') {
    generos = textogeneros.split(';');
  }
  let resultado = ejercicios.generosUnicos(generos);
  if (Array.isArray(resultado)) {
    document.getElementById('resultado-generosUnicos').textContent = '[' + resultado.join(', ') + ']';
  } else {
    document.getElementById('resultado-generosUnicos').textContent = resultado;
  }
}

export function probarbuscarArtistas() {
  let textoartistas = document.getElementById('buscarArtistas-artistas').value;
  let artistas = [];
  if (textoartistas.trim() !== '') {
    artistas = textoartistas.split(';');
  }
  let texto = document.getElementById('buscarArtistas-texto').value;
  let resultado = ejercicios.buscarArtistas(artistas, texto);
  if (Array.isArray(resultado)) {
    document.getElementById('resultado-buscarArtistas').textContent = '[' + resultado.join(', ') + ']';
  } else {
    document.getElementById('resultado-buscarArtistas').textContent = resultado;
  }
}

export function probarduracionesEnHoras() {
  let textoduraciones = document.getElementById('duracionesEnHoras-duraciones').value;
  let duraciones = [];
  if (textoduraciones.trim() !== '') {
    duraciones = textoduraciones.split(';');
  }
  let resultado = ejercicios.duracionesEnHoras(duraciones);
  if (Array.isArray(resultado)) {
    document.getElementById('resultado-duracionesEnHoras').textContent = '[' + resultado.join(', ') + ']';
  } else {
    document.getElementById('resultado-duracionesEnHoras').textContent = resultado;
  }
}

export function probarcalcularCompra() {
  let textoprecios = document.getElementById('calcularCompra-precios').value;
  let precios = [];
  if (textoprecios.trim() !== '') {
    precios = textoprecios.split(';');
  }
  let textocantidades = document.getElementById('calcularCompra-cantidades').value;
  let cantidades = [];
  if (textocantidades.trim() !== '') {
    cantidades = textocantidades.split(';');
  }
  let resultado = ejercicios.calcularCompra(precios, cantidades);
  document.getElementById('resultado-calcularCompra').textContent = String(resultado);
}

export function probarsolapan() {
  let inicioA = document.getElementById('solapan-inicioA').value;
  let finA = document.getElementById('solapan-finA').value;
  let inicioB = document.getElementById('solapan-inicioB').value;
  let finB = document.getElementById('solapan-finB').value;
  let resultado = ejercicios.solapan(inicioA, finA, inicioB, finB);
  document.getElementById('resultado-solapan').textContent = String(resultado);
}

export function probarcrearCartel() {
  let textoArtistas = document.getElementById('crearCartel-artistas').value;
  let artistas = [];
  if (textoArtistas.trim() !== '') {
    artistas = textoArtistas.split(';');
  }
  let resultado = ejercicios.crearCartel(artistas);
  document.getElementById('resultado-crearCartel').textContent = JSON.stringify(resultado) ?? 'Ejercicio pendiente.';
}

export function probarhayEntradasEnPresupuesto() {
  let textoPrecios = document.getElementById('hayEntradasEnPresupuesto-precios').value;
  let precios = [];
  if (textoPrecios.trim() !== '') {
    precios = textoPrecios.split(';');
  }
  let maximo = document.getElementById('hayEntradasEnPresupuesto-maximo').value;
  let resultado = ejercicios.hayEntradasEnPresupuesto(precios, maximo);
  document.getElementById('resultado-hayEntradasEnPresupuesto').textContent = JSON.stringify(resultado) ?? 'Ejercicio pendiente.';
}

export function probarordenarPrecios() {
  let textoPrecios = document.getElementById('ordenarPrecios-precios').value;
  let precios = [];
  if (textoPrecios.trim() !== '') {
    precios = textoPrecios.split(';');
  }
  let resultado = ejercicios.ordenarPrecios(precios);
  document.getElementById('resultado-ordenarPrecios').textContent = JSON.stringify(resultado) ?? 'Ejercicio pendiente.';
}
