import { useCallback, useContext } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { USER_ALBUMS } from "../../commons/routes";

export const useUsersPage = () => {
  const { data } = useUser();

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const goToUserAlbums = useCallback((user: User) => {
    navigate(USER_ALBUMS);
    setUser(user);
  }, []);

  return {
    listUser: data?.data,
    goToUserAlbums: goToUserAlbums,
  };
};
