import SignUp from "../BaseComponents/SignUp";

export default function Main() {
  return (
    <section className="wrapper flex flex-col md:flex-row gap-0 md:gap-5 justify-between">

      <div className="w-full md:w-2/5">
<<<<<<< HEAD
        <img src="/public/title.webp" className="block-rounded object-cover h-full" />
=======
        <img src="/title.webp" className="block-rounded object-cover h-full"/>
>>>>>>> Remove node_modules and add to .gitignore
      </div>

      <div className="w-full md:w-3/5 relative block-rounded bg-main-green p-10 md:p-5 h-screen sm:h-auto">
        <h1 className="uppercase leading-tight md:leading-tight text-white text-4xl lg:text-7xl text-left ">
          Елена Олейникова
        </h1>

        <h2 className="text-lg md:text-2xl text-white py-5">
<<<<<<< HEAD
          Включи свет своей Души <br />
=======
          Включи свет своей Души <br/>
>>>>>>> Remove node_modules and add to .gitignore
          Офлайн и онлайн сессии
        </h2>

        <div className="flex justify-center mt-12">
<<<<<<< HEAD
          <SignUp type="circle" className="z-20" />
        </div>

        <div>
          <svg width="100%" height="100%" viewBox="0 0 190 160" className="absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M 190 0 A 190 160 0 0 1 0 160" stroke="#fff" strokeWidth="0.2" fill="transparent" />
          </svg>
          <svg width="100%" height="100%" viewBox="0 0 190 160" className="absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 0 A 190 160 0 0 1 190 160" stroke="#fff" strokeWidth="0.2" fill="transparent" />
=======
          <SignUp type="circle" className="z-20"/>
        </div>

        <div>
          <svg width="100%" height="100%" viewBox="0 0 190 160" className="absolute bottom-0 right-0"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M 190 0 A 190 160 0 0 1 0 160" stroke="#fff" strokeWidth="0.2" fill="transparent"/>
          </svg>
          <svg width="100%" height="100%" viewBox="0 0 190 160" className="absolute bottom-0 left-0"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 0 A 190 160 0 0 1 190 160" stroke="#fff" strokeWidth="0.2" fill="transparent"/>
>>>>>>> Remove node_modules and add to .gitignore
          </svg>
        </div>
      </div>

<<<<<<< HEAD
    </section >
=======
    </section>
>>>>>>> Remove node_modules and add to .gitignore
  );
}