import Slider from "react-slick";


const images = ['https://www.freecodecamp.org/news/content/images/2022/12/main-image.png', 'https://www.freecodecamp.org/news/content/images/2022/12/main-image.png', 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=', 'https://www.herzing.edu/sites/default/files/2020-09/it_computer_programming.jpg']; // Tus URLs de las imágenes aquí

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear'
    };
    
    return (
        <div className="bg-[#1b1e24] p-10">
            <h1 className="text-white text-3xl mb-2">Join a community of millions</h1>
            <p className="text-white text-lg mb-4">
                You’re not alone. Two million developers from all over the world visit the React docs every month. 
                React is something that people and teams can agree on.
            </p>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} className="w-full object-cover rounded-lg transform transition-transform duration-1000 hover:rotate-3" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carrousel;
