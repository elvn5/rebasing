import join from 'lodash/join';
// import Modal from "./scripts/Modal";
import Modal from './scripts/modal_v2';

const myModal = new Modal({
  width: 400,
  height: 400,
});

window.addEventListener('load', () => {
  myModal.init();

  document.querySelector("#btn").addEventListener("click", () => {
    myModal.open();
  })
});
window.addEventListener('beforeunload', myModal.destroy);


