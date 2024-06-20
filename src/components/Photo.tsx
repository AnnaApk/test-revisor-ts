import IPhoto from '../interfaces';
import inactive from "../images/inactive.svg";
import added from "../images/added.svg";
import styles from '../styles/photo.module.css';
import { useState } from 'react';
import Popup from './Popup';
import Tooltip from './Tooltip';
import { RootState, useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { addPhoto, removePhoto } from '../features/photoSlice';
import { useLocation } from 'react-router-dom';

interface IProps {
  photo: IPhoto;
}

function Photo({photo}:IProps) {

  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const selectedPhotos = useSelector((state: RootState) => state.photos.photos);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSeleted, setIsSelected] = useState<boolean>(selectedPhotos.includes(photo));

  function handleClick() {
    setIsOpen(prev => !prev)
  }

  const handleAddPhoto= (photo: IPhoto) => {
    dispatch(addPhoto(photo));
    setIsSelected(prev => !prev);
  };

  const handleRemovePhoto = (id: string) => {
    dispatch(removePhoto(id));
    setIsSelected(prev => !prev);
  };

  if ( pathname === '/selected') {
    return (
      <>
        <img src={photo.url} alt={photo.title} className={styles.img} onClick={handleClick} />
        <p className={styles.title}>{photo.title}</p>
    
        <button className={styles.status_button}>
          { isSeleted ?
            <img src={added} alt="желтая звездочка" onClick={() => handleRemovePhoto(photo.id)} /> :
            <img src={inactive} alt="серая звездочка" onClick={() => handleAddPhoto(photo)} />
          }
        </button>

        { isOpen && <Popup handleClick={handleClick} url={photo.url} title={photo.title} /> }
    </>
    )
  }

  return (
    <>
      <Tooltip content={photo.title}>
        <div className={styles.img_container}>
          <img src={photo.url} alt={photo.title} className={styles.img} onClick={handleClick} />
        </div>
      </Tooltip>

      <button className={styles.status_button}>
        { isSeleted ?
          <img src={added} alt="желтая звездочка" onClick={() => handleRemovePhoto(photo.id)} /> :
          <img src={inactive} alt="серая звездочка" onClick={() => handleAddPhoto(photo)} />
        }
      </button>

      { isOpen && <Popup handleClick={handleClick} url={photo.url} title={photo.title} /> }
    </>
  )
}

export default Photo;
