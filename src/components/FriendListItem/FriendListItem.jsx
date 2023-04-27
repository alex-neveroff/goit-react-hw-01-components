import PropTypes from 'prop-types';
import { FriendCard, Avatar, FriendName, Chip } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <Chip status={isOnline}></Chip>
      <Avatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
