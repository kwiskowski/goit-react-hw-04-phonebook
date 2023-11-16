import { Component } from 'react';
import css from './PhonebookList.module.css';
import PropTypes from 'prop-types';

export class PhonebookList extends Component {
  handleDelete = id => {
    const { value } = id.target;
    this.props.onClick(value);
  };

  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={css.listEl}>
              {contact.name}: {contact.number}
              <button
                type="submit"
                value={contact.id}
                onClick={this.handleDelete}
                className={css.delButton}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

PhonebookList.propTypes = {
  onClick: PropTypes.func.isRequired,
};
