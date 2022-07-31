
function sumar(num1,num2,num3){
   return resultado = num1+num2+num3
}

let coche = {
    puertas : 4,
    aumentar : function aumentarPuertas(){
        return (this.puertas+1)
    }
}


    function main(){
        // console.log(sumar(2,5,1));
        let miCoche = {
            puertas : 2,
            aumentar : function aumentar(){
                return (this.puertas+1)
            }
        }
        console.log(`Mi coche tiene ${miCoche.aumentar()} puertas`)
    }
    main()