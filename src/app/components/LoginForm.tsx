import { showAlert, isInputEmpty } from "../functions/general";

interface LoginFormProps {
  users: User[];
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

interface User {
  email: string;
  password: string;
}

export default function LoginForm({
  users,
  email,
  setEmail,
  password,
  setPassword,
}: LoginFormProps) {
  function handleLogin(evt: any) {
    evt.preventDefault();

    const isValidUser = (email: string, password: string) => {
      return users.some(
        (user) => user.email === email && user.password === password
      );
    };

    if (isValidUser(email, password)) {
      showAlert("Login bem-sucedido! Seja bem-vindo(a)!");
    } else if (isInputEmpty(email, password)) {
      showAlert("Por favor, preencha todos os campos.");
    } else {
      showAlert("Email ou senha incorretos. Tente novamente.");
    }
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
            value={email}
            onChange={(evt) => {
              setEmail(evt.target.value);
            }}
            name="email"
            id="loginEmail"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full pb-2">
          <input
            className="border-b border-[#4B687A] w-full text-xs font-light px-1 pb-1 text-black"
            type="password"
            value={password}
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
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
