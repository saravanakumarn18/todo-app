import React from "react";
import Tasks from "./Tasks";
import { Paper, rgbToHex, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";
import { red } from "@material-ui/core/colors";
// import bgImage from './bg2.png'

class App extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        return (
            <div style={{backgroundColor:"#990000"}}>
                 <center style={{fontSize:"50px",marginTop:"70px"}}><h2 style={{color:"black"}}>JUST DO IT</h2></center>
            <div className="App flex"style={{backgroundColor:"black"}}
    //         style={{ backgroundImage:`url(${bgImage})`,backgroundRepeat:"no-repeat",backgroundSize:"fixed", 
    //   height:1500,width:1000,backgroundPosition:"center"}}
            >
               
                <Paper elevation={3} className="container" style={{backgroundColor:"#990000",marginBottom:"250px"}}>
                    <div className="heading"><span style={{textEmphasisColor:"blue"}}>TO-DO</span></div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%",backgroundColor:"red"}}
                            value={this.state.currentTask}
                            required={true}
                            placeholder="Add a new task"
                            onChange={this.handleChange }></TextField>
                        <Button
                            style={{ height: "40px",backgroundColor: "black" }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            <p style={{color:"white"}}>ADD</p>
                        </Button>
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex task_container"style={{backgroundColor:'black'}}
                            >
                                <Checkbox style={{backgroundColor: '#0084ff'}}
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                    
                                />
                                <div style={{backgroundColor:"white",color:"red", width:"100%", height:"100"}}
                                    className={
                                        task.completed 
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    <div style={{backgroundColor: "black"}}>{task.task}</div>
                                </div>
                                <Button style={{backgroundColor: "yellow",height:"40px"}}
                                    onClick={() => this.handleDelete(task._id)}
                                    color="secondary"
                                    variant="outlined"
                                    type="submit"
                                >
                                    <p style={{color:"black"}}>DELETE</p>
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper>
                {/* <img src={bgImage}></img> */}
            </div>
            </div>
        );
    }
}

export default App;