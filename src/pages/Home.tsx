import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Separator } from '@/components/ui/separator'

const Home = () => {
    return (
        <div className="flex flex-col min-h-dvh">
            <Header />
            <main className="flex-1 w-full h-full">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Home</h1>
                    <Separator className='my-5' />
                    <h2 className='font-bold'>Politician</h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/politics/rajabhau-waje">https://samparkbharat.vercel.app/politics/rajabhau-waje</a></span></h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/politics/narendra-modi">https://samparkbharat.vercel.app/politics/narendra-modi</a></span></h2>

                    <Separator className='my-5' />
                    <h2 className='font-bold'>Organization</h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/org/rcpit">https://samparkbharat.vercel.app/org/rcpit</a></span></h2>

                    <Separator className='my-5' />
                    <h2 className='font-bold'>Business</h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/business/jayeshdesale">https://samparkbharat.vercel.app/business/jayeshdesale</a></span></h2>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home
