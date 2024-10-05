const TechCard = ({ image, name }) => {
  return (
    <li className="mb-4 flex h-24 w-24 flex-col items-center rounded-lg bg-gray-700 p-4 hover:bg-gray-900">
      <img src={image} alt={name} className="mb-2 h-10 w-10" />
      <span className="text-sm">{name}</span>
    </li>
  );
};

export default TechCard;
