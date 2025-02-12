import { Container } from "./styles";

interface AlbumsCardProps extends Album {
  onClick?: () => void;
}

const AlbumsCard = ({ title, id, onClick }: AlbumsCardProps) => (
  <Container
    key={id}
    onClick={onClick}
    className="max-w-sm bg-gray-100  rounded overflow-hidden border border-gray-200 m-[8px] flex flex-col p-[24px]"
  >
    <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {title}
    </span>
  </Container>
);

export default AlbumsCard;
