import '../../css/estilos.css'
import makeMessage from './make-message.js';
import renderToDOM from './render-to-dom';
import { firstMessage, delayedMessage } from './message.js';
renderToDOM(makeMessage(firstMessage));
delayedMessage();

// document.write(firstMessage)

// newFunction();

// function newFunction() {
//     console.log("Probando rutas relativas");
// }
