const INITIAL_STATE={

    reminders: []
};
export const reminderReducer=(state=INITIAL_STATE,action)=>{
    console.log("inside reducer...");
let newState={
    reminders: []
    }
    console.log("action received is",action);

    if(action.type==='reminder'){

        newState.like=state.like + action.payload.value;
        console.log("action.payload.value",action.payload);

    }
    return newState;

};