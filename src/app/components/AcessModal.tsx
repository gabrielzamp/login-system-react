import { useState } from "react";
import AccessForm from "./AccessForm";
import AccessHeader from "./AccessHeader";

export default function AccessModal() {
  const [acessType, setAcessType] = useState("login");
  const [users, setUsers] = useState([
    { email: "gabriel@simoa.com", password: "123456" },
  ]);

  return (
    <>
      <div className="w-10/12 mx-auto bg-white shadow-sm sm:w-8/12 md:w-7/12 lg:w-6/12 2xl:w-4/12 3xl:w-3/12 rounded-xl">
        {/* <!--  --> */}
        <div className="flex w-full">
          {/* <!-- Image banner --> */}
          <section className="hidden w-full rounded-l-xl lg:block">
            <img
              src="https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/portal/paginas/blue-white-leafy-background-vector-53876-136080-1-1704912731.png"
              alt=""
              className="rounded-l-xl"
            />
          </section>

          {/* <!-- Login section --> */}
          <section className="flex items-center w-full rounded-r-xl">
            <div className="w-full mx-auto">
              <div className="flex flex-col items-center mx-auto bg-white py-14 rounded-xl">
                <div className="w-11/12 mx-auto md:w-8/12">
                  <div className="w-11/12 mx-auto">
                    <div className="text-2xl flex items-end text-[#5F7C8D] w-11/12">
                      <span className="mr-2 text-3xl font-bold">Olá, </span>
                      você!
                    </div>
                  </div>
                </div>

                <AccessHeader
                  accessType={acessType}
                  setAccessType={setAcessType}
                />
                <AccessForm
                  acessType={acessType}
                  users={users}
                  setUsers={setUsers}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
