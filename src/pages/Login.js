import { Button, Label, TextInput, Card } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitles from "../hooks/useTitles";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

  const {setUser, signInGoogle, login} = useContext(AuthContext);

  // Navigate user
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Handle google signup
  const handleGoogleSignIn = () =>{
      signInGoogle()
      .then(result =>{
          setUser(result.user);
          navigate(from, { replace: true });
          toast.success('User Google Sign Successful!')
      })
      .catch(err => console.log(err.message))
  }
  const handleLogin = (e) =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // user login 
    login(email, password)
    .then((result) =>{
      const user = result.user;
      setUser(user);
      navigate(from, { replace: true });
      toast.success('User Email Sign Successful!')
    })
    .catch(err => console.error(err.message))

    form.reset();
  }

  // set page title
  useTitles("Login");


  return (
    <div className="max-w-sm mx-auto py-12">
      <Card>
      <h3 className="text-2xl">Please Login</h3>
        <form className="flex flex-col gap-4" onClick={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
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
            <TextInput id="password1" type="password" required={true} name='password'/>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="remember" className="hover:underline cursor-pointer">Forgot password?</Label>
          </div>
          <Button type="submit">Login</Button>
        </form>
        <hr />
        <p className="text-base text-gray-500 text-center">
          Have not any account? <Link to='/signup' className="underline">Sign Up</Link>
        </p>
        <Button gradientDuoTone="purpleToPink" type="submit" onClick={handleGoogleSignIn}>Google Login</Button>
        <Button gradientDuoTone="purpleToPink" type="submit">Github Login</Button>
      </Card>
    </div>
  );
};

export default Login;
