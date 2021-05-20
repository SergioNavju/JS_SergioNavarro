let contador = 0;
let dec = new Array();
let valor=0;
let destino="";
let fecha = new Date;

setTimeout(inicio,1000)

function inicio()
{
    do
    {
        do
        {
            res = prompt("Escribe 'Derecha' o 'Izquierda' según el camino que quieran escoger.").toUpperCase();
            if(res!="DERECHA" && res!="IZQUIERDA")
            {
                alert("Solo puedes elegir Derecha o Izquierda");
            }
        }
        while(res!="DERECHA" && res!="IZQUIERDA");
        contador++;
        fecha.setTime(fecha.getTime() + 900000);
        document.cookie= `ruta=${res}; expires=`+fecha.toGMTString();

        console.log(obtenerDest("ruta"));
    }
    while(contador<2);
}

function obtenerDest(nombreCookie)
{
    //Las hacemos una varible
	let cookies = document.cookie;
    //Las hacemos una arreglo
	let arrCookies = cookies.split('; ');
	for(const valor of arrCookies)
	{
		const cookie =valor.split('=');
		if(cookie[0] === nombreCookie)
		{
            //Asiganmos valores 
            dec.push(cookie[1]);
            if(dec[0]=="DERECHA" && dec[1]=="IZQUIERDA")
            {
                destino="HONGO";
                location.href ="./Hongo.html";

            }
            else if(dec[0]=="IZQUIERDA" && dec[1]=="DERECHA")
            {
                destino="ARBOL";
                location.href ="./Arbol.html";
            }
            else if(dec[0]=="DERECHA" && dec[1]=="DERECHA")
            {
                destino="CASA BRUJA";
                location.href ="./Casa_Bruja.html";
            }
            else if(dec[0]=="IZQUIERDA" && dec[1]=="IZQUIERDA")
            {
                destino="CASA";
                location.href ="./Casa.html";
            }
            return destino;
		}
	}
	return null;
}