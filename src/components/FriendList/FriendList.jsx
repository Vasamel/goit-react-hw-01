import clsx from "clsx";
import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";


const FriendList = ({ friends }) => {
  return (
    <ul className={css.FriendList}>
      {friends.map((friend) => (
        <li className={css.FriendListItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;