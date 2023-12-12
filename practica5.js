// fun primeros numeroscion que  muestra  los 10 primeros numeros 
function contar() {
    //for inici
    for (let i = 1; i <= 10; i++ ){
        console.log(i);
    }
}

//FINCIÓN PARA SALUDAR CON PARAMETRO 
function saludar (nombre){
    console.log('¡hola ${nombre};');
}

//PI//
const PI = 3.14159;

//EXPORTAMOS LA FUNCIÓN//
export {contar,saludar,PI}; 