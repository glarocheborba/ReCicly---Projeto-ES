class verifyRegister {

    isEmail(email) {
        const verifyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return verifyEmail.test(email);
    }

    isCPF(document) {
        if (!/[0-9]{11}/.test(document)) return false;
        if (document === "00000000000") return false;
        var soma = 0;
        for (var i = 1; i <= 9; i++) {
            soma += parseInt(document.substring(i - 1, i)) * (11 - i);
        }
        var resto = soma % 11;
        if (resto === 10 || resto === 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        if (resto !== parseInt(document.substring(9, 10))) {
            return false;
        }
        soma = 0;
        for (var i = 1; i <= 10; i++) {
            soma += parseInt(document.substring(i - 1, i)) * (12 - i);
        }
        resto = soma % 11;
        if (resto === 10 || resto === 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        if (resto !== parseInt(document.substring(10, 11))) {
            return false;
        }
        return true;
    }

    isCNPJ(document) {

        if (!/[0-9]{14}/.test(document)) return false;
        if (document === "00000000000") return false;

        var soma = 0;
        for (var i = 1; i <= 4; i++) {
            soma += parseInt(document.substring(i - 1, i)) * (6 - i);
        }
        for (var i = 5; i <= 12; i++) {
            soma += parseInt(document.substring(i - 1, i)) * (14 - i);
        }

        var resto = soma % 11;
        if (resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        if (resto !== parseInt(document.substring(12, 13))) {
            return false;
        }

        soma = 0;
        for (var i = 1; i <= 5; i++) {
            soma += parseInt(document.substring(i - 1, i)) * (7 - i);
        }
        for (var i = 6; i <= 13; i++) {
            soma += parseInt(document.substring(i - 1, i)) * (15 - i);
        }

        resto = soma % 11;
        if (resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }
        if (resto !== parseInt(document.substring(13, 14))) {
            return false;
        }
        return true;
    }
}

module.exports = verifyRegister;