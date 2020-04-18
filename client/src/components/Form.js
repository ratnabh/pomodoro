import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
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
          </div>
        );
      });
    }
  };

  getAllTasks = () => {
    this.props.getTask();
  };
  handleSubmit = () => {
    this.props.addTask(this.state);
  };
  render() {
    console.log(this.props.tasks);
    return (
      <div className="m-4">
        <div className="d-flex justify-content-between align-items-center">
          {" "}
          <h2 className=" ">Pomodoro Tasks</h2>
          <button className="btn btn-primary" onClick={()=>window.location.reload()}>Refresh</button>
        </div>
        <form>
        <div className="form-group ">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.setState({ taskName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Task Description</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.setState({ taskDescription: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Creator</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.setState({ taskCreator: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.setState({ taskDuration: e.target.value })}
          />
        </div>
        </form>

        <button type="submit" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>
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
