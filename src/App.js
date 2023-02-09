import Button from "./component/Button";
import Icon from "./component/Icon";
import Input from "./component/Input";
import fb from "./Image/facebook.png";
import github from "./Image/github.png";
import google from "./Image/google.png";
import img from "./Image/Rectangle1.png";

const App = () => {
  return (
    <div style={{
      width: "874px",
      height: "533px", display: "flex",
      borderRadius: "15px",
      margin: "2rem auto",
      backgroundColor: "#fff"
    }}>
      <div style={{ width: "60%" }}>
        <img src={img} alt="images" />
      </div>
      <div style={{ width: "40%", paddingLeft: "0.5rem", margin: "5rem auto" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

          <h1 style={{ borderBottom: ".5px solid blue", paddingBottom: ".3rem", letterSpacing: "2px", fontWeight: "600", fontSize: "2.2rem" }}>Login</h1>
          <p style={{ margin: "1rem", fontSize: "1.2rem", letterSpacing: "1px", fontWeight: "600" }}>Or Continue With</p>
        </div>

        <div style={{ display: "flex", gap: "2rem", margin: "2rem 0", alignItems: "center", justifyContent: "center" }}>
          <Icon image={google} alt="google" />
          <Icon image={fb} alt="facebook" />
          <Icon image={github} alt="github" />
        </div>
        {/* Form Part */}

        <div>
          <form>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
              <Input type="text" placeholder="Username" />
              <Input type="password" placeholder="Password" />
            </div>
            {/* Button  */}
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "2rem", gap: "2rem" }}>
              <Button type="submit" text="Login" />
              <Button type="button" text="Sign Up" />
            </div>
          </form>
          <p style={{ textAlign: "center", color: "#635f5f", fontSize: "1.2rem", fontWeight: "600" }}>Forgot password ? </p>
        </div>

      </div>
    </div>
  )
}

export default App;