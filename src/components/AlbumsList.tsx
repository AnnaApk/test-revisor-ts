import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Album from '../interfaces';
import AlbumItem from "./AlbumItem";
import styles from '../styles/albumsList.module.css';

interface IProps {
  userID: string;
}

function AlbumsList({userID}:IProps) {

  const fetchAlbums = async (): Promise<Album[]> => {
    const { data } = await axios.get(`/albums/${userID}`);
    return data;
  };

  const {
    isPending,
    error,
    data: albums,
  } = useQuery({
    queryKey: [`user-albums-${userID}`],
    // enabled: isOpen,
    queryFn: fetchAlbums,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className={styles.albums_list}>
    {albums?.map((el) => (
      <li key={el.id}>
        <AlbumItem albumId={el.albumId} title={el.title} />
      </li>
    ))}
    </ul>
  )
}

export default AlbumsList;
