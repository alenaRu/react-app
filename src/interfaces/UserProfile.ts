interface UserProfileInterface {
  id?: number,
  first_name?: string,
  last_name?: string,
  email?: string,
  phone?: string,
  image?: string,
  text?: string
}

export class UserProfile implements UserProfileInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  image: string;
  text: string;

  constructor(userData: { first_name: string, last_name: string, email: string, phone: string, text: string, id:number, image: string} ) {
    let {id, first_name, last_name, email, phone, text, image } = userData;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.image = image || `https://robohash.org/${first_name + last_name}.png?size=250x250&set=set1`;
    this.id = id || -1;
    this.text = text;
  }
}