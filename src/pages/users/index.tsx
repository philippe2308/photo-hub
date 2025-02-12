import UserCard from "../../components/user-card";
import { useUsersPage } from "./hooks";

const Users = () => {
  const { listUser, goToUserAlbums } = useUsersPage();
  return (
    <div>
      {listUser?.map((user) => (
        <UserCard
          name={user.name}
          email={user.email}
          id={user.id}
          onClick={() => goToUserAlbums(user)}
        />
      ))}
    </div>
  );
};

export default Users;
