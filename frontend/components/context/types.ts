export type State = {
    fizzbuzz:{
       
        isMounted:boolean;
        loading:boolean;
        result:string;
        errorMSG:string;

    }

}
export type Actions = {
    type:"SET_RESULT";
    payload:{
      
        isMounted:boolean,
        loading:boolean;
        result:string;
        errorMSG:string;

    }
}