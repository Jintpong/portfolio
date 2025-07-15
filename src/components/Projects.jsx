const Projects = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <div className="rounded overflow-hidden shadow-lg">
                <img src = "/src/assets/RL.png" alt="Project 1" className="w-full" />
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">Reinforcement Learning: Proximal Policy Optimisation For Water Irrigation</h3>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg">
                <video controls className="w-full h-auto">
                    <source src = "/q-learning.mp4" type="video/mp4" />
                </video>
                <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Atari Game: Deep Q-Learning</h3>
                </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg">
                <video controls className="w-full h-auto">
                    <source src = "/scuderia.mp4" type="video/mp4" />
                </video>
                <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">ScuderiaEstates: An AI-Driven real Estate Analytics and Investment Platforms</h3>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Projects