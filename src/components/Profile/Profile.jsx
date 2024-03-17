import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = (props) => {

     const { name, tag, location, image, stats} = props;
  const { followers, views, likes } = stats;

  return (
   <div className={css.profileWraper}>
<div className={css.profileAvatarWraper}>
        <img 
          className={css.profileAvatar}
src={image}
alt="User avatar"
/>
<p className={css.profileTitle}>{name}</p>
<p className={css.profileMainInfo }>@{tag}</p>
 <p className={css.profileMainInfo }>{location}</p>
</div>

<ul className={css.profileStats}>
<li className={css.profileStatsItem}>
<span className={css.profileStatsTitle}>Followers</span>
<span className={css.profileStatsValue}>{followers}</span>
</li>
<li className={css.profileStatsItem}>
<span className={css.profileStatsTitle}>Views</span>
                  <span className={css.profileStatsValue}>{views}</span>
</li>
<li className={css.profileStatsItem}>
<span className={css.profileStatsTitle}>Likes</span>
<span className={css.profileStatsValue}>{likes}</span>
</li>
</ul>
</div>

  );
};

export default Profile;

