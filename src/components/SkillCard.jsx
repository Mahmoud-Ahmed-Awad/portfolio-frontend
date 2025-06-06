const SkillCard = ({ image, name, description }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md text-center hover:bg-gray-600 transition-colors duration-300 max-w-[150px]">
      <img src={image} alt={`${name} Icon`} className="mx-auto mb-2" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-400 h-35 flex items-center">{description}</p>
    </div>
  );
};

export default SkillCard;
