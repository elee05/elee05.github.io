const skill = (id) => `https://skillicons.dev/icons?i=${id}&theme=light`

const row1 = ['py', 'cpp', 'java' ]
const row2 = ['git',  'mysql', 'latex'] // 'react' 'js', 'ts', 'html', 'css','stata'

export default function About() {
  return (
    <div id="about">
      <div>
        <p>
          I'm a student at Boston University studying Economics and Computer Science interested in Equity Research. Feel free
          to contact me at buerlee@bu.edu!
        </p>
        <br />
        <h3>My Skills</h3>
        <div className="Aicons">
          <div className="row1">
            {row1.map((id) => (
              <img key={id} src={skill(id)} />
            ))}
          </div>
          <div className="row2">
            {row2.map((id) => (
              <img key={id} src={skill(id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
