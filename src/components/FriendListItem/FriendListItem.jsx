import clsx from "clsx";
import css from "./FriendListItem.module.css";


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={css.FriendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.FriendName}>{name}</p>
          <p className={isOnline ? `${css.online}` : `${css.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
};



export default FriendListItem;