import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Home = () => {
    return (
        <div className="flex flex-col min-h-dvh">
            <Header />
            <main className="flex-1 w-full h-full">
                <div className="text-center"> {/* Center content horizontally */}
                    <h1 className="text-3xl font-bold mb-4">Home</h1> {/* Adjust font size and margin as needed */}
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/rajabhau-waje">https://samparkbharat.vercel.app/rajabhau-waje</a></span></h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/narendra-modi">https://samparkbharat.vercel.app/narendra-modi</a></span></h2>
                    <h2>Go to: <span className="text-blue-600 underline"><a href="/vijay-chaudhari">https://samparkbharat.vercel.app/vijay-chaudhari</a></span></h2>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home