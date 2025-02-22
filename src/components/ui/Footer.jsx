import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-indigo-300 text-yellow-100 p-10 flex flex-col items-center">
      <footer className="footer flex lg:flex-row flex-col items-start justify-center gap-x-72">
        <aside className="flex sm:flex-row flex-col sm:gap-x-4 sm:items-center">
          {/* <img className="w-32 h-32" src={logo} alt="" /> */}
          <div>
            <h2 className="text-3xl font-semibold">TaskZen</h2>
            <p>A Task management platform</p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Contact Information</h6>
          <a className="link link-hover">tusheranta@gmail.com</a>
          <a className="link link-hover">+880 1746054796</a>
          <a className="link link-hover">Dhaka, Bangladesh</a>
        </nav>
        <nav>
          <h6 className="footer-title">Get in touch</h6>
          <a
            href="https://www.linkedin.com/in/tusherbhakta/"
            target="_blank"
            className="link link-hover"
          >
            <div className="flex gap-x-4 font-medium">
              <FaLinkedin />
              Linked In
            </div>
          </a>
          <a
            href="https://x.com/tusherbhakta"
            target="_blank"
            className="link link-hover"
          >
            <div className="flex gap-x-4 font-medium">
              <FaSquareXTwitter />
              Twitter
            </div>
          </a>
          <a
            href="https://www.facebook.com/tusherbhakta/"
            target="_blank"
            className="link link-hover"
          >
            <div className="flex gap-x-4 font-medium">
              <FaFacebook />
              Facebook
            </div>
          </a>
        </nav>
      </footer>
      <div className="mt-4 ">
        <hr className="w-[90vw] h-2" />
        <p className="text-center text-yellow-100">
          &copy; 2025 TaskZen. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
