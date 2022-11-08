import { Button, Label, TextInput, Card } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitles from "../hooks/useTitles";

const SignUp = () => {

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
  useTitles("Register");

  return (
    <div className="max-w-sm mx-auto py-12">
      <Card>
      <h3 className="text-2xl">Please Register</h3>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Full Name" />
            </div>
            <TextInput
              id="name"
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
          <Button type="submit">Register</Button>
        </form>
        <hr />
        <p className="text-base text-gray-500 text-center">
          Already have an account? <Link to='/login' className="underline">Login</Link>
        </p>
        <Button gradientDuoTone="purpleToPink" type="submit" onClick={handleGoogleSignIn}>Google</Button>
        <Button gradientDuoTone="purpleToPink" type="submit">Github</Button>
      </Card>
    </div>
  );
};

export default SignUp;
