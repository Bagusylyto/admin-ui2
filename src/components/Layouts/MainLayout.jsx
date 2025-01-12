import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";
import { useContext, useEffect } from "react";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";

const MainLayout = (props) => {
  const { children } = props;
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);

  // Sinkronkan tema saat komponen dimuat
  useEffect(() => {
    const savedMode = localStorage.getItem("darkmode");
    if (savedMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="flex bg-special-mainBg dark:bg-gray-900 w-screen min-h-screen max-w-full transition-colors duration-200">
      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}

      <div className="w-screen">
        {isLoading && <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />}
        {msg && <CustomizedSnackbars severity={msg.severity} message={msg.desc} open={open} setOpen={setOpen} />}

        {/* header start*/}
        <Header />
        {/* header end*/}

        {/* content start*/}
        <main className="px-6 py-4 dark:text-white transition-colors duration-200">{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;

// import Header from "../Fragments/Header";
// import Navbar from "../Fragments/Navbar";
// import { useContext } from "react";
// import { NotifContext } from "../../context/notifContext";
// import SimpleBackdrop from "../Elements/Backdrop";
// import CustomizedSnackbars from "../Elements/SnackBar";

// const MainLayout = (props) => {
//   const { children } = props;
//   const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);

//   // Sinkronkan tema saat komponen dimuat
//   useEffect(() => {
//     const savedMode = localStorage.getItem("darkmode");
//     if (savedMode === "true") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   return (
//     <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full`}>
//       {/* navbar start*/}
//       <Navbar />
//       {/* navbar end*/}
//       <div className="w-screen">
//         {isLoading && <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />}
//         {msg && <CustomizedSnackbars severity={msg.severity} message={msg.desc} open={open} setOpen={setOpen} />}
//         {/* header start*/}
//         <Header />
//         {/* header end*/}
//         {/* content start*/}
//         <main className="px-6 py-4">{children}</main>
//         {/* content end*/}
//       </div>
//     </div>
//   );
// };

// export default MainLayout;
