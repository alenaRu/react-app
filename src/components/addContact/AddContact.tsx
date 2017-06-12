import * as React from 'react';
import { UserProfile } from '../../interfaces/UserProfile';
import Button from '../button/Button';
import Input from '../input/Input';
import './AddContact.scss';

interface AddContactProps {
  data: UserProfile[];
}

class AddContact extends React.Component<AddContactProps, {}> {
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
          <textarea name="Description" rows={4} placeholder="Description" ></textarea>
          <Button
            
            text="Add to contact list" />
        </form>
      </div>
    );
  }
}

export default AddContact;