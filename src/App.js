import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "font-semibold",
        }}
      />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
