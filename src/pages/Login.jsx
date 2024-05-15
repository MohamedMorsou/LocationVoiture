import React from "react";
import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
    
  return (
    <Helmet title="Login">
      {/* <CommonSection title="Login" /> */}
      <section>
        <div className="login">
          <h3>
            Hello ! <span>Welcome</span> Back
          </h3>
          <form action="">
            <div className="form">
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mt-5"
                required
              />
            </div>

            <div className="mt-7 button">
              <button type="submit">Login</button>
            </div>

            <p className="mt-5 p">
              Don't have an account  ? 
              <Link to="/register"> Register</Link>
            </p>
          </form>
        </div>
      </section>
    </Helmet>
  );
};

export default Login;

// import React from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <Helmet title="Login">
//       <CommonSection title="Login" />
//       <section className="my-10">
//         <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-10">
//           <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10"
//           >
//             Hello <span className="text-primaryColor">Welcome</span> Back
//           </h3>
//           <form action="">
//             <div className="mb-5">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-3 border-b border0[#0066ff61]
//               focus:outline-none focus:border-b-primaryColor text-base
//               leading-7 text-headingColor placeholder:text-textColor
//               rounded-md cursor-pointer"
//                 required
//               />
//             </div>
//             <div className="mb-5">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-3 border-b border0[#0066ff61]
//               focus:outline-none focus:border-b-primaryColor text-base
//               leading-7 text-headingColor placeholder:text-textColor
//               rounded-md cursor-pointer"
//                 required
//               />
//             </div>

//             <div className="mt-7">
//               <button
//                 type="submit"
//                 className="w-full bg-primaryColor text-white
//               text-[18px] leading-[30px] rounded-lg px-4 py-3"
//               >
//                 LOgin
//               </button>
//             </div>

//             <p className="mt-5 text-textColor text-center">
//               Don't have an account?
//               <Link
//                 to="/register"
//                 className="text-primaryColor font-medium ml-1"
//               >
//                 Register
//               </Link>
//             </p>
//           </form>
//         </div>
//       </section>
//     </Helmet>
//   );
// };

// export default Login;
