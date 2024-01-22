import axios from "axios";
import TaskData from "../../entities/taskData/model";

const API_URL: string = "/api/v1/task";

export const addNewTask = (taskName: string, priority: string, status:string, description:string, difficulty:string, executor:string) => {
    return axios
    .post(API_URL, {
        taskName,
      priority,
      status,
      description,
      difficulty,
      executor
    })
    .then((response) => {
      console.log("User with username: " + taskName + "successfully added")
      return response.data;
    })
  }

  export const getTaskByName = (taskName: string, page: number) => {
    return axios.get<Array<TaskData>>(`${API_URL}/search?taskName=${taskName}&page=${page}&size=2`)
    .then((response) => {
      return response.data;
    });
  };