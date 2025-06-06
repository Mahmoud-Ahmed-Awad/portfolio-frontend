const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 Awwad. All rights reserved.</p>
        <p className="text-sm mt-2">
          Follow us on <a href="">Facebook</a>, <a href="">Twitter</a>,{" "}
          <a href="">Instagram</a>, and <a href="">LinkedIn</a>.
        </p>
        <p className="text-sm mt-2">
          Built with <span className="text-red-500">♥</span> using React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
