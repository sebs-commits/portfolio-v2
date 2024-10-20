import cartographerImage from "../assets/cartographer.png";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-24 bg-cyan-200 text-white relative border-black border-2 rounded-b-lg">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 bg-repeat"
        style={{ backgroundImage: `url(${cartographerImage})` }}
      ></div>
      <p className="text-center relative z-10 text-black">
        Made with ❤️ by Sebastian
      </p>
      <div className="absolute -top-6 -left-4 w-16 h-16 bg-red-400 border-2 border-black transform rotate-12 flex items-center justify-center">
        {" "}
      </div>
    </footer>
  );
};

export default Footer;
