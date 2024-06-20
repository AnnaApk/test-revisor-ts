export default interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}
export default interface Album {
  albumId: string;
  userId: string;
  title: string;
}
export default interface IPhoto {
  albumId: string;
  id: string;
  title: string;
  url: string;
}
