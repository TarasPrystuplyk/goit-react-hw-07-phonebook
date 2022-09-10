import { ContactsItem, DeleteButton, Text } from './ContactsItemStyled';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import { Spinner } from 'components/spinner/Spinner';

export const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ContactsItem>
      <Text>Name: {name}</Text>
      <Text>Number: {phone}</Text>
      <DeleteButton
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting && <Spinner size={12} />}
        Delete
      </DeleteButton>
    </ContactsItem>
  );
};