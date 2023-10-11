const data = new Date();
let diaDaSemana = data.getDay();
let hora = data.getHours();
let diaDaSemanaTratado = diaDaSemana.toString();
let horaTratada = hora.toString();
let myRegex = /[^0-9]/g;
let horaTest = myRegex.test(horaTratada);
let diaTest = myRegex.test(diaDaSemanaTratado);

if (horaTest == false && diaTest == false) {
    if (diaDaSemana !== 6 && diaDaSemana !== 0) {
        if (hora >= 9 && hora <= 18) {
            document.getElementById('hero_row_horario').textContent = "Estamos abertos até as 18:00"
        }else{
            document.getElementById('hero_row_horario').textContent = "Estamos fechados";
        }
    }else if (diaDaSemana == 6) {
        document.getElementById('hero_row_horario').textContent = "Estamos abertos até as 14H";
    }else {
        document.getElementById('hero_row_horario').textContent = "Estamos fechados";
    }
}else{
    document.getElementById('hero_row_horario').textContent = "INSIRA DADOS VALIDOS";
}
