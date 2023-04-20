import * as React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <div className="h-30rem my-8 flex flex-row justify-content-center">
      <div className="m-auto h-30rem w-30rem border-solid border-primary border-round-lg">
        <div className="m-auto h-full flex flex-column p-4 gap-4">
          <h3>Login</h3>
          <div className="h-full flex flex-column gap-4">
            <div className="flex flex-column gap-2">
              <label>Username</label>
              <InputText />
            </div>
            <div className="flex flex-column gap-2">
              <label>Password</label>
              <div>
                <Password toggleMask />
              </div>
            </div>
            <Button label="Submit" />
          </div>
          <div className="flex flex-row justify-content-between">
            <Link to="/">
              <i
                className="pi pi-angle-double-left"
                style={{
                  fontSize: "1rem",
                  color: "var(--primary-color)",
                  marginRight: "0.3rem",
                }}
              />
              home
            </Link>
            <div>
              Not account?
              <Link to="/register" className="ml-2 text-primary">
                Sign-up now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
