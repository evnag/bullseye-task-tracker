import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type TaskFilledState = {
    taskName: string;
    priority: string;
    status: string;
    description: string;
    difficulty: string;
    executor: string;
  };
  
  const initialState: TaskFilledState = {
    taskName: "",
    priority: "",
    status: "Открыта",
    description: "",
    difficulty: "",
    executor: "",
  };
  
  type TaskFieldAction = {
    field: keyof TaskFilledState;
    value: string;
  };

  const taskFilledSlice = createSlice({
    name: "taskFilled",
  initialState,
  reducers: {
    updated: (state, action: PayloadAction<TaskFieldAction>) => {
      state[action.payload.field] = action.payload.value;
      return state;
    },
    defaulted:(state)=>{
      state = initialState;
      return state;
    },
  },
  });

  export default taskFilledSlice.reducer;
export const { updated, defaulted } = taskFilledSlice.actions;