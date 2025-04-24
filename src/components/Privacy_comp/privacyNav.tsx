import { Button } from "../ui/button"
import  BacktoHome  from "../About/back";


export default function PrivacyNav(){
    return(
        <>
            <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <BacktoHome text={"Privacy Policy"}/>
                
                <div className="hidden md:flex items-center space-x-6">
                    <form method='get' action={"/ContactUs"}>
                        <Button className='text-white bg-gray-700 cursor-pointer'>Contact Us</Button>
                    </form>
                </div>
                
                <button className="md:hidden text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
        </>
    )
}