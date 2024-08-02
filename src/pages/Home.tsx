import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollToTopButton from '@/components/common/ScrollToTop'
import { Separator } from '@/components/ui/separator'

const Home = () => {
    return (
        <div className="flex flex-col min-h-dvh">
            <Header />
            <main className="flex-1 w-full h-full my-10">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Home</h1>
                    <Separator className='my-5' />
                    <h2 className='font-bold'>Politician</h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/politics/rajabhau-waje">/politics/rajabhau-waje</a></span></h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/politics/narendra-modi">/politics/narendra-modi</a></span></h2>

                    <Separator className='my-5' />
                    <h2 className='font-bold'>Organization</h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/org/rcpit">/org/rcpit</a></span></h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/org/milkeshjain">/org/milkeshjain</a></span></h2>

                    <Separator className='my-5' />
                    <h2 className='font-bold'>Business</h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/business/jayeshdesale">/business/jayeshdesale</a></span></h2>
                </div>
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default Home
