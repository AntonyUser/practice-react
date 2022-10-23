import PropTypes from 'prop-types';
import { User } from '../User/User';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(({ name, email, id }) => {
        return (
          <li key={id}>
            <User name={name} email={email} />
          </li>
        );
      })}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
