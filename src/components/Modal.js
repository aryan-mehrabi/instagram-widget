import React from "react";
import { unfollowerAtom } from "../stores/followStore";
import styles from "./modal.module.css";
import { useAtomValue } from "jotai";

export default function Modal() {
  const unfollowers = useAtomValue(unfollowerAtom);

  const renderUnfollowers = () => {
    return unfollowers.map(user => (
      <li key={user.fbid_v2}>
        <div className={styles.profile}>
          <img src={user.profile_pic_url} alt="" />
          <p>{user.username}</p>
        </div>
        <button className={styles.link}>unfollow</button>
      </li>
    ));
  };
  return (
    <div className={styles.container}>
      {unfollowers.length ? (
        <ul>{renderUnfollowers()}</ul>
      ) : (
        <p>nothing found</p>
      )}
    </div>
  );
}
