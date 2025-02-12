interface PhotoCardProps {
  title: string;
  url: string;
  id: number;
}

const PhotoCard = ({ title, url, id }: PhotoCardProps) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg" key={id}>
    <img className="w-full" src={url} alt={`${id}`} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
    </div>
  </div>
);

export default PhotoCard;
