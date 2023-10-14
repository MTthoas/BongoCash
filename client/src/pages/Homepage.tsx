import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Homepage() {
  return (
    <>
      <Header />
      <section className=" dark:bg-gray-900 container mx-auto px-7 pt-12 h-full mt-12 mb-24">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Revolutionizing SMS Payments with Tezos Blockchain</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Experience the next generation of secure, peer-to-peer SMS payments, powered by the Tezos blockchain. Simple. Fast. Reliable.</p>

          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/* Vous pouvez remplacer cette image par une maquette montrant une transaction SMS basée sur la blockchain Tezos */}
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-900 container mx-auto px-7">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <h2 className="col-span-12 mb-8 text-3xl font-bold dark:text-white">How It Works</h2>

          <div className="lg:col-span-4">
            <div className="flex items-center mb-8">
              <div className="pr-4 rounded-full bg-primary-700">
                <span className="text-2xl font-bold border p-3 border-gray-900  rounded-lg">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold dark:text-white">Send an SMS</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Start by sending a simple SMS to our designated number, specifying the receiver and the amount.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="flex items-center mb-8">
              <div className="p-4 rounded-full bg-primary-700">
                <span className="text-2xl font-bold  border p-3  border-gray-900 rounded-lg">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold dark:text-white">Blockchain Security</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Our system processes the transaction using the Tezos blockchain, ensuring security and transparency.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="flex items-center mb-8">
              <div className="pl-4 rounded-full bg-primary-700">
                <span className="text-2xl font-bold border p-3  border-gray-900 rounded-lg">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold dark:text-white">Receiver Gets Notified</h3>
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
