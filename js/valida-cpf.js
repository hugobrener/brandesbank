export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "") //substitui os caracteres ". e -" por "";
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse cpf não é válido')
    } else {
        console.log('existe!');
    }
    
    
}

function validaNumerosRepetidos(cpf) {
    const numeroRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numeroRepetidos.includes(cpf) // quando o valor retorna true significa que o cpf nao existe
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9 ; tamanho ++) {
        soma += cpf[tamanho]*multiplicador; 
        multiplicador--
    }

    soma = (soma*10) % 11;

    if (soma ==10 || soma == 11) {
        soma = 0;
    }
    return soma != cpf[9] // quando o valor retorna true significa que o cpf nao existe
    
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10 ; tamanho ++) {
        soma += cpf[tamanho]*multiplicador; 
        multiplicador--
    }

    soma = (soma*10) % 11;

    if (soma ==10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10]  // quando o valor retorna true significa que o cpf nao existe
}