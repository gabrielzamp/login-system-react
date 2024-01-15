export default function LoginForm({ users }) {
  function handleLogin(event) {
    event.preventDefault();

    const emailElement = document.getElementById("loginEmail");
    const passwordElement = document.getElementById("loginPassword");

    const emailValue = emailElement.value.trim();
    const passwordValue = passwordElement.value.trim();

    const isValidUser = (email, password) => {
      return users.some(
        (user) => user.email === email && user.password === password,
      );
    };

    if (isValidUser(emailValue, passwordValue)) {
      showAlert("Login bem-sucedido! Seja bem-vindo(a)!");
    } else if (isInputEmpty(emailValue, passwordValue)) {
      showAlert("Por favor, preencha todos os campos.");
    } else {
      showAlert("Email ou senha incorretos. Tente novamente.");
    }

    cleanFormFields(emailElement, passwordElement);
  }

  function showAlert(message) {
    alert(message);
  }
  function isInputEmpty(email, password) {
    return email === "" || password === "";
  }
  function cleanFormFields(emailElement, passwordElement) {
    emailElement.value = "";
    passwordElement.value = "";
  }

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center w-11/12 gap-4 mx-auto"
        action=""
        id="loginForm"
      >
        <div className="w-full py-2">
          <input
            className="border-b border-[#4B687A] w-full text-xs font-light px-1 pb-1 text-black"
            type="email"
            name="email"
            id="loginEmail"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full pb-2">
          <input
            className="border-b border-[#4B687A] w-full text-xs font-light px-1 pb-1 text-black"
            type="password"
            name="password"
            id="loginPassword"
            placeholder="Enter Password"
          />
        </div>
        <button
          id="loginButton"
          className="py-2 text-sm w-full text-slate-50 bg-[#4B687A] rounded hover:opacity-90 font-medium"
        >
          Login
        </button>
      </form>
    </>
  );
}
