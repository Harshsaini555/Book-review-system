import { Button } from "../ui/button"
import  BacktoHome  from "../About/back";

export default function ReviewNav(){
    return(
        <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <BacktoHome text={"Explore"}/>
                
                <div className="hidden md:flex items-center space-x-6">
                    <a href="/about" className="text-zinc-400 hover:text-zinc-500 hover:underline">About</a>
                    <a href="/privacypolicy" className="text-zinc-400 hover:text-zinc-500 hover:underline ">Privacy Policy</a>
                    <form method='get' action={"/reviewAndread/premium"}>
                        <Button className='text-white bg-yellow-400 cursor-pointer w-30'>Premium</Button>
                    </form>
                </div>
                
                <button className="md:hidden text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}