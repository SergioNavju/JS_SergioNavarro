/*
En esta actividad deberán desarrollar un programa que contenga la clase “Pokémon” con los atributos:
 nombre, naturaleza, tipo, vida, ataque, defensa, velocidad  y nivel; y los métodos: subir nivel, presentación, suma de estadísticas,
 promedio de estadísticas. De la clase “Pokémon” deberán instanciar 5 objetos, desde consola se deberá poder visualizar los pokémon y activar sus métodos.
*/
class Pokémon
{
    //EN UNA CLASE LO PRIMERO QUE TENEMOS QUE PONER ES EL CONSTRUTOR
    constructor(nombre, naturaleza, tipo, vida, ataque, defensa,velocidad, nivel)
    {
        //PONEMOS ; PORQUE NO SON PROPIEDADES NI METODOS, SON INSTRUCCIONES
        this.nombre=nombre;
        this.naturaleza=naturaleza;
        this.tipo=tipo;
        this.vida=vida;
        this.ataque=ataque;
        this.defensa=defensa;
        this.velocidad=velocidad;
        this.nivel=nivel;
    }

    subirnivel()
    {
        if(this.nivel!=100)
        {
            this.nivel++;
            console.log ('Su Pokémon ha subido a nivel'+ this.nivel);

            if(this.naturaleza === 'Audaz')
            {
                this.ataque+=4;
                console.log ('Su Pokémon aumenentó 4 pts en ataque');
            }
            else if(this.naturaleza === 'Osada')
            {
                this.defensa+=4;
                console.log ('Su Pokémon aumenentó 4 pts en defensa');
            }
            else if(this.naturaleza === 'Cauta')
            {
                this.vida+=4;
                console.log ('Su Pokémon aumenentó 4 pts en vida')
            }
            else if(this.naturaleza === 'Alegre')
            {
                this.velocidad+=4;
                console.log ('Su Pokémon aumenentó 4 pts en velocidad')
            }
        }
        else
        {
            console.log ('Tu Pokémon está en su nivel máximo, ya no puede subir de nivel');
        }
    }

    presentarse(){
        console.log ('Hola me llamo '+ this.nombre +' soy tipo'+ this.tipo +' y estoy al nivel'+ this.nivel);
    }
    sumaEstadistica(){
        let suma= this.vida+this.ataque+this.defensa+this.velocidad;
        console.log (suma);
    }
    promEstadistica(){
        let suma = this.vida+this.ataque+this.defensa+this.velocidad;
        let prom = suma/4;
        console.log (prom);
    }
}
    const PIKACHU= new Pokémon('Pikachu','Osada','Eléctrico',200,150,250,100,20); 
    console.log(PIKACHU);

    const DITTO= new Pokémon('Ditto','Alegre','Normal',100,50,150,25,10); 
    console.log(DITTO);

    const MAGIKARP= new Pokémon('Magikarp','Cauta','Agua',150,100,200,150,50); 
    console.log(MAGIKARP);

    const CHARIZARD= new Pokémon('Charizard','Audaz','Fuego',300,250,350,50,75); 
    console.log(CHARIZARD);

    const JIGGLYPUFF= new Pokémon('Jigglypuff','Alegre','Hada',200,150,250,100,70); 
    console.log(JIGGLYPUFF);

