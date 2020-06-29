import React from "react";
import "react-dates/initialize";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./calender.css";

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(this.props.start),
      endDate: moment(this.props.end),
      focusedInput: null,
    };
  }

  handleDateChange = ({ startDate, endDate }) =>
    this.setState({ startDate, endDate });

  handleFocusChange = (focusedInput) => this.setState({ focusedInput });
  render() {
    return (
      <div className="calender-container">
        <div className="calender-list-container">
          <h3>{this.props.title}</h3>
          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.handleDateChange}
            onFocusChange={this.handleFocusChange}
            startDateId="startDate"
            endDateId="endDate"
            focusedInput={this.state.focusedInput}
            isOutsideRange={() => null}
          />
          <span>{this.props.clickHere}&uarr;</span>
        </div>
      </div>
    );
  }
}

export default Calender;
