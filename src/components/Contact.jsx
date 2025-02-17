const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r text-white bg-clip-text"> Get in touch</span>
        </h1>

        <p className="text-center text-lg font-semibold text-yellow-500">Wants to Contact. Send me email.</p>

        <a href="mailto:kadamharshad00@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600
        ">Contact Me</a>

      </div>
    </div>
  )
}

export default Contact