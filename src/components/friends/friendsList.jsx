import PropTypes from 'prop-types';
import css from './friends.module.css';
export const FriendList = ({ friendList }) => {
  return (
    <ul className={css.friendList}>
      {friendList.map(friend => (
        <li className={css.item} key={friend.id}>
          <span
            className={`${css.status} ${
              friend.isOnline ? css.statusOn : css.statusOff
            }`}
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
