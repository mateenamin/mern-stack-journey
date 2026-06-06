function OpacityCursorOverflow() {
  return (
    <div className="bg-gray-100 min-h-screen p-10 font-poppins">

      <h1 className="text-3xl font-bold text-brand text-center mb-10">
        Opacity + Cursor + Overflow
      </h1>

      {/* Opacity */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Opacity</h2>
      <div className="flex gap-4 mb-10 flex-wrap">

        <div className="bg-brand text-white p-6 rounded-xl opacity-25 text-center w-28">
          25%
        </div>
        <div className="bg-brand text-white p-6 rounded-xl opacity-50 text-center w-28">
          50%
        </div>
        <div className="bg-brand text-white p-6 rounded-xl opacity-75 text-center w-28">
          75%
        </div>
        <div className="bg-brand text-white p-6 rounded-xl opacity-100 text-center w-28">
          100%
        </div>

        {/* Hover opacity */}
        <div className="bg-green-500 text-white p-6 rounded-xl
                        opacity-40 hover:opacity-100
                        transition duration-300 text-center w-28 cursor-pointer">
          Hover Me!
        </div>

      </div>

      {/* Cursor */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Cursor</h2>
      <div className="flex gap-4 mb-10 flex-wrap">

        <div className="bg-white p-4 rounded-xl shadow cursor-pointer text-center w-36">
          cursor-pointer
        </div>
        <div className="bg-white p-4 rounded-xl shadow cursor-not-allowed opacity-50 text-center w-36">
          not-allowed
        </div>
        <div className="bg-white p-4 rounded-xl shadow cursor-grab text-center w-36">
          cursor-grab
        </div>
        <div className="bg-white p-4 rounded-xl shadow cursor-zoom-in text-center w-36">
          zoom-in
        </div>
        <div className="bg-white p-4 rounded-xl shadow cursor-crosshair text-center w-36">
          crosshair
        </div>

      </div>

      {/* Overflow */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Overflow</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Hidden */}
        <div>
          <p className="text-gray-500 text-sm mb-2">overflow-hidden</p>
          <div className="bg-white p-4 rounded-xl shadow overflow-hidden h-24">
            <p>Yeh content bahut lamba hai — bahar nahi jayega! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
          </div>
        </div>

        {/* Scroll */}
        <div>
          <p className="text-gray-500 text-sm mb-2">overflow-scroll</p>
          <div className="bg-white p-4 rounded-xl shadow overflow-scroll h-24">
            <p>Scroll karo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem natus distinctio.</p>
            <p>Aur content...</p>
            <p>Aur bhi...</p>
          </div>
        </div>

        {/* X scroll */}
        <div>
          <p className="text-gray-500 text-sm mb-2">overflow-x-auto</p>
          <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
            <div className="flex gap-4 w-max">
              <div className="bg-brand text-white p-4 rounded-lg w-32 text-center">Item 1</div>
              <div className="bg-brand text-white p-4 rounded-lg w-32 text-center">Item 2</div>
              <div className="bg-brand text-white p-4 rounded-lg w-32 text-center">Item 3</div>
              <div className="bg-brand text-white p-4 rounded-lg w-32 text-center">Item 4</div>
              <div className="bg-brand text-white p-4 rounded-lg w-32 text-center">Item 5</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default OpacityCursorOverflow