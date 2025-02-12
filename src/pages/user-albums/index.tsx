import UserCard from "../../components/user-card";
import AlbumsCard from "../../components/albums-card";
import { useAlbumsPage } from "./hooks";

const UserAlbums = () => {
  const { user, listAlbum, goToAlbumPhotos } = useAlbumsPage();
  return (
    <div>
      {user && <UserCard name={user.name} email={user.email} id={user.id} />}

      <span className="font-bold text-xl mb-2">Albums:</span>
      {listAlbum?.map(({ title, id }) => (
        <AlbumsCard
          title={title}
          id={id}
          onClick={() => goToAlbumPhotos({ title, id })}
        ></AlbumsCard>
      ))}
    </div>
  );
};

export default UserAlbums;
