import UserItem from "./UserItem";
import User from "../interfaces";
import styles from '../styles/catalog.module.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('/users');
  return data;
};

function Catalog() {

  const { isPending, error, data:users} = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className={styles.list}>
      {users.map((el) => {
        return (
          <li key={el.id}>
            <UserItem username={el.username} userID={el.id} />
          </li>
        );
      })}
    </ul>
  );
}

export default Catalog;
