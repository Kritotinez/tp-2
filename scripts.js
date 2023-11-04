const ticket = 200;

let descEstudiante= 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalAPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');




function calcularPago(){
    let total = cantidad.value *ticket;
    switch (categoria.value){
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
            case "trainee":
                total = total - (total * descTrainee);
                break;
                case "junior":
                    total = total - ( total * descJunior);
                    break;
                    default:
                        break;
    }
    totalAPagar.textContent = `Total a pagar : $ ${total}`;
}



let flecha = ()=>{}
btnResumen.addEventListener('click',(evento)=>{
evento.preventDefault()
calcularPago();
});




btnBorrar.addEventListener('click',(evento)=>{
    evento.preventDefault()
    borrar();
    });

//btnResumen.addEventListener('click',calcularPago);