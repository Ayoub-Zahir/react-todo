import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';

export class AddTask extends Component {
  state = {
    task: {
      id: null,
      title: ''
    }
  }

  handleChange(){

  }

  addTask(){

  }

  render() {
    return (
      <div style={{ width: '50vw' }}>
        <Grid container justify="center" alignItems="center">
          <TextField onChange={() => {this.handleChange()}} id="outlined-basic" label="Task" variant="outlined" value={this.props.taskClicked.title}></TextField>
          <Button onClick={() => {this.addTask()}} size="large" variant="contained" color="primary" style={{ marginLeft: '1rem' }}>
            Ajouter
          </Button>
        </Grid>
      </div>
    );
  }
}

export default AddTask;
