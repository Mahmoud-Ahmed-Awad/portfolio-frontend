const Contact = () => {
  return (
    <div className="bg-[#1c1c1c] py-20 px-3 text-[#bfbfbf]" id="contact">
      <h1 className="text-4xl font-bold text-center">Contact Me</h1>
      <div className="container mx-auto mt-10 lg:grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative lg:pr-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            If you have any questions or just want to say hello, feel free to
            reach out!
          </p>
          <div className="space-y-4">
            <div>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:mahmodawadahmed@gmail.com"
                className="text-blue-400"
              >
                mahmodawadahmed@gmail.com
              </a>
            </div>
            <div>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/mahmodawadahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                linkedin.com/in/mahmodawadahmed
              </a>
            </div>
            <div>
              <strong>GitHub:</strong> <a href="">Mahmoud-Ahmed-Awad</a>
            </div>
            <div>
              <strong>Twitter:</strong>{" "}
              <a
                href="https://twitter.com/mahmodawadahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                @mahmodawadahmed
              </a>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="mt-10 lg:mt-0 lg:pl-10">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form
            action="https://formspree.io/f/xjvowzqk"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-[#2c2c2c] text-[#bfbfbf] rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-[#2c2c2c] text-[#bfbfbf] rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-3 bg-[#2c2c2c] text-[#bfbfbf] rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
