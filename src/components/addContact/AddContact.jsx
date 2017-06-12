import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button.jsx';
import Input from '../input/Input.jsx';
import './AddContact.scss';

class AddContact extends React.Component {
  static propTypes = {
    data: PropTypes.array
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="add-contact">
        <form action="">
          <Input
            defaultValue="First name"
            name='fname'
          />
          <Input
            defaultValue="Last name"
            name='lname'
          />
          <Input
            defaultValue="Email"
            name='email'
          />
          <Input
            defaultValue="Phone"
            name='phone'
          />
          <textarea name="Description" rows="4" placeholder="Description" ></textarea>
          <Button onClick={this._addContactClick(data)} text="Add to contact list" />
        </form>
      </div>
    );
  }

  _addContactClick = (data) => {
    
  };
}

export default AddContact;