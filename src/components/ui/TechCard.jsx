const TechCard = ({ image, name }) => {
  return (
    <li className="flex flex-col items-center bg-gray-700 p-4 rounded-lg w-24 h-24 mb-4">
      <img src={image} alt={name} className="h-10 w-10 mb-2" />
      <span className="text-sm">{name}</span>
    </li>
  );
};

export default TechCard;
