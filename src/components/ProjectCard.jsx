const ProjectCard = ({ title, image, description }) => {
  return (
    <div className="bg-[#2c2c2c] p-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      <h2 className="text-xl font-semibold text-center">{title}</h2>
      <img src={image} alt={title} className="mt-2 rounded-md" />
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default ProjectCard;
