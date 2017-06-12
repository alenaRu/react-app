import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../contact/Contact.jsx';
import Button from '../button/Button.jsx'
import Input from '../input/Input.jsx';
import './ContactList.scss';

class ContactList extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    goToProfileClick: PropTypes.func,
    goToAddClick: PropTypes.func,
    onContactClick: PropTypes.func
  }
  
  constructor(props) {
    super(props);
    this.state = { displeyedData: this.props.data };
  }

  handleSearch = (event) => {
    const input = event.target;
    const searchQuery = input.value.toLowerCase();

    if (searchQuery !== input.defaultValue) {
      const displeyedData = this.props.data.filter((item) => {
        const searchVal = (item.first_name + " " + item.last_name).toLowerCase();
        return searchVal.indexOf(searchQuery) !== -1;
      });
      this.setState({ displeyedData: displeyedData });
    }
  }

  render() {
    const { goToProfileClick, goToAddClick, onContactClick} = this.props;
    return (
      <div className="contact-list">

        <div className='inputs'>
          <Button
            onClick={goToProfileClick}
            text="View current profile" />
          <Input
            defaultValue="Search certain contact..."
            handleSearch={this.handleSearch}
            name='searchInput'
          />
          <Button
            onClick={goToAddClick}
            text="Add new contact" />
        </div>

        <div className="contacts">
          {
            this.state.displeyedData.map((contact) => {
              
              return <Contact
                key={contact.id}
                contact={contact}
                onContactClick={onContactClick}
              />
            })            
          }
        </div>
      </div>
    );
  }
}

export default ContactList;