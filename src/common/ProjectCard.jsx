

const ProjectCard = ({ src, link, h3, p }) => {
  return (
    <a href={link} target='black'>
            <img className='hover'
            src={src} 
            alt={`${h3} Logo`} />
            <h3>{h3}</h3>
            <p>{p}</p>
        </a>
  )
}

export default ProjectCard
