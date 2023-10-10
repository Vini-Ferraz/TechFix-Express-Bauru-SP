const data = new Date();
let diaDaSemana = data.getDay();
let hora = data.getHours();

if (diaDaSemana !== 6 && diaDaSemana !== 0) {
    if (hora >= 10 && hora <= 18) {
        document.getElementById('hero_row_horario').innerHTML = "Estamos abertos até as 18:00"
    }else{
        document.getElementById('hero_row_horario').innerHTML = "Estamos fechados";
    }
}else if (diaDaSemana == 7) {
    document.getElementById('hero_row_horario').innerHTML = "Estamos abertos até as 14H";
}else {
    document.getElementById('hero_row_horario').innerHTML = "Estamos fechados";
}

