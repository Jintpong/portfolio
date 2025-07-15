import profilePicture from "/src/assets/profilePicture.png";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pb-12 px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-6xl w-full gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="pb-2 text-4xl font-bold tracking-tight">
            Sujin Pongchababnapa
          </h2>
          <span className="text-xl font-medium text-gray-400">
            Machine Learning Engineer / <span className="text-gray-500">Data Engineer</span>
          </span>
          <p className="my-6 text-lg leading-relaxed text-gray-200 max-w-xl mx-auto lg:mx-0">
            I am a Computer Science graduate with a strong interest in the applications of Machine Learning and Data Engineering. Through hands-on experience in projects spanning Reinforcement Learning, data manipulation, and data analysis, I have developed a solid foundation in technologies such as PyTorch, TensorFlow, and MySQL. I aspire to apply these technical skills to create meaningful solutions that contribute to a better world.
          </p>
          <a
            href="/src/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block bg-white text-stone-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-stone-100 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-100 h-100 object-cover border border-stone-900 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
