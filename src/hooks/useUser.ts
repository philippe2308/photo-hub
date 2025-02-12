import { useQuery } from "@tanstack/react-query";
import { getUserList } from "../services/users";
export const useUser = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["listUsers"],
    queryFn: getUserList,
  });

  return { isPending, error, data };
};
