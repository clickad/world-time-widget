import _ from 'lodash';
import './css/style.css';
import NewYork from "./js/newyork";
import Berlin from "./js/berlin";
import Moscow from "./js/moscow";
import Sydney from "./js/sydney";

window.addEventListener("load", ()=> {
  let newyork = new NewYork();
  let berlin = new Berlin();
  let moscow = new Moscow();
  let sydney = new Sydney();
  
  newyork.start();
  berlin.start();
  moscow.start();
  sydney.start();
})