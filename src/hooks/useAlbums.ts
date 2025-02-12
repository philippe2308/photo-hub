import { useQuery } from "@tanstack/react-query";
import { getUserAlbums } from "../services/users";
import { UserContext } from "../context/user-context";
import { useContext } from "react";

export const useAlbums = () => {
  const { user } = useContext(UserContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["getUserAlbums", user?.id],
    queryFn: ({ queryKey }) => getUserAlbums(queryKey[1] as number),
  });

  return { isPending, error, data };
};
