import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">
            Update Your Account
          </span>
          <span className="settingsDeleteTitle">
            <button class="settingsDeleteAccount">Delete Account</button>
          </span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="./images/WhatsApp Image 2022-11-16 at 00.03.27.jpeg" className="" />
              <label htmlFor="fileInput"><i class="settingsPPIcon fa-regular fa-circle-user"></i></label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Alice" />
            <label>Email</label>
            <input type="email" placeholder="Alice@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
      </div>
      <Sidebar />

    </div>
  )
}
