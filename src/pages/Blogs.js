import { Card } from "flowbite-react";
import React from "react";
import useTitles from "../hooks/useTitles";
import NoSQL from "../assets/nosql_sql.jpg";
import JWT from "../assets/jwt.png";
import NodeJs from "../assets/nodejs.png";
import JSvsNode from "../assets/jsvsnode.png";

const Blogs = () => {
  // set page title
  useTitles("Blogs");
  return (
    <div className="container mx-auto py-12 sm-p-4">
      <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <Card imgSrc={NoSQL}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is the Difference between SQL and NoSQL?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            A SQL Database follows a table like structure which can have an
            unlimited number of rows and every data present inside the database
            is properly structured with Predefined Schemas, it is basically used
            to manipulate Relational Databases Management Systems.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            A NoSQL Database is a Distributed Database where the data is very
            unstructured with Dynamic Schema. Unlike SQL it cannot have
            unlimited rows but it follows a Standard Schema Definition and can
            store all sorts of data models with large distributed data in the
            form of key-value pairs, graph databases, documents or wide-column
            stores.
          </p>
        </Card>
        <Card imgSrc={JWT}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is JWT?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP)
          </p>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How does it work?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key. User's Client
            uses the JWT to access protected resources by passing the JWT in
            HTTP Authorization header. Resource server then verifies the
            authenticity of the token using the secret salt/ public key.
          </p>
        </Card>
        <Card imgSrc={JSvsNode}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is the difference between javascript and Node JS?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Javascript is a programming language that is used for writing
            scripts on the website. Javascript can only be run in the browsers.
            It is basically used on the client-side. Javascript is capable
            enough to add HTML and play with the DOM. Javascript can run in any
            browser engine as like JS core in safari and Spidermonkey in
            Firefox. Javascript is used in frontend development. Some of the
            javascript frameworks are RamdaJS, TypedJS, etc.
          </p>
        </Card>
        <Card imgSrc={NodeJs}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How does NodeJS handle multiple requests at the same time?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
           Node Js is Single Threaded runtime, so it will manage multiple request at a time. The seemingly mysterious thing is how both the approaches above manage to run workload in "parallel"? The answer is that the database is threaded. So our single-threaded app is actually leveraging the multi-threaded behaviour of another process: the database.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          singlethreaded app fails big if you need to do lots of CPU calculations before returning the data. Now, I don't mean a for loop processing the database result. That's still mostly O(n). What I mean is things like doing Fourier transform (mp3 encoding for example), ray tracing (3D rendering) etc.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
