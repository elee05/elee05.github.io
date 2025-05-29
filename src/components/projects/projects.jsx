import './projects.css'

function Projects({ name, description,image, github }) {
    return (
        <div className="project">
            <h3>{name}</h3>
            <p className = 'desi'>{description}</p>
            <img  src={image} alt={name} className="project-image" />
            <br></br>
            <a target="_blank" href={github}><button className="github"><img className="github-inline" width="20" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> GitHub</button></a>
        </div>
    )
}

export default Projects