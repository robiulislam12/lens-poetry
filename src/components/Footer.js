import { Footer as FooterF } from "flowbite-react";
import Logo from "../assets/lens-poetry.png";

const Footer = () => {
  return (
    <>
      <FooterF container={true}>
        <div className="container mx-auto">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <FooterF.Brand
                href="/"
                src={Logo}
                alt="Lens Poetry Logo"
              />
              <div className="mt-4">
                <p className="text-base lg:w-1/2 text-gray-500 sm:w-full">
                  We are follow our passion, wildlife photography is the most rated and risky photography. But here I will find my happiness.
                </p>
                <FooterF.Copyright href="/" by="Lens Poetry" year={2022} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterF.Title title="Quick Links" />
                <FooterF.LinkGroup col={true}>
                  <FooterF.Link href="/home">Home</FooterF.Link>
                  <FooterF.Link href="/about">About</FooterF.Link>
                  <FooterF.Link href="/services">Services</FooterF.Link>
                  <FooterF.Link href="/blogs">Blogs</FooterF.Link>
                </FooterF.LinkGroup>
              </div>
              <div>
                <FooterF.Title title="Follow us" />
                <FooterF.LinkGroup col={true}>
                  <FooterF.Link href="#">Github</FooterF.Link>
                  <FooterF.Link href="#">Facebook</FooterF.Link>
                  <FooterF.Link href="#">Instagram</FooterF.Link>
                  <FooterF.Link href="#">Twitter</FooterF.Link>
                </FooterF.LinkGroup>
              </div>
              <div>
                <FooterF.Title title="Legal" />
                <FooterF.LinkGroup col={true}>
                  <FooterF.Link href="#">Privacy Policy</FooterF.Link>
                  <FooterF.Link href="#">Terms & Conditions</FooterF.Link>
                </FooterF.LinkGroup>
              </div>
            </div>
          </div>
        </div>
      </FooterF>
    </>
  );
};

export default Footer;
