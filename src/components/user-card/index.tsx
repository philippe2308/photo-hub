import { Container } from "./styles";

interface UserCardProps {
  id: number;
  name: string;
  email: string;
  onClick?: () => void;
}

const UserCard = ({ name, email, id, onClick }: UserCardProps) => (
  <Container
    key={id}
    onClick={onClick}
    className="max-w-sm rounded overflow-hidden border border-gray-200 m-[8px] flex flex-col p-[24px]"
  >
    <span className="font-bold text-xl mb-2">{name}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {email}
    </span>
  </Container>
);

export default UserCard;
