const tbody = document.querySelector('tbody');

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    const campos = [
        document.querySelector('#nome-hospede'),
        document.querySelector('#num-adultos'),
        document.querySelector('#num-criancas'),
        document.querySelector('#num-dias'),
        document.querySelector('#tipo-suite')
    ]

    const tr = document.createElement('tr');

    for(let i = 0; i < campos.length; i++){
        const td = document.createElement('td');
        td.textContent = campos[i].value;
        tr.appendChild(td);
    }

    let valorDiaria = 0;
    if(campos[4].value == 'Imperial Beach'){
        valorDiaria = 785;
    } else if(campos[4].value == 'Master Beach'){
        valorDiaria = 890;
    } else if(campos[4].value == 'Bangalô Beach'){
        valorDiaria = 1195;
    } else{
        valorDiaria = 1520;
    }

    const tdValorDiaria = document.createElement('td');
    tdValorDiaria.textContent = valorDiaria;
    tr.appendChild(tdValorDiaria);

    const tdValorFinal = document.createElement('td');
    tdValorFinal.textContent = (campos[1].value * (campos[3].value * valorDiaria)) + (campos[2].value * (campos[3].value * (valorDiaria/2)));
    tr.appendChild(tdValorFinal);
    
    tbody.appendChild(tr);

    this.reset();

});