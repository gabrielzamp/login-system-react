import { showAlert, isInputEmpty } from "../functions/general";

export default function SignUpForm({
  users,
  email,
  setEmail,
  password,
  setPassword,
}) {
  function handleSignUp(evt) {
    evt.preventDefault();

    const isUserExistsWithSamePassword = (password) => {
      return users.some((user) => user.password === password);
    };

    if (isInputEmpty(email, password)) {
      showAlert("Por favor, preencha todos os campos.");
    } else if (isUserExistsWithSamePassword(password)) {
      const existingUser = users.find((user) => user.password === password);
      showAlert(
        `Já existe um usuário com o email "${existingUser.email}" e a mesma senha "${password}".`
      );

      setEmail("");
      setPassword("");
    } else {
      users.push({
        email: email,
        password: password,
      });
      showAlert("Cadastro realizado com sucesso!");
    }
  }

  return (
    <>
      <form
        onSubmit={handleSignUp}
        className="flex-col justify-center flex w-11/12 gap-4 mx-auto"
        action=""
        id="signUpForm"
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
            id="signUpEmail"
            placeholder="Register your email"
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
            id="signUpPassword"
            placeholder="Register your password"
          />
        </div>
        <button
          id="signUpButton"
          className="py-2 text-sm w-full text-slate-50 bg-[#4B687A] rounded hover:opacity-90 font-medium"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
