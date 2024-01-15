import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

export default function AccessForm({ acessType, users, setUsers }) {
  return (
    <>
      <div className="w-10/12 py-1 mx-auto md:w-9/12">
        {acessType === "login" && <LoginForm users={users} />}
        {acessType === "signUp" && (
          <SignUpForm users={users} setUsers={setUsers} />
        )}
      </div>
    </>
  );
}
