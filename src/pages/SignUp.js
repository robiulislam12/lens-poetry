import { Button, Label, TextInput, Card } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitles from "../hooks/useTitles";
import toast from "react-hot-toast";

const SignUp = () => {
  const { setUser, signInGoogle, updateUserProfile, registerUser } =
    useContext(AuthContext);

  // Navigate user
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Handle google signup
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(from, { replace: true });
        toast.success("User Google Sign Successful!");

        const currentUser = {
          email: result.user,
        };

        // get jwt token
        fetch("https://lens-poetry.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("lensPoetry-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.log(err.message));
  };

  // Handle SignUp Login
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const email = form.email.value;

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
        toast.success("User Email Sign Successful!");
        // Update user profile
        updateUserProfile(name, photo)
          .then(() => {
            toast.success("User Profile Update");

            const currentUser = {
              email: user.email,
            };

            // get jwt token
            fetch("https://lens-poetry.vercel.app/jwt", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(currentUser),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("lensPoetry-token", data.token);
                navigate(from, { replace: true });
              });
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));

    form.reset();
  };

  // set page title
  useTitles("Register");

  return (
    <div className="max-w-sm mx-auto py-12">
      <Card>
        <h3 className="text-2xl">Please Register</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Full Name" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photoUrl" value="PhotoUrl" />
            </div>
            <TextInput
              id="photoUrl"
              type="url"
              name="photo"
              placeholder="Photo Url"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required={true}
              name="password"
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
        <hr />
        <p className="text-base text-gray-500 text-center">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          type="submit"
          onClick={handleGoogleSignIn}
        >
          Google
        </Button>
        <Button gradientDuoTone="purpleToPink" type="submit">
          Github
        </Button>
      </Card>
    </div>
  );
};

export default SignUp;
