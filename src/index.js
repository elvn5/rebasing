import join from 'lodash/join';
import Modal from "./scripts/Modal";

document.querySelector("#btn").addEventListener("click", () => {
  const myModal = new Modal("400px", "400px")
  myModal.openModal()
})


