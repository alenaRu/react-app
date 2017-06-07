// Dependencies
import React from 'react';

// Styles
import './AddContact.scss';

// Components
import Button from '../button/Button.jsx';
import Input from '../input/Input.jsx';

class AddContact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="add-contact">
        <form action="">
          <Input
            defaultValue="First name"
            name='fname'
            required={true}
          />  
          <Input
            defaultValue="Last name"
            name='lname'
            required={true}
          />  
          <Input
            defaultValue="Email"
            name='email'
            required={true}
          /> 
          <Input
            defaultValue="Phone"
            name='phone'
            required={true}
          /> 
          <textarea name="Description" rows="4" placeholder="Description" ></textarea>
          <Button onClick={this.props.backClick} text="Add to contact list" />
        </form>
      </div>
    );
  }
}

export default AddContact;