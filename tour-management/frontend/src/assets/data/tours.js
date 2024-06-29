import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

import tourImg0101 from "../images/tour-img01-01.jpg";
import tourImg0102 from "../images/tour-img01-02.jpg";
import tourImg0201 from "../images/tour-img02-01.jpg";
import tourImg0202 from "../images/tour-img02-02.jpg";
import tourImg0301 from "../images/tour-img03-01.jpg";
import tourImg0302 from "../images/tour-img03-02.jpg";
import tourImg0401 from "../images/tour-img04-01.jpg";
import tourImg0402 from "../images/tour-img04-02.jpg";
import tourImg0501 from "../images/tour-img05-01.jpg";
import tourImg0502 from "../images/tour-img05-02.jpg";
import tourImg0601 from "../images/tour-img06-01.jpg";
import tourImg0602 from "../images/tour-img06-02.jpg";
import tourImg0701 from "../images/tour-img07-01.jpg";
import tourImg0702 from "../images/tour-img07-02.jpg";
import tourImg0801 from "../images/tour-img08-01.jpg";
import tourImg0802 from "../images/tour-img08-02.jpg";


const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "Immerse in timeless elegance with a stroll over Westminster Bridge. Iconic views of the Thames, Big Ben, and historic charm await, promising a quintessential London experience.",
    reviews: [
      {
        name: "Jhon Doe",
        rating: 4.6,
        review: "A majestic landmark offering panoramic views of the iconic Big Ben and the Thames. The bustling atmosphere, the sound of double-decker buses, and the proximity to historical sites make it a must-visit for anyone exploring London's charm."
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
    img1: tourImg0101,
    img2: tourImg0102,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: " Surrender to the allure of Bali's paradisiacal landscapes. From lush rice terraces to pristine beaches, this island invites you to embrace tranquility amidst cultural richness.",
    reviews: [
      {
        name: "Emma Williams",
        rating: 4.3,
        review: "A tropical paradise with lush landscapes, vibrant culture, and serene beaches. Bali captivates with its spiritual ambiance, from ancient temples to traditional dance performances. Perfect for those seeking a blend of relaxation and adventure."
      },
    ],
    avgRating: 4.2,
    photo: tourImg02,
    featured: true,
    img1: tourImg0201,
    img2: tourImg0202,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Discover Thailand's hidden gem in the Snowy Mountains. Serene landscapes, vibrant hill tribes, and a blissful escape from the bustling cities await those seeking natural beauty.",
    reviews: [
      {
        name: "Liam Johnson",
        rating: 4.6,
        review: "A hidden gem in Thailand, the Snowy Mountains offer a tranquil retreat. Verdant hills, cascading waterfalls, and a peaceful atmosphere create a haven for nature lovers. Ideal for those seeking an off-the-beaten-path experience.",
      },
    ],
    avgRating: 4.0,
    photo: tourImg03,
    featured: true,
    img1: tourImg0301,
    img2: tourImg0302,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Greet the dawn in Thailand with a breathtaking sunrise. Painted skies over serene landscapes create a magical atmosphere, offering a peaceful start to your day.",
    reviews: [
      {
        name: "Aiden Davis",
        rating: 4.6,
        review: "The enchanting beauty of a Thai sunrise is unparalleled. Golden hues reflect on serene waters, creating a magical start to the day. Whether by the beach or amidst nature, it's an experience that lingers in the heart."
      },
    ],
    avgRating: 4.8,
    photo: tourImg04,
    featured: true,
    img1: tourImg0401,
    img2: tourImg0402,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Embark on an enchanting journey to Nusa Penida, Bali's untouched gem. Turquoise waters, dramatic cliffs, and vibrant marine life await, promising a truly idyllic escape.",
    reviews: [
      {
        name: "Chloe Martinez",
        rating: 4.0,
        review:"Escape to the untouched beauty of Nusa Penida, where rugged cliffs meet crystal-clear waters. From stunning viewpoints to hidden beaches, every corner is a photographer's dream. A haven for those seeking serenity away from the crowds."
      },
    ],
    avgRating: 4.2,
    photo: tourImg05,
    featured: false,
    img1: tourImg0501,
    img2: tourImg0502,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Step into a fairytale during Japan's cherry blossom season. Nature transforms, painting landscapes in hues of pink and white, creating an ethereal and unforgettable experience.",
    reviews: [
      {
        name: "Jackson Taylor",
        rating: 4.5,
        review:"Japan's cherry blossom season is a fleeting spectacle of nature's artistry. Delicate petals blanket parks and temples, creating a dreamlike ambiance. An absolute must for those yearning for a poetic and ephemeral experience."
      },
    ],
    avgRating: 4.1,
    photo: tourImg06,
    featured: false,
    img1: tourImg0601,
    img2: tourImg0602,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Surrender to the allure of Holmen in Lofoten, Norway. Majestic fjords, rugged mountains, and charming fishing villages offer an immersive Arctic adventure in a pristine natural playground.",
    reviews: [
      {
        name: "Isabella Wright",
        rating: 4.3,
        review:"Holmen in Lofoten, Norway, offers a breathtaking Arctic adventure. Majestic fjords, quaint fishing villages, and the dancing Northern Lights create a surreal landscape. A haven for outdoor enthusiasts and those seeking Arctic wonders."
      },
    ],
    avgRating: 4.1,
    photo: tourImg07,
    featured: false,
    img1: tourImg0701,
    img2: tourImg0702,
  },
  {
    id: "08",
    title: "Male, Maldives",
    city: "Maldives",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: " Indulge in the allure of Male, Maldives. Endless turquoise waters, overwater bungalows, and vibrant coral reefs invite you to a tropical paradise for unparalleled relaxation and aquatic wonders.",
    reviews: [
      {
        name: "Caleb Smith",
        rating: 4.0,
        review:"A tropical haven of overwater bungalows, crystal-clear lagoons, and vibrant coral reefs. Male in the Maldives is the epitome of luxury and relaxation. Perfect for couples, honeymooners, and anyone desiring a slice of paradise."
      },
    ],
    avgRating: 4.3,
    photo: tourImg08,
    featured: false,
    img1: tourImg0801,
    img2: tourImg0802,
  },
];

export default tours;
