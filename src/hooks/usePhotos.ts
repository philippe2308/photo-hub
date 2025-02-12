import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { getAlbumPhotos } from "../services/photos";
import { UserContext } from "../context/user-context";

export const usePhotos = () => {
  const { userAlbum } = useContext(UserContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["getUserAlbums", userAlbum?.id],
    queryFn: ({ queryKey }) => getAlbumPhotos(queryKey[1] as number),
  });

  return { isPending, error, data };
};
