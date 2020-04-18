import axios from "axios";
import {POSTDATA,GETDATA} from '../actionTypes'
import Swal from 'sweetalert2'
export const addTask = (details) => {
  return async (dispatch ,getState) =>{
    // const response = await axios.get("https://jsonplaceholder.typicode.com");
    axios.post('/add_task', details)
      .then(function (response) {
        console.log(response);
        Swal.fire('Tasks Added !')
        dispatch({type:POSTDATA,payload:response.data})
      })
      .catch(function (error) {
        Swal.fire('Error in adding to database')
        console.log(error);
      });
    // dispatch({type:POSTDATA,payload:response})
  };
};
export const getTask = () => {
  return async (dispatch ,getState) =>{
    axios.get('/get_task')
      .then(function (response) {
        dispatch({type:GETDATA,payload:response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};