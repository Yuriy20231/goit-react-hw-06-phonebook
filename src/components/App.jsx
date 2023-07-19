import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem(CONTACTS)) ?? initialContacts
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   if (
  //     contacts.some(
  //       value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     setContacts(oldState => {
  //       const list = [...oldState];

  //       list.push({
  //         id: nanoid(),
  //         name: name,
  //         number: number,
  //       });

  //       return list;
  //     });
  //   }
  // };

  // const contactsFilter = () => {
  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  //   return filteredContacts;
  // };
  // const delContact = id => {
  //   const filtred = contacts.filter(item => item.id !== id);

  //   setContacts(filtred);
  // };

  // const handleChangeInput = event => {
  //   setFilter(event.currentTarget.value);
  // };
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
};

export default App;
