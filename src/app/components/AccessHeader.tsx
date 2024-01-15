export default function AccessHeader({ accessType, setAccessType, onClick }) {
  return (
    <>
      <div className="w-11/12 pt-8 pb-10 mx-auto">
        {accessType === "login" && (
          <div className="flex justify-center w-11/12 gap-4 mx-auto">
            <div
              onClick={() => setAccessType("login")}
              id="loginDiv"
              className="px-1 border-b border-[#5F7C8D] text-[#5F7C8D] font-semibold"
            >
              Login
            </div>
            <div
              onClick={() => setAccessType("signUp")}
              id="signUpDiv"
              className="text-[#5f7c8d3e] font-semibold hover:text-[#4B687A] hover:opacity-70"
            >
              SignUp
            </div>
          </div>
        )}

        {accessType === "signUp" && (
          <div className="flex justify-center w-11/12 gap-4 mx-auto">
            <div
              onClick={() => setAccessType("login")}
              id="loginDiv"
              className="text-[#5f7c8d3e] font-semibold hover:text-[#4B687A] hover:opacity-70"
            >
              Login
            </div>
            <div
              onClick={() => setAccessType("signUp")}
              id="signUpDiv"
              className="border-b border-[#5F7C8D] text-[#5F7C8D] font-semibold"
            >
              SignUp
            </div>
          </div>
        )}
      </div>
    </>
  );
}
