import aboutPerson from '../../../../assets/images/about_us/person.jpg'
import aboutParts from '../../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero mt-32">
            <div className="hero-content w-full items-center  flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={aboutPerson} className="rounded-lg h-[460px] w-[460px] object-cover" />
                    <img src={aboutParts} className='absolute w-[350px] object-cover h-[350px] border-[10px] border-white right-16 rounded-md -bottom-16' />
                </div>

                <div className=' w-1/2'>
                    <h1 className="text-xl text-[#FF3811] font-bold ">About Us</h1>
                    <h1 className='font-bold text-[45px] text-[#151515]'>We are qualified & of experience in this field</h1>
                    <p className="py-6 text-lg font-medium text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='text-[#737373] font-medium text-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                    <button className="btn mt-6 bg-[#FF3811] text-xl text-white hover:bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;