// Los manejadores se importan para conectarlos con onClick en cada botón.
import * as interacciones from '../utils/interacciones.js';

export default function JsBasico() {
  return (
    <>
      <h1>JS Básico</h1>
      <p>Explora los ejemplos y completa los TODO de <code>src/utils/ejercicios.js</code>. Guarda y vuelve a pulsar «Probar mi función».</p>
      <section aria-labelledby="ejemplos-js">
        <h2 id="ejemplos-js">1. Ejemplos resueltos</h2>
        <div className="rejilla-js">
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejemplo resuelto 1</p>
            <h3>Dos entradas</h3>
            <code>precioPareja(precio)</code>
            <p>Multiplica el precio por dos. Con 12 debe devolver 24.</p>
            <div className="controles-js">
              <label>Parámetro 1: precio
                <input id="precioPareja-precio" type="number" defaultValue={12} step="any" />
              </label>
              <button type="button" onClick={interacciones.probarprecioPareja}>Ejecutar ejemplo</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-precioPareja">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejemplo resuelto 2</p>
            <h3>Decidir por edad</h3>
            <code>puedeEntrar(edad)</code>
            <p>Regla ficticia: 18 o más devuelve «Puede entrar»; menos devuelve «Necesita acompañante».</p>
            <div className="controles-js">
              <label>Parámetro 1: edad
                <input id="puedeEntrar-edad" type="number" defaultValue={16} step="any" />
              </label>
              <button type="button" onClick={interacciones.probarpuedeEntrar}>Ejecutar ejemplo</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-puedeEntrar">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejemplo resuelto 3</p>
            <h3>Sumar un array de precios</h3>
            <code>sumarPrecios(precios)</code>
            <p>Recibe un array y usa un bucle for para sumar sus precios. Con ['5', '8', '3'] devuelve 16. El acumulador empieza en 0, por lo que un array vacío devuelve 0.</p>
            <div className="controles-js">
              <label>precios[0]: primer precio
                <input id="sumarPrecios-primero" type="number" defaultValue={5} step="any" />
              </label>
              <label>precios[1]: segundo precio
                <input id="sumarPrecios-segundo" type="number" defaultValue={8} step="any" />
              </label>
              <label>precios[2]: tercer precio
                <input id="sumarPrecios-tercero" type="number" defaultValue={3} step="any" />
              </label>
              <button type="button" onClick={interacciones.probarsumarPrecios}>Ejecutar ejemplo</button>
            </div>
             <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-sumarPrecios">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
        </div>
      </section>
      <section aria-labelledby="ejercicios-js">
        <h2 id="ejercicios-js">2. Ejercicios</h2>
        <p>Practica validación, recorridos y funciones como parámetros. En las listas separa los valores con punto y coma (;). Déjalas vacías para probar un array vacío. Los controles envían textos: convierte los valores numéricos dentro del ejercicio. Los resultados se comprueban comparándolos con los casos indicados.</p>
        <div className="rejilla-js">
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 1</p>
            <h3>Calcular la duración</h3>
            <code>duracion(inicio, fin)</code>
            <p>Inicio y fin son minutos enteros desde medianoche (0 ≤ inicio &lt; fin ≤ 1440). Con 600 y 645 devuelve 45.</p>
            <div className="controles-js">
              <label>Parámetro 1: inicio
                <input id="duracion-inicio" type="number" defaultValue={600} step="any" />
              </label>
              <label>Parámetro 2: fin
                <input id="duracion-fin" type="number" defaultValue={645} step="any" />
              </label>
              <button type="button" onClick={interacciones.probarduracion}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-duracion">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 2</p>
            <h3>Validar un horario</h3>
            <code>horarioValido(inicio, fin)</code>
            <p>Devuelve true si ambos son enteros y 0 ≤ inicio &lt; fin ≤ 1440. Prueba 600–645 (true), 645–645, -1–60 y 600.5–645 (false).</p>
            <div className="controles-js">
              <label>Parámetro 1: inicio
                <input id="horarioValido-inicio" type="number" defaultValue={600} step="any" />
              </label>
              <label>Parámetro 2: fin
                <input id="horarioValido-fin" type="number" defaultValue={645} step="any" />
              </label>
              <button type="button" onClick={interacciones.probarhorarioValido}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-horarioValido">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 3</p>
            <h3>Contar por género</h3>
            <code>contarPorGenero(generos, buscado)</code>
            <p>Recibe un array de géneros y el género buscado. Recorre el array y cuenta las coincidencias exactas. Con ['indie', 'rock', 'indie'] y 'indie' devuelve 2. Con un array vacío devuelve 0.</p>
            <div className="controles-js">
              <label>generos[0]: primer género
                <select id="contarPorGenero-genero1" defaultValue="indie">
                  <option value="indie">Indie</option>
                  <option value="rock">Rock</option>
                  <option value="jazz">Jazz</option>
                </select>
              </label>
              <label>generos[1]: segundo género
                <select id="contarPorGenero-genero2" defaultValue="rock">
                  <option value="indie">Indie</option>
                  <option value="rock">Rock</option>
                  <option value="jazz">Jazz</option>
                </select>
              </label>
              <label>generos[2]: tercer género
                <select id="contarPorGenero-genero3" defaultValue="indie">
                  <option value="indie">Indie</option>
                  <option value="rock">Rock</option>
                  <option value="jazz">Jazz</option>
                </select>
              </label>
              <label>Segundo parámetro: buscado
                <select id="contarPorGenero-buscado" defaultValue="indie">
                  <option value="indie">Indie</option>
                  <option value="rock">Rock</option>
                  <option value="jazz">Jazz</option>
                </select>
              </label>
              <button type="button" onClick={interacciones.probarcontarPorGenero}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-contarPorGenero">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 4</p>
            <h3>Sumar minutos de música</h3>
            <code>minutosTotales(duraciones)</code>
            <p>Recibe un array de duraciones en minutos. Recorre sus valores, convierte cada uno con Number y acumula la suma. Con ['45', '90', '60'] devuelve 195. Con un array vacío devuelve 0.</p>
            <div className="controles-js">
              <label>duraciones[0]: primera duración
                <input id="minutosTotales-primero" type="number" defaultValue={45} step="any" />
              </label>
              <label>duraciones[1]: segunda duración
                <input id="minutosTotales-segundo" type="number" defaultValue={90} step="any" />
              </label>
              <label>duraciones[2]: tercera duración
                <input id="minutosTotales-tercero" type="number" defaultValue={60} step="any" />
              </label>
              <button type="button" onClick={interacciones.probarminutosTotales}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-minutosTotales">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 5</p>
            <h3>Buscar un artista</h3>
            <code>coincideTexto(artista, texto)</code>
            <p>Ignora mayúsculas y espacios exteriores de la consulta. Bruma Solar y « BRUMA » devuelven true. La consulta vacía también coincide.</p>
            <div className="controles-js">
              <label>Parámetro 1: artista
                <input id="coincideTexto-artista" type="text" defaultValue="Bruma Solar" />
              </label>
              <label>Parámetro 2: texto
                <input id="coincideTexto-texto" type="text" defaultValue=" BRUMA " />
              </label>
              <button type="button" onClick={interacciones.probarcoincideTexto}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-coincideTexto">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 6</p>
            <h3>Comparar escenarios</h3>
            <code>coincideEscenario(escenario, buscado)</code>
            <p>Compara los dos códigos exactamente. rio y rio devuelve true; rio y bosque devuelve false.</p>
            <div className="controles-js">
              <label>Parámetro 1: escenario
                <input id="coincideEscenario-escenario" type="text" defaultValue="rio" />
              </label>
              <label>Parámetro 2: buscado
                <input id="coincideEscenario-buscado" type="text" defaultValue="bosque" />
              </label>
              <button type="button" onClick={interacciones.probarcoincideEscenario}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-coincideEscenario">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 7</p>
            <h3>Convertir minutos a hora</h3>
            <code>hora(minutos)</code>
            <p>Convierte minutos enteros entre 0 y 1440 al formato HH:MM. Casos: 635 → 10:35; 0 → 00:00; 1440 → 24:00. Para valores inválidos devuelve 'Dato no válido'.</p>
            <p><strong>Pista:</strong> Usa Number, Number.isInteger, Math.floor, el resto (%) y padStart.</p>
            <div className="controles-js">
              <label>minutos
                <input id="hora-minutos" type="number" defaultValue="635" step="any" />
              </label>
              <button type="button" onClick={interacciones.probarhora}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-hora">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 8</p>
            <h3>Aplicar un descuento</h3>
            <code>aplicarDescuento(precio, porcentaje)</code>
            <p>Devuelve el precio final como número con un máximo de dos decimales. Precio no negativo y porcentaje entre 0 y 100, ambos finitos. Rechaza campos vacíos. Casos: 20 y 15 → 17; 19.99 y 10 → 17.99; -1 o 120 % → 'Dato no válido'.</p>
            <p><strong>Pista:</strong> Valida antes de operar. toFixed devuelve texto; convierte de nuevo con Number.</p>
            <div className="controles-js">
              <label>precio
                <input id="aplicarDescuento-precio" type="number" defaultValue="20" step="any" />
              </label>
              <label>porcentaje
                <input id="aplicarDescuento-porcentaje" type="number" defaultValue="15" step="any" />
              </label>
              <button type="button" onClick={interacciones.probaraplicarDescuento}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-aplicarDescuento">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 9</p>
            <h3>Encontrar la mayor duración</h3>
            <code>mayorDuracion(duraciones)</code>
            <p>Devuelve la mayor duración numérica sin modificar el array. Casos: 45;90;60 → 90; 60;60 → 60; lista vacía → null. Los elementos serán duraciones válidas no negativas.</p>
            <p><strong>Pista:</strong> Recorre el array y conserva el máximo. Convierte cada elemento con Number.</p>
            <div className="controles-js">
              <label>duraciones (valores separados por ;)
                <input id="mayorDuracion-duraciones" type="text" defaultValue="45;90;60" />
              </label>
              <button type="button" onClick={interacciones.probarmayorDuracion}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-mayorDuracion">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 10</p>
            <h3>Eliminar géneros repetidos</h3>
            <code>generosUnicos(generos)</code>
            <p>Devuelve un array nuevo sin duplicados y conserva el orden. Quita espacios exteriores, pero distingue mayúsculas. Casos: indie;rock;indie → [indie, rock]; lista vacía → [].</p>
            <p><strong>Pista:</strong> Usa un array acumulador, trim e includes antes de añadir cada género.</p>
            <div className="controles-js">
              <label>generos (valores separados por ;)
                <input id="generosUnicos-generos" type="text" defaultValue="indie;rock;indie" />
              </label>
              <button type="button" onClick={interacciones.probargenerosUnicos}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-generosUnicos">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 11</p>
            <h3>Buscar artistas</h3>
            <code>buscarArtistas(artistas, texto)</code>
            <p>Devuelve un array nuevo de nombres que contienen la consulta, ignorando mayúsculas y espacios exteriores de esta. Conserva los nombres originales. Una consulta vacía devuelve todos; 'zzz' devuelve [].</p>
            <p><strong>Pista:</strong> Usa filter con una función con nombre, toLowerCase e includes. No uses flechas.</p>
            <div className="controles-js">
              <label>artistas (valores separados por ;)
                <input id="buscarArtistas-artistas" type="text" defaultValue="Bruma Solar;Luna de Papel;Bruma Azul" />
              </label>
              <label>texto
                <input id="buscarArtistas-texto" type="text" defaultValue=" bruma " />
              </label>
              <button type="button" onClick={interacciones.probarbuscarArtistas}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-buscarArtistas">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 12</p>
            <h3>Convertir duraciones a horas</h3>
            <code>duracionesEnHoras(duraciones)</code>
            <p>Devuelve un array nuevo con las duraciones en horas. Casos: 60;90;120 → [1, 1.5, 2]; lista vacía → []. No modifiques el array original.</p>
            <p><strong>Pista:</strong> Usa map con una función con nombre. Convierte cada elemento con Number y divide por 60.</p>
            <div className="controles-js">
              <label>duraciones (valores separados por ;)
                <input id="duracionesEnHoras-duraciones" type="text" defaultValue="60;90;120" />
              </label>
              <button type="button" onClick={interacciones.probarduracionesEnHoras}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-duracionesEnHoras">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 13</p>
            <h3>Calcular una compra</h3>
            <code>calcularCompra(precios, cantidades)</code>
            <p>Cada precio se corresponde con la cantidad de la misma posición. Devuelve el total como número, redondeado a dos decimales. Casos: 12;8;5 y 2;1;3 → 47; ambas listas vacías → 0. Longitudes distintas → 'Datos no válidos'. Los elementos serán precios no negativos y cantidades enteras no negativas.</p>
            <p><strong>Pista:</strong> Comprueba las longitudes. Usa reduce con una función con nombre, índice y acumulador inicial 0. Convierte ambos valores con Number.</p>
            <div className="controles-js">
              <label>precios (valores separados por ;)
                <input id="calcularCompra-precios" type="text" defaultValue="12;8;5" />
              </label>
              <label>cantidades (valores separados por ;)
                <input id="calcularCompra-cantidades" type="text" defaultValue="2;1;3" />
              </label>
              <button type="button" onClick={interacciones.probarcalcularCompra}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-calcularCompra">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 14</p>
            <h3>Detectar solapamientos</h3>
            <code>solapan(inicioA, finA, inicioB, finB)</code>
            <p>Recibe dos intervalos en minutos enteros, entre 0 y 1440 y con inicio menor que fin. Casos: 600–660 y 630–690 → true; 600–660 y 660–720 → false; intervalos separados → false. Si algún intervalo no es válido devuelve 'Horario no válido'.</p>
            <p><strong>Pista:</strong> Convierte los cuatro parámetros con Number. Valida y comprueba si cada inicio es anterior al fin del otro intervalo.</p>
            <div className="controles-js">
              <label>inicioA
                <input id="solapan-inicioA" type="number" defaultValue="600" step="any" />
              </label>
              <label>finA
                <input id="solapan-finA" type="number" defaultValue="660" step="any" />
              </label>
              <label>inicioB
                <input id="solapan-inicioB" type="number" defaultValue="630" step="any" />
              </label>
              <label>finB
                <input id="solapan-finB" type="number" defaultValue="690" step="any" />
              </label>
              <button type="button" onClick={interacciones.probarsolapan}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-solapan">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 15</p>
            <h3>Crear el cartel de artistas</h3>
            <code>crearCartel(artistas)</code>
            <p>Une los nombres con el separador « · » (con un espacio a cada lado). Con Luna;Bruma;Norte devuelve «Luna · Bruma · Norte». Una lista vacía devuelve el texto vacío.</p>
            <p><strong>Pista:</strong> Pasa el separador a <code>join</code>.</p>
            <div className="controles-js">
              <label>artistas (valores separados por ;)
                <input id="crearCartel-artistas" type="text" defaultValue="Luna;Bruma;Norte" />
              </label>
              <button type="button" onClick={interacciones.probarcrearCartel}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-crearCartel">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 16</p>
            <h3>Buscar entradas dentro del presupuesto</h3>
            <code>hayEntradasEnPresupuesto(precios, maximo)</code>
            <p>Devuelve true si algún precio es menor o igual al máximo. Con 18;25;12 y un máximo de 12 devuelve true. Con un máximo de 10 o con una lista vacía devuelve false. Usa precios y máximos no negativos.</p>
            <p><strong>Pista:</strong> Usa <code>some</code> con una función con nombre. Convierte cada precio y el máximo con <code>Number</code>.</p>
            <div className="controles-js">
              <label>precios (valores separados por ;)
                <input id="hayEntradasEnPresupuesto-precios" type="text" defaultValue="18;25;12" />
              </label>
              <label>máximo
                <input id="hayEntradasEnPresupuesto-maximo" type="number" defaultValue={12} min="0" step="any" />
              </label>
              <button type="button" onClick={interacciones.probarhayEntradasEnPresupuesto}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-hayEntradasEnPresupuesto">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 17</p>
            <h3>Ordenar precios de menor a mayor</h3>
            <code>ordenarPrecios(precios)</code>
            <p>Devuelve un array nuevo de números ordenados de menor a mayor y conserva la lista original. Con 20;5;100;12 devuelve [5, 12, 20, 100]. Una lista vacía devuelve []. Usa precios no negativos.</p>
            <p><strong>Pista:</strong> Crea un array de números con <code>map</code> y <code>Number</code>. Aplica <code>sort</code> a ese array con una función con nombre que devuelva la diferencia entre los dos números.</p>
            <div className="controles-js">
              <label>precios (valores separados por ;)
                <input id="ordenarPrecios-precios" type="text" defaultValue="20;5;100;12" />
              </label>
              <button type="button" onClick={interacciones.probarordenarPrecios}>Probar mi función</button>
            </div>
            <div className="resultado-js" aria-live="polite">
              <strong>Resultado: </strong>
              <output id="resultado-ordenarPrecios">Cambia los datos y pulsa el botón.</output>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
