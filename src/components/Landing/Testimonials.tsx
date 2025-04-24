
import TestimonialCard from './card';



export default function Testimonials() {

    const testimonials = [
        {
          name: "Tushar T.",
          role: "Book Club Organizer",
          quote: "BookVibe has transformed our book club! The group reading features help us stay organized, and the recommendation engine has introduced us to books we never ",
          img: '../../../assets/tushar.png'
        },
        {
          name: "Abhay Rana",
          role: "Avid Reader",
          quote: "I'm amazed at how accurately BookVibe predicts what I'll enjoy. It's like having a librarian who knows my taste perfectly. The reading stats also help me track my reading goals.",
          img: '../../../assets/abhay.png'
        },
        {
          name: "Yash Dagar",
          role: "Literature Teacher",
          quote: "I recommend BookVibe to all my students. It makes reading more engaging for them, and I love how it helps discover diverse books from authors around the world.",
          img: '../../../assets/yash.png'
        }
    ];
    
    return(
        <div className='w-screen bg-white'>
            <h2 className='font-semibold text-3xl text-black p-4'>What <span className='text-gray-500'>Authers</span> and <span className='text-gray-500 '>Book Clubs</span> saying About <span className='text-4xl text-amber-500'>BookVibe</span></h2>
            <p className='text-black mb-8'>Hear from clubs and authors who have used BookVibe to discover<br></br> new books and connect with readers worldwide.</p>
            <div className='flex justify-evenly w-screen'>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} name={testimonial.name} role={testimonial.role} quote={testimonial.quote} image={testimonial.img} />
                ))}
            </div>
        </div>
    )
}