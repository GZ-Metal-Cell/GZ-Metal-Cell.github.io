$(document).ready(function () {
    $("#encrypt").click(function () {
        $("#pubkey").val(encrypt($("#text").val(), $("#privkey").val()));
    });

    $("#decrypt").click(function () {
        $("#text").val(decrypt($("#privkey").val(), $("#pubkey").val()));
    });
});

let isDecrypted = false;

$(document).ready(function () {
    $('#input-field').keypress(function (event) {
        if (!isDecrypted) {
            if (event.which === 13) {
                decrypted = decrypt($(this).val(), '1zkzgLDF2jE6cRbeUpASf7nUWwXSTOZL7yq73TjU+hfvggacw5miN4cRmYpzxuNgFNbFNwj0HdraXXIfglpg7wb7CoifN73qsIvS4Yqcde+lOQ2SnKfghFW+KY9ctjqDIIGAE6tjxoSPEhBnwoiHGYsxIQwDU1e2G97DXelPb6Paw8Rh/JHVk2qHzPLqi+jhHFvxrt9FC4CP4ha8Fj2G2g==');
                if ($(decrypted)) {
                    isDecrypted = true;
                    $("#input-field").after($(decrypted));
                }
            }
        }
    });
});

function encrypt(text, privkey){
    const message = CryptoJS.enc.Utf8.parse(text)
    const secretPassphrase = CryptoJS.enc.Utf8.parse(privkey)
    const iv = CryptoJS.enc.Utf8.parse((privkey))

    return CryptoJS.AES.encrypt(message, secretPassphrase, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv
    }).toString()
}

function decrypt(privkey, pubkey) {
    const secretPassphrase = CryptoJS.enc.Utf8.parse(privkey)
    const iv = CryptoJS.enc.Utf8.parse(privkey)
    return decrypted = CryptoJS.AES.decrypt(
        pubkey,
        secretPassphrase,
        {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            iv
        }
    ).toString(CryptoJS.enc.Utf8)
}
