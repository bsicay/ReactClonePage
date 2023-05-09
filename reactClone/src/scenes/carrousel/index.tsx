import Slider from "react-slick";
import Logo from '@/assets/react.svg';
const images = ['https://www.freecodecamp.org/news/content/images/2022/12/main-image.png', 'https://www.freecodecamp.org/news/content/images/2022/12/main-image.png', 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=', 'https://www.herzing.edu/sites/default/files/2020-09/it_computer_programming.jpg', 'https://www.travelperk.com/wp-content/uploads/alexandre-pellaes-6vAjp0pscX0-unsplash-1-1-720x480.jpg',
'https://ibima.org/wp-content/uploads/2017/07/28th-photo46.jpg', 'https://studentreasures.com/wp-content/uploads/2022/08/man-speaking-at-a-business-conference-picture-id499517325.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3dr2lYIsnofKeEbLC_VjdLBk7d8adSxk_4g&usqp=CAU', 'https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/27033.jpg?mtime=1568847401'];


const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        beforeChange: (_current: any, next: any) => {
            setTimeout(() => {
                if (_current < next) {
                    images.push(images.shift() as string);
                } else {
                    images.unshift(images.pop() as string);
                }
            }, 0);
        }
    };
    
    return (
        <div className="bg-[#1b1e24] p-10">
            <h1 className="text-5xl font-bold mb-3 text-center w-1/4 md:w-1/3 mx-auto py-6">
            Join a community 
            of millions
            </h1>
            <p className="text-xl mb-6 text-center w-3/4 md:w-1/2 mx-auto mb-14">
                You’re not alone. Two million developers from all over the world visit the React docs every month. 
                React is something that people and teams can agree on.
            </p>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="h-64 overflow-hidden"> 
                         <img src={image} className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:rotate-3" />
                    </div>
                ))}
            </Slider>
            <h2 className="text-xl mb-6 text-center w-3/4 md:w-1/2 mx-auto py-16">
            This is why React is more than a library, an architecture, or even an ecosystem.
            React is a community. It’s a place where you can ask for help, find opportunities,
            and meet new friends. You will meet both developers and designers, beginners
            and experts, researchers and artists, teachers and students. Our backgrounds
            may be very different, but React lets us all create user interfaces together.
            </h2>
            <main className="bg-[#1b1e24] min-h-[90%] flex flex-col items-center justify-center py-6 text-white">
      <img src={Logo} alt="React Logo" className="w-32 mb-4" />
      <h1 className="text-5xl font-bold mb-3 text-center w-1/4 md:w-1/2 mx-auto py-6">
      Welcome to the React community
      </h1>
      <div className="flex gap-4">
        <button className="bg-[#087EA4] hover:bg-[#0d6d8c] px-6 py-2 text-lg rounded-3xl font-bold">Get Started</button>
      </div>
    </main>
        </div>
    );
}

export default Carrousel;
