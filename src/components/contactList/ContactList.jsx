// Dependencies
import React from 'react';

// Styles
import './ContactList.scss';

// Components
import Contact from '../contact/Contact.jsx';
import Button from '../button/Button.jsx'
import Input from '../input/Input.jsx';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = { displeyedData: this.props.data };
  }

  handleSearch(event) {
    const input = event.target;
    const searchQuery = input.value.toLowerCase();

    if (searchQuery !== input.defaultValue) {
      const displeyedData = this.props.data.filter((el) => {
        const searchVal = (el.first_name + " " + el.last_name).toLowerCase();
        return searchVal.indexOf(searchQuery) !== -1;
      });
      this.setState({ displeyedData: displeyedData});
    }
  }

  render() {
    return (
      <div className="contact-list">
        
        <div className='inputs'>
          <Button
            onClick={this.props.goToProfileClick}
            text="View current profile" />
          <Input
            defaultValue="Search certain contact..."
            handleSearch={this.handleSearch}
            name='searchInput'
          />
          <Button
            onClick={this.props.goToAddClick}
            text="Add new contact" />
        </div>

        <div className="contacts">
          {
            this.state.displeyedData.map((elem, i) => {
              return <Contact
                key={elem.id}
                id={elem.id}
                img={elem.image}
                name={elem.first_name + " " + elem.last_name}
                num={elem.phone}
                contactClick={this.props.contactClick}
              />
            })
          }
        </div>
      </div>
    );
  }
}

export default ContactList;