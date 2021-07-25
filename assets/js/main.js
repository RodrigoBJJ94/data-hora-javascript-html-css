const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemana(diaSemana) {
    const dia = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return dia[diaSemana];
}

function getMes(mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mes]
}

function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function criarData(data) {
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const nomeDiaSemana = getDiaSemana(diaSemana);
    const nomeMes = getMes(mes);

    return (
        `${nomeDiaSemana}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}, ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`
        );
}

    h1.innerHTML = criarData(data);
