export const SINGLE_REQUEST = 'SINGLE_REQUEST';
export const SINGLE_SUCCESS = 'SINGLE_SUCCES';
export const SINGLE_ERROR = 'SINGLE_ERROR';

export function singleRequest (){
    return {
        type: SINGLE_REQUEST
    }
}
export function singleSuccess(products){
    return{
        type:SINGLE_SUCCESS,
        payload:products
    }
}
export function singleError(error){
    return{
        type:SINGLE_ERROR,
        error
    }
}