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
    </footer>
  );
};

export default Footer;
