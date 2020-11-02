import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Task from './components/Task';
import Grid from '@material-ui/core/Grid';
import { v4 as UID } from 'uuid';

export class App extends Component {
  addTaskComponentRef = React.createRef();
  state = {
    tasks: [
      {
        id: UID(),
        title: 'task 1'
      },
      {
        id: UID(),
        title: 'task 2'
      }
    ]
  };

  selecteTask = (task) => {
    // Notify AddTask (child) component
    this.addTaskComponentRef.current.updateState(task);

    // Change state
    this.setState({
      tasks: this.state.tasks.filter(currentTask => currentTask.id !== task.id)
    });
  }

  addTask = (newTask) => {
    this.setState({ tasks: [newTask, ...this.state.tasks] });
  }

  render() {
    return (
      <div>
        <Grid container justify="center" alignItems="center" direction="column" style={{ minHeight: '100vh' }}>
          {
            this.state.tasks.map(task => {
              return <Task selecteTask={this.selecteTask} data={task} key={task.id} />;
            })
          }
          <AddTask addTask={this.addTask} ref={this.addTaskComponentRef} />
        </Grid>
      </div>
    )
  }
}

export default App;
