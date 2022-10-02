class Modal {
  constructor(width, height) {
    // Width and Height of Modal Content
    this.width = width
    this.height = height
    // Modal
    this.modal = document.createElement("div")
    this.modal.classList.add("modal")
    // Modal content
    this.modalContent = document.createElement("div")
    this.modalContent.classList.add("modalContent")
    this.modalContent.style.width = this.width
    this.modalContent.style.height = this.height

    // Close button
    this.closeButton = document.createElement("button")
    this.closeButton.classList.add("close-button")
    this.closeButton.innerHTML = "&times;"

    this.closeButton.addEventListener("click", ()=> {
      this.modal.remove()
    })

    this.modalContent.appendChild(this.closeButton)
    this.modal.appendChild(this.modalContent)
    document.body.appendChild(this.modal)
  }

  openModal() {
    this.modal.classList.add("show-modal")
  }

  closeModal() {
    this.modal.classList.remove("modal-open")
  }
}

export default Modal
