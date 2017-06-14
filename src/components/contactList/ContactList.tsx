import * as React from 'react';
import { UserProfile } from '../../interfaces/UserProfile';
import Contact from '../contact/Contact';
import Button from '../button/Button'
import Input from '../input/Input';
import './ContactList.scss';

export interface ContactListProps {
  data: UserProfile[],
  goToProfileClick: () => void,
  goToAddClick: () => void,
  onContactClick: (contactID: number) => void,
}

class ContactList extends React.Component<ContactListProps, { displeyedData: UserProfile[] }> {
  state: { displeyedData: UserProfile[] };
  constructor(props: ContactListProps) {
    super(props);
    this.state = { displeyedData: this.props.data };
  }

  handleSearch = (inputName: string, inputValue: string) => {
    const searchQuery = inputValue.toLowerCase();

    if (searchQuery !== '') {
      const displeyedData = this.props.data.filter((item) => {
        const searchVal = (item.first_name + " " + item.last_name).toLowerCase();
        return searchVal.indexOf(searchQuery) !== -1;
      });
      this.setState({ displeyedData: displeyedData });
    }
  }

  render() {
    const { goToProfileClick, goToAddClick, onContactClick } = this.props;
    return (
      <div className="contact-list">

        <div className='inputs'>
          <Button
            onClick={goToProfileClick}
            text="View current profile"
          />
          <Input
            defaultValue="Search certain contact..."
            handleInput={this.handleSearch}
            name='searchInput'
          />
          <Button
            onClick={goToAddClick}
            text="Add new contact" />
        </div>

        <div className="contacts">
          {
            this.state.displeyedData.map((contact) =>
              (<Contact key={contact.id} contact={contact} onContactClick={onContactClick} />)).reverse()
          }
        </div>
      </div>
    );
  }
}

export default ContactList;