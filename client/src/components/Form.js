import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Swal from 'sweetalert2'
import { addTask } from "../redux/actions/index";
import { getTask } from "../redux/actions/index";
class Form extends Component {
  componentDidMount() {
    this.getAllTasks();
  }
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskDescription: "",
      taskCreator: "",
      taskDuration: "",
    };
  }
  getTasksInTasksList = () => {
    if (this.props.tasks != undefined) {
      return this.props.tasks.map((item) => {
        return (
          <div key={item._id}>
            <h5>Task Name - {item.taskName}</h5>
            <p>Task Description - {item.taskDescription}</p>
            <p>Task Creator - {item.taskCreator}</p>
            <br/><br/>
          </div>
        );
      });
    }
  };

  getAllTasks = () => {
    this.props.getTask();
  };
  handleSubmit = () => {
  if(this.state.taskName.length==0) return Swal.fire('Task Name cannot be empty')
  else if(this.state.taskDescription.length==0) return Swal.fire('Task Description cannot be empty')
  else if(this.state.taskCreator.length==0) return Swal.fire('Task Creator cannot be empty')
  else if(this.state.taskDuration.length==0) return Swal.fire('Task Duration cannot be empty')
     let details = {
      taskName: this.state.taskName,
      taskDescription: this.state.taskDescription,
      taskCreator: this.state.taskCreator,
      taskDuration: this.state.taskDuration,
    };
    this.setState({ taskName: "",taskDescription:'',taskCreator:'',taskDuration:'' });
    // this.setState({taskName:''})
    this.props.addTask(details);
  };
  render() {
    console.log(this.props.tasks);
    return (
      <div className="m-4">
        <div className="d-flex justify-content-between align-items-center">
          {" "}
          <h2 className=" ">Pomodoro Tasks</h2>
          <button className="btn btn-primary" onClick={()=>this.props.getTask()}>Refresh</button>
        </div>
        <div className="form-group ">
          <label>Task Name</label>
          <input
            type="text"
            value={this.state.taskName}
            className="form-control"
            onChange={(e) => this.setState({ taskName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Task Description</label>
          <input
            type="text"
            value={this.state.taskDescription}
            className="form-control"
            onChange={(e) => this.setState({ taskDescription: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Creator</label>
          <input
            type="text"
            value={this.state.taskCreator}
            className="form-control"
            onChange={(e) => this.setState({ taskCreator: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes)</label>
          <input
            type="number"
            value={this.state.taskDuration}
            className="form-control"
            onChange={(e) => this.setState({ taskDuration: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={()=>this.handleSubmit()}>
          Submit
        </button>

        <h2 className="text-center m-5">Tasks List</h2>
        {this.getTasksInTasksList()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  // return state;
  // {state.pomodoro.tasks.data.length>0? return {tasks:state.pomodoro.tasks.data}:''}
  return { tasks: state.getPomodoro.tasks };
};
export default connect(mapStateToProps, { addTask, getTask })(Form);
