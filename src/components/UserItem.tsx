import { useState } from "react";
import Button from "./Button";
import styles from '../styles/userItem.module.css';
import AlbumsList from "./AlbumsList";

interface IProps {
  username: string;
  userID: string;
}

function UserItem({ username, userID }: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className={styles.user_container}>
        <Button handleClick={handleClick} isOpen={isOpen} />
        <p>{username}</p>
      </div>
      { isOpen && <AlbumsList userID={userID} />}
    </>
  );
}

export default UserItem;
