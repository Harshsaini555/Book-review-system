import {BookOpen,Facebook, Twitter, Instagram} from 'lucide-react';

export default function AboutFooter(){
    return(
    <>
        <footer className="py-12 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <BookOpen size={28} />
                            <span className="text-xl font-bold">BookVibe</span>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Your personal book companion for discovering, reviewing, and sharing your reading journey.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300"><Facebook size={20} /></a>
                            <a href="https://x.com/Harshsaini_05" className="text-white hover:text-gray-300"><Twitter size={20} /></a>
                            <a href="https://www.instagram.com/saini.harsh05__/?next=%2F&hl=en" className="text-white hover:text-gray-300"><Instagram size={20} /></a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#Features" className="text-gray-300 hover:text-white">Features</a></li>
                            <li><a href="#OL" className="text-gray-300 hover:text-white">Testimonials</a></li>
                            <li><a href="#Faq" className="text-gray-300 hover:text-white">FAQ</a></li>
                            <li><a href="#Contact" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold mb-6">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Accessibility</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold mb-6">Subscribe</h3>
                        <p className="text-gray-300 mb-4">Stay updated with our latest features and book recommendations.</p>
                        <form className="flex">
                            <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 w-full rounded-l-lg text-black"
                            />
                            <button className="bg-white text-black px-4 py-2 rounded-r-lg font-bold hover:bg-gray-200">
                            Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            
                <div className="pt-8 mt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} BookVibe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
    )
}