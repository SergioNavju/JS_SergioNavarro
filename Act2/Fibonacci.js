const largo=Math.floor(Math.random()*10)+1;
console.log("largo "+largo);

const ancho=Math.floor(Math.random()*10)+1;
console.log("ancho "+ancho);

let Terms=ancho*largo
console.log("Terminos totales "+ Terms);

let a=0;
let b=1;
let ab=0;

let tablero =[];
//Cantidad de arreglos
for(let i=1; i<=largo; i++)
{
    tablero[i]=new Array();
    w=ancho;
    //Cantidad de espacios dentro de los arreglos
    while(w!=0 && Terms!=0)
    {
        if(Terms>0 && 0<w && a==0)
        {
            tablero[i].push(a);
            Terms--;
            w--;
        }
        if(Terms>0 && 0<w && b==1)
        {
            tablero[i].push(b);
            Terms--;
            w--;
        }
        if (Terms>0 && 0<w )
        {
            ab = a + b;
            tablero[i].push(ab);
            Terms--;
            w--;
        }
        if (Terms>0 && 0<w)
        {
            a  = ab + b;
            tablero[i].push(a);
            Terms--;
            w--;
        }
        if (Terms>0 && 0<w)
        {
            b  = a + ab;
            tablero[i].push(b);
            Terms--;
            w--;
        }
    }
    console.log ("Valor de w "+ w);
    //Los arreglos Impares van se van a desplegar de forma normal
    //Los arreglos Pares se van a desplegar de forma inversa  (reverse)
    if(i%2==0)
    {
        tablero[i].reverse();
    }
}

console.log(tablero);

