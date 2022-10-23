import PropTypes from 'prop-types';
import { Text, SpannedText } from './User.style';

export const User = ({ name, email }) => {
  const isTrue = email.endsWith('biz');
  return (
    <>
      <Text>
        Name: <SpannedText>{name}</SpannedText>
      </Text>
      <Text>
        Email: <SpannedText isRed={isTrue}>{email}</SpannedText>
      </Text>
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
