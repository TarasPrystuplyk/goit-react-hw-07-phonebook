import { Formik } from 'formik';
import { toast } from 'react-toastify';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';
import { Spinner } from 'components/spinner/Spinner';
import { Box, Input, InputName, SubmitButton } from './FormContactsStyled';

export const ContactsReviewForm = () => {
  const [createContact, { isLoading: isUpdating }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const contactsNames = contacts.map(contact => contact.name);
    if (contactsNames.includes(name)) {
      toast.error(` ${name} is already in contacts.`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      createContact({ name, phone });
      toast.success('A new contact has been added!');
      resetForm();
    }
  };

  return (
    <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
      <Box>
        <InputName>
          Name
          <Input
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter new name"
          />
        </InputName>
        <InputName>
          Phone
          <Input
            autoComplete="off"
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter new phone number"
          />
        </InputName>
        <SubmitButton type="submit" disabled={isUpdating}>
          {isUpdating && <Spinner size={17} />}

          <p>Add Contact</p>
        </SubmitButton>
      </Box>
    </Formik>
  );
};