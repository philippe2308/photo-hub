import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { PHOTOS } from "../../commons/routes";
import { useAlbums } from "../../hooks/useAlbums";

export const useAlbumsPage = () => {
  const { data } = useAlbums();
  const navigate = useNavigate();
  const { setUserAlbum, user } = useContext(UserContext);

  const goToAlbumPhotos = useCallback((album: Album) => {
    navigate(PHOTOS);
    setUserAlbum(album);
  }, []);

  return {
    user,
    listAlbum: data?.data,
    goToAlbumPhotos: goToAlbumPhotos,
  };
};
