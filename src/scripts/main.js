AOS.init();

const dataEvento = new Date("Dec 12, 2022 19:00:00");
const timStamp = dataEvento.getTime();

const contaHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaTempo = timStamp - timeStampAtual;

    const diaMs = 1000 * 60 * 60 * 24;
    const horaMs = 1000 * 60 * 60;
    const minutoMs = 1000 * 60 ;

    const diasEvento = math.floor(distanciaTempo / diaMs);
    const horasEvento = math.floor((distanciaTempo % diaMs) / horaMs);
    const minutosEvento = math.floor(distanciaTempo % horaMs / minutoMs);
    const segundosEvento = math.floor((distanciaTempo % minutoMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`;
}, 1000); 