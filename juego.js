function numero (minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

var usuario;
var maquina = numero(0,4);

usuario = prompt("que eliges?\npiedra: 0\npapel: 1\ntijera: 2\nlagarto: 3\nspock: 4 ", 0);

alert("elegiste " + opciones[usuario]);
alert("javascript eligió " + opciones[maquina]);

if (usuario == piedra) 
{
	if (maquina == piedra) 
	{
		alert("empate");
	}
	else if (maquina == papel) 
	{
		alert("perdiste");
	}
	else if (maquina == tijera)
	{
		alert("ganaste");
	}
	else if (maquina == lagarto) 
	{
		alert("ganaste");
	}
	else if (maquina == spock) 
	{
		alert("perdiste");
	}
}

else if (usuario == papel) 
{
		if (maquina == piedra) 
	{
		alert("ganaste");
	}
	else if (maquina == papel) 
	{
		alert("empate");
	}
	else if (maquina == tijera)
	{
		alert("perdiste");
	}
	else if (maquina == lagarto) 
	{
		alert("perdiste");
	}
	else if (maquina == spock) 
	{
		alert("ganaste");
	}
}
else if (usuario == tijera) 
{
		if (maquina == piedra) 
	{
		alert("perdiste");
	}
	else if (maquina == papel) 
	{
		alert("ganaste");
	}
	else if (maquina == tijera)
	{
		alert("empate");
	}
	else if (maquina == lagarto) 
	{
		alert("ganaste");
	}
	else if (maquina == spock) 
	{
		alert("perdiste");
	}
}
else if (usuario == lagarto) 
{
	if (maquina == piedra) 
	{
		alert("perdiste");
	}
	else if (maquina == papel) 
	{
		alert("ganaste");
	}
	else if (maquina == tijera)
	{
		alert("perdiste");
	}
	else if (maquina == lagarto) 
	{
		alert("empate");
	}
	else if (maquina == spock) 
	{
		alert("ganaste");
	}
}
else if (usuario == spock) 
{
		if (maquina == piedra) 
	{
		alert("ganaste");
	}
	else if (maquina == papel) 
	{
		alert("perdiste");
	}
	else if (maquina == tijera)
	{
		alert("ganaste");
	}
	else if (maquina == lagarto) 
	{
		alert("perdiste");
	}
	else if (maquina == spock) 
	{
		alert("empate");
	}
}
else 
{
	alert("incorrecto prro");
}


