import { useSelector } from "react-redux";
import { RootState } from "../store";
import picture from '../images/picture.svg';
import styles from '../styles/selected.module.css';
import Photo from "./Photo";

function Selected() {

  const selectedPhotos = useSelector((state: RootState) => state.photos.photos);

  if (selectedPhotos.length === 0 ) {
    return (
      <div className={styles.flex_container}>
        <img src={picture} alt="отобранных карточек еще нет" />
        <h2 style={{margin: '32px 0 8px'}}>Список избранного пуст</h2>
        <p style={{margin: '0'}}>Добавляйте изображения, нажимая на звездочки</p>
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {selectedPhotos?.map((el) => {
        return (
          <li key={el.id} className={styles.list__item}>
            <Photo photo={el} />  
          </li>
        );
      })}
    </ul>
  );
}

export default Selected;
