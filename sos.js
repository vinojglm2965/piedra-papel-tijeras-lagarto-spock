
    let piedra = 0;
    let papel = 1;
    let tijeras = 2;
    let lagarto = 3;
    let spock = 4;
    
    let opciones = ['piedra', 'papel', 'tijeras', 'lagarto', 'spock'];
    
    let opcionuser;
    let maquina = Math.floor(Math.random() * opciones.length);
    
    opcionuser = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4" , 0);

    alert('Tu papa eligio' + " " + opciones[maquina]);

    if(opcionuser == piedra)

    {
        alert('escogiste piedra');

        if(maquina == piedra)
        {
            alert('empataste, sortario')
        }

        else if(maquina == papel)
        {
            alert('perdiste, que malo eres')
        
        }
        
        else if(maquina == tijeras)
        {
            alert('ganaste, te la lacreaste')
        }
        
        else if(maquina == lagarto)
        {
            alert('ganaste, te la lacreaste')
        }
        
        else if(maquina == spock)
        {
            alert('perdiste, que malo eres')
        }
    }

    else if(opcionuser == papel)

    {
        alert('escogiste papel');
        
        if(maquina == piedra)
        {
            alert('ganaste, te la lacreaste')
        }

        else if(maquina == papel)
        {
            alert('empataste, sortario')
        
        }
        
        else if(maquina == tijeras)
        {
            alert('perdiste, que malo eres')
        }
        
        else if(maquina == lagarto)
        {
            alert('perdiste, que malo eres')
        }
        
        else if(maquina == spock)
        {
            alert('ganaste, te la lacreaste')
        }
    }

    else if(opcionuser == tijeras)

    {
        alert('escogiste tijeras');

        if(maquina == piedra)
        {
            alert('perdiste, que malo eres')
        }

        else if(maquina == papel)
        {
            alert('ganaste, te la lacreaste')
        
        }
        
        else if(maquina == tijeras)
        {
            alert('empataste, sortario')
        }
        
        else if(maquina == lagarto)
        {
            alert('ganaste, te la lacreaste')
        }
        
        else if(maquina == spock)
        {
            alert('perdiste, que malo eres')
        }

    }

    else if(opcionuser == lagarto)

    {
        alert('escogiste lagarto');

        if(maquina == piedra)
        {
            alert('perdiste, que malo eres')
        }

        else if(maquina == papel)
        {
            alert('ganaste, te la lacreaste')
        
        }
        
        else if(maquina == tijeras)
        {
            alert('perdiste, que malo eres')
        }
        
        else if(maquina == lagarto)
        {
            alert('empataste, sortario')
        }
        
        else if(maquina == spock)
        {
            alert('ganaste, te la lacreaste')
        }

    }

    else if(opcionuser == spock)

    {
        alert('escogiste spock')

        if(maquina == piedra)
        {
            alert('ganaste, te la lacreaste')
        }

        else if(maquina == papel)
        {
            alert('perdiste, que malo eres')
        
        }
        
        else if(maquina == tijeras)
        {
            alert('ganaste, te la lacreaste')
        }
        
        else if(maquina == lagarto)
        {
            alert('perdiste, que malo eres')
        }
        
        else if(maquina == spock)
        {
            alert('empataste, sortario')
        }

        else
        {
            alert('ahh bueno pues... coloca algo, sin miedo que nadie te va a hacer nada')
        }
    }






