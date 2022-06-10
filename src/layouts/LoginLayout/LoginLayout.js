import { useAuth } from "../../authprovider";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./LoginLayout.module.scss";

function LoginLayout() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSignOutSubmit(event) {
    event.preventDefault();

    auth.signout(() => {
      navigate("/login");
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");

    auth.signin(
      password,
      () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        // navigate(from, { replace: true });
        navigate('/test', { replace: true });
      },
      (msg) => {
        console.log("error msg", msg);
      }
    );
  }

  return (
    <div>
      {auth.isAuthenticated ? (
        <div>
          <label>You are logged in</label>
          <form onSubmit={handleSignOutSubmit}>
            <button type="submit">Sign out</button>
          </form>
        </div>
      ) : (
        <div>
          {" "}
          <p>You must log in to view the page at {from}</p>
          <form onSubmit={handleSubmit}>
            <label>
              password: <input name="password" type="password" />
            </label>{" "}
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginLayout;
