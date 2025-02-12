import AlbumsCard from "../../components/albums-card";
import PhotoCard from "../../components/photo-card";
import UserCard from "../../components/user-card";
import { useAlbumPhotos } from "./hooks";

const Photos = () => {
  const { userAlbum, user, photos } = useAlbumPhotos();

  return (
    <div>
      {user && <UserCard id={user.id} name={user.name} email={user.email} />}
      {userAlbum && <AlbumsCard title={userAlbum.title} id={userAlbum.id} />}
      {photos?.map(({ title, url, id }) => (
        <PhotoCard title={title} url={url} id={id} />
      ))}
    </div>
  );
};

export default Photos;
