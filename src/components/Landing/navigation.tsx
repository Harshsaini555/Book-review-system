import {BookOpen} from 'lucide-react';
import Login from './Login.tsx';
import { Button } from "../ui/button"
import { useAuth } from "../../context/AuthContext.tsx";
import {   toast } from "sonner"

export default function Navigation(){
    const { user, logout } = useAuth();

    return(
    <>
        <nav  className="fixed top-0 z-50 w-full bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2 ml-6">
                    <BookOpen size={32} className="text-black" />
                    <span className="text-2xl font-bold text-black">BookVibe</span>
                </div>
                
                <div className="hidden md:flex items-center space-x-6">
                    <a href="/about" className="text-zinc-400 hover:text-zinc-500 hover:underline">About</a>
                    <a href="/privacypolicy" className="text-zinc-400 hover:text-zinc-500 hover:underline ">Privacy Policy</a>
                    <div>
                        {user ? (
                        <Button className="text-white bg-red-400 cursor-pointer"
                            onClick={async () => {
                                await logout();
                                toast.success('Logged Out Successfully');
                            }} >
                            
                            Log Out
                        </Button>
                        ) : (
                        <div className='flex'>
                            <Login />
                            <form method='get' action={"/Signup"}>
                                <Button className='text-white bg-gray-700 cursor-pointer'>Sign up</Button>
                            </form>
                        </div>
                        )}
                    </div>
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