import Inicio from './pages/Inicio.jsx';
import JsBasico from './pages/JsBasico.jsx';
import Eventos from './pages/Eventos.jsx';

// Un componente es una función que devuelve una descripción de la interfaz.
// Su nombre empieza por mayúscula para que React lo reconozca como componente.
function App() {
  // Leemos la ruta al cargar la aplicación. Los enlaces recargan el documento.
  let ruta = window.location.pathname;
  let pagina;

  // switch permite seleccionar entre varias páginas sin encadenar ternarios.
  // Para añadir una página:
  // 1. Crea su componente en pages e impórtalo arriba.
  // 2. Añade un case con su ruta, asigna su componente a pagina y termina con break.
  // 3. Añade su enlace al menú y compara ruta para aplicar la clase activo.
  switch (ruta) {
    case '/':
      pagina = <Inicio />;
      break;
    case '/js-basico':
      pagina = <JsBasico />;
      break;
    case '/eventos':
      pagina = <Eventos />;
      break;
    default:
      // Si la ruta no está definida, mostramos Inicio y destacamos su enlace.
      ruta = '/';
      pagina = <Inicio />;
      break;
  }
  // JSX permite escribir marcado parecido a HTML dentro de JavaScript.
  // Los paréntesis agrupan el JSX de varias líneas que devuelve la función.
  return (
    <>
      {/* Los comentarios dentro de JSX se escriben entre llaves. */}
      <header className="barra-festival">
        <span className="logo-festival" aria-hidden="true">♫</span>
        <span className="nombre-festival">Festival React</span>
        <nav aria-label="Menú principal">
          {/* En JSX, las llaves permiten usar expresiones de JavaScript dentro
              del marcado. React evalúa la expresión y utiliza su resultado.
              Las llaves admiten expresiones, pero no sentencias como if o for. */}
          <a href="/" className={ruta === '/' ? 'activo' : ''}>Inicio</a>
          <a href="/js-basico" className={ruta === '/js-basico' ? 'activo' : ''}>JS Básico</a>
          <a href="/eventos" className={ruta === '/eventos' ? 'activo' : ''}>Eventos</a>
        </nav>
      </header>

      {/* main contiene el contenido principal, separado de las barras fijas. */}
      <main className="festival">
        {/* Mostramos el componente que ha seleccionado el switch. */}
        {pagina}
      </main>

      <footer>
        <p>DAM2 - Desarrollo Web en Entorno Cliente</p>
      </footer>
    </>
  );
}

// La exportación por defecto permite importar App desde main.jsx.
export default App;
