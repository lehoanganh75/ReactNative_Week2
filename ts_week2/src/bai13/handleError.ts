import { rejectError } from "../bai3/rejectError";

async function handleError(){
    try{
        return rejectError();
    }catch(e){
        console.error(e);
    }
}

handleError();