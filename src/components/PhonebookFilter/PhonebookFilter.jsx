import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  handleInputChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input onChange={this.handleInputChange} />
      </>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
