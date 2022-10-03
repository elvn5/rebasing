export default class Modal {
  _baseOptions = {
    width: 400,
    height: 600,

    rootClassName: 'modal',
    contentClassName: 'modalContent',
    closeButtonClassName: 'close-button',

    openModalClassName: 'show-modal',

    closeButtonContent: '&times;',

    onClose: null,
  };

  constructor(opts = {}) {
    this.options = { ...this._baseOptions, ...opts };

    this.modal = {
      root: null,
      body: null,
      closeButton: null,
    };
  }

  init = () => {
    this.modal.root = document.createElement('div');
    this.modal.body = document.createElement('div');
    this.modal.closeButton = document.createElement('button');

    this._adjustModalStyles();
    this._adjustModalStructure();
    this._initializeListeners();
  };

  destroy = () => {
    this.modal.closeButton.removeEventListener('click', this._handleCloseButtonClick);
    document.body.removeChild(this.modal.root);
  };

  close = () => {
    const { openModalClassName } = this.options;

    this.modal.root.classList.remove(openModalClassName);
  };

  open = () => {
    const { openModalClassName } = this.options;

    if (this.modal.root.classList.contains(openModalClassName)) return;
    this.modal.root.classList.add(openModalClassName);
  };

  _adjustModalStyles = () => {
    if (!this.modal.root) return;

    const {
      rootClassName,
      contentClassName,
      closeButtonClassName,
      closeButtonContent,
      width,
      height,
    } = this.options;

    this.modal.root.classList.add(rootClassName);

    this.modal.body.classList.add(contentClassName);
    this.modal.body.style.width = typeof width === 'string' ? width : `${width}px`;
    this.modal.body.style.height = typeof height === 'string' ? height : `${height}px`;

    this.modal.closeButton.classList.add(closeButtonClassName);
    this.modal.closeButton.innerHTML = closeButtonContent;
  };

  _adjustModalStructure = () => {
    this.modal.body.appendChild(this.modal.closeButton);
    this.modal.root.appendChild(this.modal.body);
    console.log(this.modal.root)
    document.body.appendChild(this.modal.root);
  };

  _initializeListeners = () => {
    this.modal.closeButton.addEventListener('click', this._handleCloseButtonClick);
  };


  // Listeners

  _handleCloseButtonClick = () => {
    this.close();

    const { onClose } = this.options;

    if (typeof onClose === 'function') {
      onClose();
    }
  };
}
