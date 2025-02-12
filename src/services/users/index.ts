import api from "..";

export const getUserList = () => {
  return api.get<User[]>("/users");
};

export const getUserAlbums = (id: number) => {
  return api.get<Album[]>("/users/" + id + "/albums");
};
