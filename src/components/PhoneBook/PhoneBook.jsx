import { Component } from "react";
import ContactForm from "./ContactForm";
import Section from "./Section";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { nanoid } from "nanoid";

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "0932896715" },
      { id: "id-2", name: "Hermione Kline", number: "0932896716" },
      { id: "id-3", name: "Eden Clements", number: "0932896717" },
      { id: "id-4", name: "Annie Copeland", number: "0932896718" },
    ],
    filter: "",
  };

  addContact = (data) => {
    const newContact = { id: nanoid(), ...data };

    this.isDublicate(data)
      ? alert("This contact already exists.")
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  isDublicate(data) {
    const { contacts } = this.state;
    return contacts.find(
      ({ name, number }) => data.name === name && data.number === number
    );
  }

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const { addContact, deleteContact, changeFilter, getVisibleContacts } =
      this;
    const visibleContacts = getVisibleContacts();

    return (
      <>
        <Section title="PhoneBook">
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={changeFilter} />
          {this.state.contacts.length !== 0 ? (
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
          ) : (
            "There are no contacts. Add a new contact, please."
          )}
        </Section>
      </>
    );
  }
}

export default PhoneBook;
