import Header from '../components/Header';
import Footer from '../components/Footer';

import phoneMockup from '../images/iphone.png';
import "./Homepage.css"


export default function Homepage() {
  return (
    <>
      <Header />
      <section className="container mx-auto px-7 h-full mb-24 mt-12">
  <div className="grid max-w-screen-xl px-7 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mockup">
    <div className="mr-auto place-self-center lg:col-span-7 max-w-xs md:max-w- lg:max-w-none  ">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-neutral">Revolutionizing SMS Payments with Tezos Blockchain</h1>
            <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl dark:text-white text-gray-900 mr-4">Experience the next generation of secure, peer-to-peer SMS payments, powered by the Tezos blockchain. Simple. Fast. Reliable.</p>
                <a 
                href="sms:?&body=Hello, I would like to make a payment." 
                className="text-gray-900 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 border font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
                >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="mr-2"
                >
                    <path d="M17 11h-2V9h2m-4 2h-2V9h2m-4 2H7V9h2m11-7H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
                </svg>                   
                Pay with SMS
                </a>
          </div>
          <div className="lg:hidden mt-10 flex justify-center">
          <img src={phoneMockup} alt="mockup" className="max-w-sm md:max-w-md lg:max-w-lg"/>
        </div>


      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex mockup">
      <img className="mockup " src={phoneMockup} alt="mockup"/>
    </div>
        </div>
      </section>

      <section className=" container mx-auto px-7">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <h2 className="col-span-full mb-8 text-3xl font-bold dark:text-white  text-gray-900 ">How It Works</h2>

            <div>
            <div className="flex items-center mb-8">
                <div className="p-4 rounded-full bg-primary-700">
                <span className="text-2xl font-bold border p-3 border-gray-900  rounded-lg">1</span>
                </div>
                <div className="ml-4">
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 ">Send an SMS</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Start by sending a simple SMS to our designated number, specifying the receiver and the amount.</p>
                </div>
            </div>
            </div>

            <div>
            <div className="flex items-center mb-8">
                <div className="p-4 rounded-full bg-primary-700">
                <span className="text-2xl font-bold  border p-3  border-gray-900 rounded-lg">2</span>
                </div>
                <div className="ml-4">
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 ">Blockchain Security</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Our system processes the transaction using the Tezos blockchain, ensuring security and transparency.</p>
                </div>
            </div>
            </div>

            <div>
            <div className="flex items-center mb-8">
                <div className="p-4 rounded-full bg-primary-700">
                <span className="text-2xl font-bold border p-3  border-gray-900 rounded-lg">3</span>
                </div>
                <div className="ml-4">
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 ">Receiver Gets Notified</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">The receiver will get an SMS notification about the received funds, and they can access it immediately.</p>
                </div>
            </div>
            </div>
        </div>
    </section>

        
    <Footer />

    </>
  );
}
