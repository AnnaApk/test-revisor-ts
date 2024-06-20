import { useState } from "react";
import Button from "./Button";
import PhotosList from "./PhotosList";
import styles from '../styles/albumItem.module.css';

interface IProps {
  albumId: string;
  title: string;
}

function AlbumItem({ albumId, title }: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className={styles.album_container}>
        <Button handleClick={handleClick} isOpen={isOpen} />
        <p className={styles.album_title}>{title}</p>
      </div>

      {isOpen && <PhotosList albumId={albumId} />}
    </>
  );
}

export default AlbumItem;
