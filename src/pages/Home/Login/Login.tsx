import "./Login.css";

const Login = () => {
  return (
    <section className="login-section">
      <div className="form-container">
        <h1 className="login-header">Zaloguj się</h1>

        <form className="login-form">
          <div className="login-form-row">
            <label className="login-label" htmlFor="usernameInput">
              Nazwa użytkownika
            </label>
            <input
              className="login-form-input"
              name="usernameInput"
              type="text"
              autoFocus
            />
          </div>

          <div className="login-form-row">
            <label className="login-label" htmlFor="passwordInput">
              Hasło
            </label>
            <input
              className="login-form-input"
              name="passwordInput"
              type="password"
            />
            <span className="forgot-password-button">Nie pamiętam hasła</span>
          </div>

          <div className="login-form-bottom">
            <button
              className="create-acc-button"
              onClick={(e) => e.preventDefault()}
            >
              Utwórz konto
            </button>

            <button
              className="form-login-button"
              type="submit"
              onClick={(e) => e.preventDefault()}
            >
              Zaloguj
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
