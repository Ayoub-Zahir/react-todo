import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class Task extends Component {

  handleClick = (task) => {
    this.props.taskClicked(task);
  }

  render() {
    const { title } = this.props.data;

    return (
      <div style={{ marginBottom: '1rem', width: '50vw' }}>
        <Card onClick={() => this.handleClick(this.props.data)} variant="outlined">
          <CardContent>
            {title}
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Task;
