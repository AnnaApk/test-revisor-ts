import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IPhoto from "../interfaces";
import styles from '../styles/photosList.module.css';
import Photo from "./Photo";

interface IProps {
  albumId: string;
}

function PhotosList({albumId}:IProps) {

  const fetchPhotos = async (): Promise<IPhoto[]> => {
    const { data } = await axios.get(`/photos/${albumId}`);
    return data;
  };

  const {
    isPending,
    error,
    data: photos,
  } = useQuery({
    queryKey: [`photos-${albumId}`],
    // enabled: isOpen,
    queryFn: fetchPhotos,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className={styles.list}>
      {photos?.map((el) => {
        return (
          <li key={el.id} className={styles.list__item}>
            <Photo photo={el} />  
          </li>
        );
      })}
    </ul>
  )
}

export default PhotosList;
