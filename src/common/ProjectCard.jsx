const ProjectCard = ({ src, link, h3, links }) => {
  return (
      <a href={link} target="black">
        <img className="hover" src={src} alt={`${h3} Logo`} />
        <h3>{h3}</h3>
        <a href={links} target="black">
          <p>Code</p>
        </a>
      </a>
  );
};

export default ProjectCard;
