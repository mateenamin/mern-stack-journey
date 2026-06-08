function AnimationsTransformsTailwind() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-10 font-poppins">

      <h1 className="text-3xl font-bold text-brand text-center mb-10">
        Animations + Transforms
      </h1>

      {/* Transform Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md
                        hover:scale-110 transition duration-300 text-center cursor-pointer">
          <div className="text-3xl mb-2">📦</div>
          <p className="text-gray-700 dark:text-white font-semibold">Scale Up</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md
                        hover:-translate-y-3 hover:shadow-xl transition duration-300 text-center cursor-pointer">
          <div className="text-3xl mb-2">🚀</div>
          <p className="text-gray-700 dark:text-white font-semibold">Lift Up</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md
                        hover:rotate-6 transition duration-300 text-center cursor-pointer">
          <div className="text-3xl mb-2">🌀</div>
          <p className="text-gray-700 dark:text-white font-semibold">Rotate</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md
                        hover:scale-105 hover:-translate-y-2 hover:shadow-xl
                        transition duration-300 text-center cursor-pointer">
          <div className="text-3xl mb-2">⭐</div>
          <p className="text-gray-700 dark:text-white font-semibold">Combined</p>
        </div>

      </div>

      {/* Built-in Animations */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Built-in Animations
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">

        {/* Spin */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
          <div className="text-4xl animate-spin inline-block mb-2">⚙️</div>
          <p className="text-gray-700 dark:text-white font-semibold">Spin</p>
        </div>

        {/* Bounce */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
          <div className="text-4xl animate-bounce inline-block mb-2">🏀</div>
          <p className="text-gray-700 dark:text-white font-semibold">Bounce</p>
        </div>

        {/* Pulse */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
          <div className="text-4xl animate-pulse inline-block mb-2">💓</div>
          <p className="text-gray-700 dark:text-white font-semibold">Pulse</p>
        </div>

        {/* Ping — Notification */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
          <div className="relative inline-block mb-2">
            <span className="text-4xl">🔔</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          </div>
          <p className="text-gray-700 dark:text-white font-semibold">Ping</p>
        </div>

      </div>

      {/* Loading Skeleton */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Loading Skeleton
      </h2>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md max-w-sm">
        <div className="animate-pulse">
          <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-3/4 mb-3"></div>
          <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-full mb-3"></div>
          <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-1/2 mb-6"></div>
          <div className="bg-gray-200 dark:bg-gray-700 h-10 rounded-xl w-full"></div>
        </div>
        <p className="text-gray-400 text-sm mt-3 text-center">Loading skeleton!</p>
      </div>

    </div>
  )
}

export default AnimationsTransformsTailwind