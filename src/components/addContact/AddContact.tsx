import * as React from 'react';
import * as _ from 'lodash';
import { UserProfile } from '../../interfaces/UserProfile';
import Button from '../button/Button';
import Input from '../input/Input';
import './AddContact.scss';

interface AddContactProps {
  data: UserProfile[],
  addUserClick: (userData: UserProfile) => void
}

class AddContact extends React.Component<AddContactProps, {}> {
  inputs: { name: string, defaultValue: string, currentValue: string }[]

  render() {
    const { data, addUserClick } = this.props;
    this.inputs = [
      { name: 'first_name', defaultValue: "First name", currentValue: "" },
      { name: 'last_name', defaultValue: "Last name", currentValue: "" },
      { name: 'email', defaultValue: "Email", currentValue: "" },
      { name: 'phone', defaultValue: "Phone", currentValue: "" },
      { name: 'text', defaultValue: "Description", currentValue: "" },
    ];

    return (
      <div className="add-contact">
        <form action="">
          {
            this.inputs.map((input, index, arr) => {
              if (index === (arr.length - 1)) {
                return (
                  <textarea
                    key={index}
                    name={input.name}
                    placeholder={input.defaultValue}
                    onChange={this._handleTextArea}
                    rows={4} />
                )
              }

              return <Input
                key={index}
                defaultValue={input.defaultValue}
                name={input.name}
                handleInput={this._handleInput}
              />
            })
          }

        </form>

        <Button text="Add to contact list" onClick={this._addUserWrapper(addUserClick)} />
      </div>
    )
  }

  _handleInput = (inputName: string, inputValue: string) => {
    let inputIndex = this.inputs.map((item) => item.name).indexOf(inputName);
    this.inputs[inputIndex].currentValue = inputValue;
  }

  _handleTextArea = (event: any) => {
    this.inputs[this.inputs.length - 1].currentValue = event.target.value;
  }


  _isFilled() {
    return this.inputs.every((element, index, array) => {
      if (element.currentValue !== "")
        return true;
    })
  }

  _addUserWrapper = (addUser: (user: any) => void) => () => {
    if (_.isFunction(addUser) && this._isFilled()) {
      let user: any = {};

      this.inputs.forEach((input) => {
        user[input.name] = input.currentValue;
      });  
      console.log(user);
      
      addUser(new UserProfile(user));
    }
  }
}

export default AddContact;