class AESContainer {
    constructor(label, prikey) {
        this.prikey = prikey;
        this.container = $('<div>').addClass('AES-container');
        this.inputContainer = $('<div>').addClass('AES-input');
        this.inputField = $('<input>').attr({type: 'password', id: 'input-field', required: true});
        this.highlight = $('<span>').addClass('hl');
        this.bar = $('<span>').addClass('bar');
        this.label = $('<label>').text(label);

        this.inputContainer.append(this.inputField, this.highlight, this.bar, this.label);
        this.container.append(this.inputContainer);

        this.inputField.on('keypress', this.handleKeyPress.bind(this));
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.decrypted = CryptoJS.AES.decrypt(this.prikey, this.inputField.val()).toString(CryptoJS.enc.Utf8);
            if (this.decrypted) {
                this.inputContainer.remove();
                this.container.append($(this.decrypted));
            }
        }
    }

    render(targetElement) {
        $(targetElement).replaceWith(this.container);
    }
}
