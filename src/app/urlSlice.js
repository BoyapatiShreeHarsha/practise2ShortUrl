import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    urls:[{id:nanoid(),old:"https://fonts.google.com/",new:"https://cleanuri.com/g09Dm3"}]
}

export const urlSlice = createSlice({
    name:"url",
    initialState,
    reducers:{
        addUrl:(state,action)=>{
            const newUrl={
                id:nanoid(),
                ...action.payload
            };
            state.urls.push(newUrl);
        }
    }
});

export const {addUrl} = urlSlice.actions;

export default urlSlice.reducer;

