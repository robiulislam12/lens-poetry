import { Button, Label, TextInput, Card } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTitles from "../hooks/useTitles";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {

  const {setUser, signInGoogle} = useContext(AuthContext);

  // Navigate user
  const navigate = useNavigate();

  // Handle google signup
  const handleGoogleSignIn = () =>{
      signInGoogle()
      .then(result =>{
          setUser(result.user);
          alert('User Sign');
          navigate('/')
      })
      .catch(err => console.log(err.message))
  }

  // set page title
  useTitles("Login");
  return (
    <div className="max-w-sm mx-auto py-12">
      <Card>
      <h3 className="text-2xl">Please Login</h3>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
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
