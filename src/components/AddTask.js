import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { v4 as UID } from 'uuid';

export class AddTask extends Component {
  state = {
    task: {
      id: UID(),
      title: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        id: UID(),
        title: e.target.value
      }
    });
  }

  addTask = (e) => {
    if (e.target.value !== '') {
      this.props.addTask(this.state.task);
      this.setState({
        task: {
          id: UID(),
          title: ''
        }
      });
    }
  }

  // When selecting a task we need to fill in the text field
  updateState(newState) {
    this.setState({ task: newState });
  }

  render() {
    return (
      <div style={{ width: '50vw' }}>
        <Grid container justify="center" alignItems="center">
          <TextField
            onChange={this.handleChange}
            value={this.state.task.title}
            label="Task" variant="outlined"
          >
          </TextField>

          <Button onClick={this.addTask} size="large" variant="contained" color="primary" style={{ marginLeft: '1rem' }}>
            Ajouter
          </Button>
        </Grid>
      </div>
    );
  }
}

export default AddTask;
