import { useContext } from "react";
import { UserContext } from "../../context/user-context";
import { usePhotos } from "../../hooks/usePhotos";

export const useAlbumPhotos = () => {
  const { data } = usePhotos();

  const { user, userAlbum } = useContext(UserContext);

  return {
    photos: data?.data,
    user,
    userAlbum,
  };
};
