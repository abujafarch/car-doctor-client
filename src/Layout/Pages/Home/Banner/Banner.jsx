import img1 from '../../../../assets/images/banner/1.jpg'
import img2 from '../../../../assets/images/banner/2.jpg'
import img3 from '../../../../assets/images/banner/3.jpg'
import img4 from '../../../../assets/images/banner/4.jpg'
import img5 from '../../../../assets/images/banner/5.jpg'
import img6 from '../../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel mt-10 h-[600px] w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover rounded-2xl" />
                <div className="absolute flex z-30 justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-7">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute rounded-2xl h-full top-0 left-0 text-white bg-gradient-to-r from-[#151515] to-[#15151500]'>
                    <div className='ml-14 w-[550px] relative top-1/2 -translate-y-1/2'>
                        <h1 className='w-[480px] font-bold text-[60px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='mr-10 bg-[#eb6e3d] font-semibold rounded-md text-lg py-4 border-2 border-[#eb6e3d] px-5'>Discover More</button>
                        <button className='mr-10 border-2 border-[#eb6e3d] font-semibold rounded-md text-lg py-4 px-5'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full object-cover rounded-2xl" />
                <div className="absolute flex z-30 justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-7">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute rounded-2xl h-full top-0 left-0 text-white bg-gradient-to-r from-[#151515] to-[#15151500]'>
                    <div className='ml-14 w-[550px] relative top-1/2 -translate-y-1/2'>
                        <h1 className='w-[480px] font-bold text-[60px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='mr-10 bg-[#eb6e3d] font-semibold rounded-md text-lg py-4 border-2 border-[#eb6e3d] px-5'>Discover More</button>
                        <button className='mr-10 border-2 border-[#eb6e3d] font-semibold rounded-md text-lg py-4 px-5'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full object-cover rounded-2xl" />
                <div className="absolute flex z-30 justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-7">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute rounded-2xl h-full top-0 left-0 text-white bg-gradient-to-r from-[#151515] to-[#15151500]'>
                    <div className='ml-14 w-[550px] relative top-1/2 -translate-y-1/2'>
                        <h1 className='w-[480px] font-bold text-[60px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='mr-10 bg-[#eb6e3d] font-semibold rounded-md text-lg py-4 border-2 border-[#eb6e3d] px-5'>Discover More</button>
                        <button className='mr-10 border-2 border-[#eb6e3d] font-semibold rounded-md text-lg py-4 px-5'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full object-cover rounded-2xl" />
                <div className="absolute flex z-30 justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-7">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute rounded-2xl h-full top-0 left-0 text-white bg-gradient-to-r from-[#151515] to-[#15151500]'>
                    <div className='ml-14 w-[550px] relative top-1/2 -translate-y-1/2'>
                        <h1 className='w-[480px] font-bold text-[60px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='mr-10 bg-[#eb6e3d] font-semibold rounded-md text-lg py-4 border-2 border-[#eb6e3d] px-5'>Discover More</button>
                        <button className='mr-10 border-2 border-[#eb6e3d] font-semibold rounded-md text-lg py-4 px-5'>Latest Project</button>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full object-cover rounded-2xl" />
                <div className="absolute flex z-30 justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-7">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute rounded-2xl h-full top-0 left-0 text-white bg-gradient-to-r from-[#151515] to-[#15151500]'>
                    <div className='ml-14 w-[550px] relative top-1/2 -translate-y-1/2'>
                        <h1 className='w-[480px] font-bold text-[60px]'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='mr-10 bg-[#eb6e3d] font-semibold rounded-md text-lg py-4 border-2 border-[#eb6e3d] px-5'>Discover More</button>
                        <button className='mr-10 border-2 border-[#eb6e3d] font-semibold rounded-md text-lg py-4 px-5'>Latest Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;