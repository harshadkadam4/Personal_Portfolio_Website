import React from 'react'

const Education = () => {
  return (
    <div id="education" className="flex min-h-screen w-full flex-col items-center gap-11 md:px-16 md:py-24">
        <h1 className="text-4xl font-light text-white items-center justify-center flex-col md:text-6xl"> 
            Education
        </h1>

        <div className="flex flex-col items-center">
            <div className="  text-white py-6" >
                <h1 className="text-2xl font-semibold py-2">M.Sc. Computer Science &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (2023 – 2025) (Expected)</h1>
                <p className="text-white">Department of Computer Science, Savitribai Phule Pune University, Pune.</p>
            </div>

            <div className="  text-white py-6" >
                <h1 className="text-2xl font-semibold py-2">B.Sc. Computer Science (CGPA – 9.17 / 10) &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; (2020 – 2023)</h1>
                <p className="text-white">Tuljaram Chaturchand College, Baramati.</p>
            </div>

            <div className="  text-white py-6" >
                <h1 className="text-2xl font-semibold py-2">HSC (PERCENTAGE – 69.38 %) &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; (2020)</h1>
                <p className="text-white">Vidya Pratishthan’s Arts, Science and Commerce College, Baramati.</p>
            </div>

            <div className="  text-white py-6" >
                <h1 className="text-2xl font-semibold py-2">SSC (PERCENTAGE – 84.20 %) &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (2018)</h1>
                <p className="text-white">Aleshwar Madhyamik Vidyalaya, Alegaon.</p>
            </div>



        </div>
    </div>
  )
}

export default Education