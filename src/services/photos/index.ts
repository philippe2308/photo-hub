import api from "..";

export const getAlbumPhotos = (id: number) => {
  return api.get<Photp[]>("/photos?albumId=" + id);
};
