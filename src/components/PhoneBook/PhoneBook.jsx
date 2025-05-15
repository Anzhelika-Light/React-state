import { Component, useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Section from "./Section";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Modal from "../Modal";
import IconButton from "../IconButton";
import { ReactComponent as AddIcon } from "../../icons/add.svg";
import { TiUserAdd } from "react-icons/ti";
import { nanoid } from "nanoid";
import ContactFormWithFormik from "./ContactFormWithFormik/ContactFormWithFormik";
import css from "./PhoneBook.module.css";

const PhoneBook = ({ showModal, onClose }) => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "0932896715" },
    { id: "id-2", name: "Hermione Kline", number: "0932896716" },
    { id: "id-3", name: "Eden Clements", number: "0932896717" },
    { id: "id-4", name: "Annie Copeland", number: "0932896718" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts?.length) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (data) => {
    const newContact = { id: nanoid(), ...data };

    isDublicate(data)
      ? alert("This contact already exists.")
      : setContacts((prevContacts) => [newContact, ...prevContacts]);

    onClose();
  };

  const isDublicate = (data) => {
    return contacts.find(
      ({ name, number }) => data.name === name && data.number === number
    );
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm onSubmit={addContact} /> */}
      <IconButton onClick={onClose}>
        {/* <AddIcon fill="white" width="40" height="40" /> */}
        <TiUserAdd className={css.icon} />
      </IconButton>
      {showModal && (
        <Modal onClose={onClose}>
          <Section>
            <ContactFormWithFormik onSubmit={addContact} />
          </Section>
        </Modal>
      )}

      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length !== 0 ? (
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        ) : (
          "There are no contacts. Add a new contact, please."
        )}
      </Section>
    </>
  );
};

// class PhoneBook extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "0932896715" },
//       { id: "id-2", name: "Hermione Kline", number: "0932896716" },
//       { id: "id-3", name: "Eden Clements", number: "0932896717" },
//       { id: "id-4", name: "Annie Copeland", number: "0932896718" },
//     ],
//     filter: "",
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts?.length) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem("contacts", JSON.stringify(contacts));
//     }
//   }

//   addContact = (data) => {
//     const newContact = { id: nanoid(), ...data };

//     this.isDublicate(data)
//       ? alert("This contact already exists.")
//       : this.setState(({ contacts }) => ({
//           contacts: [newContact, ...contacts],
//         }));
//     this.props.onClose();
//   };

//   isDublicate(data) {
//     const { contacts } = this.state;
//     return contacts.find(
//       ({ name, number }) => data.name === name && data.number === number
//     );
//   }

//   deleteContact = (id) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== id),
//     }));
//   };

//   changeFilter = (e) => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(
//       ({ name, number }) =>
//         name.toLowerCase().includes(normalizedFilter) ||
//         number.includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const { addContact, deleteContact, changeFilter, getVisibleContacts } =
//       this;
//     const { showModal, onClose } = this.props;
//     const visibleContacts = getVisibleContacts();

//     return (
//       <>
//         <h1>Phonebook</h1>
//         {/* <ContactForm onSubmit={addContact} /> */}
//         <IconButton onClick={this.props.onClose}>
//           {/* <AddIcon fill="white" width="40" height="40" /> */}
//           <TiUserAdd className={css.icon} />
//         </IconButton>
//         {showModal && (
//           <Modal onClose={onClose}>
//             <Section>
//               <ContactFormWithFormik onSubmit={addContact} />
//             </Section>
//           </Modal>
//         )}

//         <Section title="Contacts">
//           <Filter value={filter} onChange={changeFilter} />
//           {this.state.contacts.length !== 0 ? (
//             <ContactList contacts={visibleContacts} onDelete={deleteContact} />
//           ) : (
//             "There are no contacts. Add a new contact, please."
//           )}
//         </Section>
//       </>
//     );
//   }
// }

export default PhoneBook;
