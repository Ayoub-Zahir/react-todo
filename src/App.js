import React, { Component } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Components
import AddTask from './components/AddTask';
import Task from './components/Task';

export class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'task 1'
      },
      {
        id: 2,
        title: 'task 2'
      }
    ],
    taskClicked: {
      id: 0,
      title: ''
    }
  };

  taskClicked = (task) => {
    this.setState({
      tasks: this.state.tasks.filter(currentTask => currentTask.id !== task.id),
      taskClicked: task
    });
  }

  render() {
    return (
      <div>
        <Grid container justify="center" alignItems="center" direction="column" style={{ minHeight: '100vh' }}>
          {
            this.state.tasks.map(task => {
              return <Task taskClicked={this.taskClicked} data={task} key={task.id} />;
            })
          }
          <AddTask taskClicked={this.state.taskClicked} />
        </Grid>
      </div>
    )
  }
}

export default App;
