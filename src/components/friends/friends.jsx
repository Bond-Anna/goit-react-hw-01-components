import PropTypes from 'prop-types';
import css from './friends.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ id, avatar, isOnline, name }) => (
        <li className={css.item} key={id}>
          <span className={css.status}>{isOnline}</span>
          <img className={css.avatar} src={avatar} alt="" width="48" />
          <p className={css.name}>{name}</p>
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
