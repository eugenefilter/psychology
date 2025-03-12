<<<<<<< HEAD
=======
// https://vercel.com/

>>>>>>> Remove node_modules and add to .gitignore
import AboutMe from './Pages/AboutMe'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Prices from './Pages/Prices'
import Main from './Pages/Main'
import Services from './Pages/Services'
import Reviews from './Pages/Reviews'
// import Faq from './Pages/Faq'
import Form from './Pages/Form'
import ButtonUp from './BaseComponents/ButtonUp'

function App() {
  return (
    <>
      {/* <header className="mx-auto w-full hidden md:block mb-5"> */}
      <header>
        <Header />
      </header>

      <main className="">
        <Main />
        <AboutMe />
        <Services />
        <Prices />
        <Reviews />
        {/* <Faq /> */}
        <Form />
      </main>

      <footer className="bg-main-green text-white relative md:rounded-t-lg p-5 mt-0 md:mt-28">
        <Footer />
      </footer >

      <ButtonUp />
    </>
  )
}

export default App
