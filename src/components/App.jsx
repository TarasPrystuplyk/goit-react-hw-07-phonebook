import { ContactsReviewForm } from './form/Form';
import { ContactList } from './list/ContactsList';
import { Filter } from './filter/Filter';
import { Container, Title } from './AppStyled';

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsReviewForm />
      <Filter />
      <ContactList />
    </Container>
  );
}