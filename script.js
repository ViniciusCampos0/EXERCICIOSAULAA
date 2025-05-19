function CalcularTotalHoras() {
                const dias =
                parseInt(document.getElementById('dias').value);
                const horas = 
                parseInt(document.getElementById('horas').value);

                const totalHoras = (dias*24) + horas;

                document.getElementById('resultado').innerText = "A duração total da viagem é de" + totalHoras + "horas";
}