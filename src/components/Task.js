import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class Task extends Component {

  // When selecting a task
  handleClick = (task) => {
    this.props.selecteTask(task);
  }

  render() {
    const task = this.props.data;

    return (
      <div style={{ marginBottom: '1rem', width: '50vw' }}>
        <Card onClick={() => this.handleClick(task)} variant="outlined">
          <CardContent>
            {task.title}
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Task;
