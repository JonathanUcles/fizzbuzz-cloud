export type State = {
    fizzbuzz:{
        loading:boolean,
        result:string;
        errorMSG:string;

    }

}
export type Actions = {
    type:"SET_RESULT";
    payload:{
        loading:boolean;
        result:string;
        errorMSG:string;

    }
}