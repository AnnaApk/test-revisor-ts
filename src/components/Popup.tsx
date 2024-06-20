import styles from '../styles/popup.module.css';
import closeIcon from '../images/close.svg';

interface IProps {
  handleClick: () => void;
  url: string;
  title: string;
}
export default function Popup({handleClick, url, title}:IProps) {
  return (
      <div className={styles.popup} >
        <button onClick={handleClick} className={styles.close}>
          <img src={closeIcon} alt='иконка-крестик для закрытия картинки' />
        </button>
        <div className={styles.popup__content} onClick={(e)=> e.stopPropagation()}>
          <img src={url} alt={title} className={styles.img} />
        </div>
      </div>
  )
}