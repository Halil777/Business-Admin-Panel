import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("manager");
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Login;
