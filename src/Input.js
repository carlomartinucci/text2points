import React, { Component } from 'react';


class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <textarea
        className={"Textarea Textarea-" + this.props.lang}
        value={this.props.value}
        onChange={this.handleChange} />
    );
  }
}

export default Input