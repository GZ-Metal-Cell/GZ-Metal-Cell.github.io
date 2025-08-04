$(document).ready(function () {
    $("#encrypt").click(function () {
        $("#pubkey").val(CryptoJS.AES.encrypt($("#text").val(), $("#privkey").val()).toString());
    });

    $("#decrypt").click(function () {
        $("#text").val(CryptoJS.AES.decrypt($("#pubkey").val(), $("#privkey").val()).toString(CryptoJS.enc.Utf8));
    });
});