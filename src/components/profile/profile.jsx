import './profile.css'
import Llama from '../../assets/llamapic.png'
import ethan from '../../assets/me.jpg'


function Profile() {
    return (
        <div id="profile">
            <div><img width="250" src={ethan} /></div>
            <div id="profile-text">
                <p>Hi, I'm</p>
                <h2>Ethan Lee</h2>
                <p>Boston University Student</p>
                <p>Expected Graudation: 2027</p>
                <div className="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/ethan-lee-762335253/"><img id="linkedin-img" width="60" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
                    <a target="_blank" href="https://github.com/elee05"><img id="github-img" width="60" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
                </div>
            </div>
        </div>
    )
}

export default Profile