/**
 * Created by ostrovskij on 28.04.2017.
 */

function summa (a,b) {
    return a+b;
}

function subtraction (a,b) {
    return a-b;
}

function multiplication (a,b) {
    return a*b;
}
function division (a,b) {
    if(b!=0){
        return a/b;
    }else {return new Error('Делить на ноль нельзя ')}

}



export {summa,subtraction,multiplication,division}
