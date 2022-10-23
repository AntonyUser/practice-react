import { users } from '../Data/users';
import { User } from '../components/User/User';
import { UsersList } from '../components/UsersList/UsersList';
import { Section } from '../components/Section/Section';

const element = users[0];
const { name, email } = element;
export const App = () => {
  return (
    <>
      <Section>
        <User name={name} email={email} />
      </Section>
      <Section title="List of Users">
        <UsersList users={users} />
      </Section>
    </>
  );
};
