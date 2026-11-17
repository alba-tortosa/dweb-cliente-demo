// Importamos todos los manejadores para conectarlos a los controles de la página.
import * as eventos from '../utils/eventos.js';

export default function Eventos() {
  return (
    <>
      <h1>Eventos</h1>
      <p>Evento significa una interacción del navegador (clics, cambios, envíos). Explora los ejemplos resueltos y completa los TODO de <code>src/utils/eventos.js</code>. Guarda y vuelve a interactuar para comprobar tu solución.</p>
      <p>En JSX usamos <code>onClick</code>, <code>onChange</code> y <code>onSubmit</code>. Asignamos el nombre de la función sin paréntesis: React la ejecuta al interactuar y le entrega el evento. <code>evento.currentTarget</code> permite acceder al control que tiene el manejador.</p>

      <section aria-labelledby="eventos-ejemplos">
        <h2 id="eventos-ejemplos">1. Ejemplos resueltos</h2>
        <div className="rejilla-js">
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejemplo resuelto 1 · onClick</p>
            <h3>Contar visitas al stand</h3>
            <p>Cada clic lee el contador y suma una visita. Convertimos el texto a número antes de sumar.</p>
            <div className="controles-js">
              <button type="button" onClick={eventos.sumarVisita}>Añadir visita</button>
            </div>
            <div className="resultado-js" aria-live="polite">Visitas: <output id="eventos-visitas">0</output></div>
            <p>Comprueba: tres clics deben mostrar 3 visitas.</p>
          </article>

          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejemplo resuelto 2 · onChange</p>
            <h3>Saludar al asistente</h3>
            <p>El saludo cambia mientras escribes. El manejador lee <code>evento.currentTarget.value</code> y quita los espacios exteriores.</p>
            <div className="controles-js">
              <label>Nombre<input type="text" onChange={eventos.saludarAsistente} /></label>
            </div>
            <div className="resultado-js" aria-live="polite"><output id="eventos-saludo">Escribe tu nombre para recibir un saludo.</output></div>
            <p>Comprueba: escribe Ana y después borra el nombre.</p>
          </article>

          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejemplo resuelto 3 · onSubmit</p>
            <h3>Calcular una compra</h3>
            <p>El envío se gestiona en el formulario. <code>preventDefault()</code> evita la recarga; <code>elements.namedItem('precio')</code> busca el control por su atributo <code>name</code>.</p>
            {/* noValidate permite practicar la validación en JavaScript. */}
            <form className="controles-js" onSubmit={eventos.calcularCompra} noValidate>
              <label>Precio unitario (€)<input name="precio" type="number" defaultValue="12" step="any" /></label>
              <label>Cantidad<input name="cantidad" type="number" defaultValue="2" step="1" /></label>
              <button type="submit">Calcular total</button>
            </form>
            <div className="resultado-js" aria-live="polite"><output id="eventos-compra">Envía el formulario para calcular.</output></div>
            <p>Comprueba: 12 y 2 → 24.00 €. Una cantidad de 0 debe mostrar un aviso. También puedes enviar pulsando Intro desde un campo.</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="eventos-ejercicios">
        <h2 id="eventos-ejercicios">2. Ejercicios</h2>
        <p>Los controles están conectados. Cada función pendiente muestra un aviso hasta que sustituyas su contenido por la solución.</p>
        <div className="rejilla-js">
          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 1 · onClick</p>
            <h3>Alternar conciertos cancelados</h3>
            <p>Muestra u oculta el listado ficticio y cambia el texto del botón. Pista: invierte la propiedad <code>hidden</code>.</p>
            <div className="controles-js"><button type="button" onClick={eventos.alternarCancelados}>Mostrar cancelados</button></div>
            {/* React no controla estos cambios: el ejercicio modifica hidden. */}
            <ul id="eventos-cancelados" hidden>
              <li>Bruma Solar · cancelado</li><li>Voltaje Azul · cancelado</li>
            </ul>
            <div className="resultado-js" aria-live="polite"><output id="eventos-estado-cancelados">Cancelados ocultos.</output></div>
            <p>Comprueba: el primer clic muestra los dos conciertos; el segundo vuelve a ocultarlos.</p>
          </article>

          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 2 · onChange</p>
            <h3>Seleccionar escenario</h3>
            <p>Lee el código seleccionado y muestra el aforo correspondiente. Pista: usa <code>switch</code> o <code>if</code>.</p>
            <div className="controles-js">
              <label>Escenario<select defaultValue="" onChange={eventos.seleccionarEscenario}>
                <option value="">Selecciona un escenario</option><option value="rio">Río</option><option value="bosque">Bosque</option>
              </select></label>
            </div>
            <div className="resultado-js" aria-live="polite"><output id="eventos-escenario">Selecciona un escenario.</output></div>
            <p>Comprueba: Río → 500 personas; Bosque → 300. Vuelve a la opción inicial.</p>
          </article>

          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 3 · onChange</p>
            <h3>Controlar el volumen</h3>
            <p>Actualiza el porcentaje al mover el control. Este ejercicio solo cambia el texto; no reproduce audio.</p>
            <div className="controles-js"><label>Volumen<input type="range" min="0" max="100" step="1" defaultValue="50" onChange={eventos.cambiarVolumen} /></label></div>
            <div className="resultado-js" aria-live="polite"><output id="eventos-volumen">50 %</output></div>
            <p>Comprueba: prueba los extremos 0 y 100. Pista: concatena el valor y « %».</p>
          </article>

          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 4 · onChange</p>
            <h3>Elegir géneros favoritos</h3>
            <p>Construye un array con los géneros marcados y muestra sus nombres. Pista: <code>checked</code> indica si una casilla está seleccionada; <code>value</code> por sí solo no lo indica.</p>
            <fieldset className="controles-js opciones-eventos">
              <legend>Géneros favoritos</legend>
              <label><input id="eventos-genero-indie" type="checkbox" onChange={eventos.elegirGeneros} />Indie</label>
              <label><input id="eventos-genero-rock" type="checkbox" onChange={eventos.elegirGeneros} />Rock</label>
              <label><input id="eventos-genero-jazz" type="checkbox" onChange={eventos.elegirGeneros} />Jazz</label>
            </fieldset>
            <div className="resultado-js" aria-live="polite"><output id="eventos-generos">Ningún género seleccionado</output></div>
            <p>Comprueba: marca Indie y Rock, desmarca Indie y después desmarca Rock.</p>
          </article>

          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 5 · onSubmit</p>
            <h3>Reservar entradas</h3>
            <p>Lee el nombre y la cantidad. Rechaza nombres vacíos y cantidades que no sean enteros de 1 a 6. La reserva es ficticia y no se guarda.</p>
            <form id="eventos-formulario-reserva" className="controles-js" onSubmit={eventos.reservarEntradas} noValidate>
              <label>Nombre<input name="nombre" type="text" defaultValue="" /></label>
              <label>Cantidad de entradas<input name="cantidad" type="number" defaultValue="1" step="any" /></label>
              <button type="submit">Probar reserva</button>
            </form>
            <div className="resultado-js" aria-live="polite"><output id="eventos-reserva">Completa el formulario para probar.</output></div>
            <p>Pista: usa <code>trim()</code>, <code>Number()</code> y <code>Number.isInteger()</code>. El <code>preventDefault()</code> ya está proporcionado.</p>
            <p>Comprueba: Ana y 2 → «Reserva ficticia: Ana, 2 entradas.». Prueba un nombre de espacios, 0, 7 y 1.5: deben dar un aviso.</p>
          </article>

          <article className="tarjeta-js">
            <p className="tipo-tarjeta">Ejercicio 6 · onClick</p>
            <h3>Reiniciar la reserva</h3>
            <p>Este botón trabaja sobre el formulario de la tarjeta anterior. Restablece sus valores iniciales y vacía el resultado.</p>
            <div className="controles-js"><button type="button" onClick={eventos.reiniciarReserva}>Reiniciar formulario de reserva</button></div>
            <p>Pista: localiza <code>eventos-formulario-reserva</code> y llama a <code>reset()</code>. Después borra el texto de <code>eventos-reserva</code>.</p>
            <p>Comprueba: cambia el nombre y la cantidad y pulsa este botón. El nombre debe quedar vacío, la cantidad en 1 y el resultado sin texto. No hace falta resolver antes el ejercicio 5.</p>
          </article>
        </div>
      </section>
    </>
  );
}
