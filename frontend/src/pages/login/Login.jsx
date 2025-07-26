const Login = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-w-95 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            <span className=""> ChatApp </span>
          </h1>
          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text ">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full input input-bordered h-10"
              ></input>
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full input input-bordered h-10"
              ></input>
            </div>

            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              {"Don't"} have an account?
            </a>

            <div>
              <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// STARTER CODE FOR THIS FILE
// import React from "react";

// const Login = () => {
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center min-w-95 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             <span className=""> ChatApp </span>
//           </h1>
//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text ">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 className="w-full input input-bordered h-10"
//               ></input>
//             </div>

//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full input input-bordered h-10"
//               ></input>
//             </div>
//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             >
//               {"Don't"} have an account?
//             </a>

//             <div>
//               <button className="btn btn-block btn-sm mt-2">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
