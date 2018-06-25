import 'rc-time-picker/assets/index.css';
import React, { Component } from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

class EventForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      start: moment(),
      end: moment(),
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <form className='eventForm'>
          <div className='timeform'>
            <div className='start'>
              <label>Start Time</label>
              <TimePicker
                value={this.state.start}
                onChange={(startTime) => this.setState({start: startTime})}
                defaultValue={moment()} showSecond={false} minuteStep={15} />
            </div>
            <div className='end'>
              <label>End Time</label>
              <TimePicker
                value={this.state.end}
                onChange={(endTime) => this.setState({end: endTime})}
                defaultValue={moment()} showSecond={false} minuteStep={15} />
            </div>
          </div>
          <textarea
            value={this.state.description}
            onChange={(e) => this.setState({description: e.target.value})}
            placeholder='Description'></textarea>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default EventForm;
