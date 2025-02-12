import { createContext, PropsWithChildren, useState } from "react";

const UserContext = createContext<{
  user?: User;
  setUser: (user: User) => void;
  userAlbum?: Album;
  setUserAlbum: (user: Album) => void;
}>({
  user: undefined,
  setUser: (user: User) => {},
  userAlbum: undefined,
  setUserAlbum: (album: Album) => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();
  const [userAlbum, setUserAlbum] = useState<Album>();

  return (
    <UserContext.Provider value={{ user, userAlbum, setUser, setUserAlbum }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
