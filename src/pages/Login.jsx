import LoginContainer,{Input,Div,Button} from "../pages/LoginStyled";
import Picture from "../assets/download.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: 'ahmet',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('user', JSON.stringify(userInfo));
    navigate("/home");
  };
  return (
    <Div>
      <div style={{ textAlign: "center" }}>
        <img style={{ width: "250px" }} src={Picture} alt="" />
      </div>
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label> <br />
            <Input type="text" name="username" id="username" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <Input type="password" name="password" id="password" required />
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </LoginContainer>
    </Div>
  );
};

export default Login;
