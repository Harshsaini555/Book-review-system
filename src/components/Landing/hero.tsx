import Spline from '@splinetool/react-spline';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <div className='min-h-screen mt-10 w-full bg-white flex '>
        <div className='w-[40%] h-screen text-black flex flex-col items-center justify-center ml-20'>
            <h2 className='text-6xl font-semibold drop-shadow-lg'>Your Ultimate Book Review Companion</h2>
            <form method="get" action={'/reviewAndread'}>
              <Button variant="outline" className="bg-amber-500 border-none w-60 h-15 mt-12 rounded-2xl cursor-pointer text-xl hover:scale-102">Explore Books</Button>
            </form>
        </div>
        <div className='w-[60%] h-screen '>
            <div className='w-50 h-10 bg-white relative top-148 left-150 z-30'></div>
            <Spline className='relative bottom-8' scene="https://prod.spline.design/UsbnEdqMYm1gPRNV/scene.splinecode" />
        </div>
    </div>
  );
}
