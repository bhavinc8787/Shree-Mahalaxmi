// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Image1 from "../../assets/menu/burger-11.jpg";
// const Image1 = "https://images.pexels.com/photos/8755221/pexels-photo-8755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// import Image2 from "../../assets/menu/burger-12.jpg";
// import Image3 from "../../assets/menu/burger-13.jpg";
// import Image4 from "../../assets/menu/burger-14.jpg";
// import Image5 from "../../assets/menu/burger-15.jpg";
// import Image6 from "../../assets/menu/burger-16.jpg";
// import Image7 from "../../assets/menu/burger-17.jpg";
// import Image8 from "../../assets/menu/burger-18.jpg";
// import Cards from "../../components/Layouts/Cards";
// import { Link } from "react-router-dom";

// // Indian Catering Service Menu
// const mockData = [
//   {
//     id: "0001",
//     image: Image1,
//     title: "Paneer Tikka",
//     paragraph: "Marinated paneer cubes grilled with aromatic Indian spices",
//     rating: 5,
//   },
//   {
//     id: "0002",
//     image: Image2,
//     title: "Masala Dosa",
//     paragraph: "Crispy rice crepe filled with spiced potato stuffing, served with chutney & sambar",
//     rating: 4.5,
//   },
//   {
//     id: "0003",
//     image: Image3,
//     title: "Butter Chicken",
//     paragraph: "Tender chicken cooked in a rich, creamy tomato-based gravy",
//     rating: 4,
//   },
//   {
//     id: "0004",
//     image: Image4,
//     title: "Vegetable Biryani",
//     paragraph: "Fragrant basmati rice cooked with mixed vegetables and exotic spices",
//     rating: 3.5,
//   },
//   {
//     id: "0005",
//     image: Image5,
//     title: "Chole Bhature",
//     paragraph: "Spiced chickpea curry served with fluffy deep-fried bread",
//     rating: 3.0,
//   },
//   {
//     id: "0006",
//     image: Image6,
//     title: "Dhokla",
//     paragraph: "Soft and spongy steamed fermented rice & lentil cakes",
//     rating: 3,
//   },
//   {
//     id: "0007",
//     image: Image7,
//     title: "Rajma Chawal",
//     paragraph: "Red kidney beans cooked in a flavorful tomato gravy, served with rice",
//     rating: 2.5,
//   },
//   {
//     id: "0008",
//     image: Image8,
//     title: "Gulab Jamun",
//     paragraph: "Soft and juicy deep-fried milk solids soaked in sugar syrup",
//     rating: 2.0,
//   },
// ];

// // Rating Logical Data
// const renderRatingIcons = (rating) => {
//   const stars = [];

//   for (let i = 0; i < 5; i++) {
//     if (rating > 0.5) {
//       stars.push(<i key={i} className="bi bi-star-fill"></i>);
//       rating--;
//     } else if (rating > 0 && rating < 1) {
//       stars.push(<i key={"half"} className="bi bi-star-half"></i>);
//       rating--;
//     } else {
//       stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
//     }
//   }
//   return stars;
// };

// function Section3() {
//   return (
//     <section className="menu_section">
//       <Container>
//         <Row>
//           <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
//             <h2>OUR SPECIAL CATERING MENU</h2>
//             <p className="para">
//               Enjoy a variety of authentic Indian dishes, freshly prepared with traditional flavors and spices.
//             </p>
//           </Col>
//         </Row>
//         <Row>
//           {mockData.map((cardData, index) => (
//             <Cards
//               key={index}
//               image={cardData.image}
//               rating={cardData.rating}
//               title={cardData.title}
//               paragraph={cardData.paragraph}
//               renderRatingIcons={renderRatingIcons}
//             />
//           ))}
//         </Row>

//         <Row className="pt-5">
//           <Col sm={6} lg={5}>
//             <div className="ads_box ads_img1 mb-5 mb-md-0">
//               <h4 className="mb-0">ORDER NOW</h4>
//               <h5>AUTHENTIC INDIAN FLAVORS</h5>
//               <Link to="/" className="btn btn_red px-4 rounded-0">
//                 Learn More
//               </Link>
//             </div>
//           </Col>
//           <Col sm={6} lg={7}>
//             <div className="ads_box ads_img2">
//               <h4 className="mb-0">CATERING FOR ALL EVENTS</h4>
//               <h5>BOOK US FOR WEDDINGS & PARTIES</h5>
//               <Link to="/" className="btn btn_red px-4 rounded-0">
//                 Learn More
//               </Link>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Section3;



import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Image1 from "../../assets/menu/image1.jpg";
// import Image2 from "../../assets/menu/image2.jpg";
// import Image3 from "../../assets/menu/image3.jpg";
// import Image4 from "../../assets/menu/image4.jpg";
// import Image5 from "../../assets/menu/image5.jpg";
// import Image6 from "../../assets/menu/image6.jpg";
// import Image7 from "../../assets/menu/image7.jpg";
 import Image9 from "../../assets/menu/09.png";
 import Image11 from "../../assets/menu/11.png";
 import Image12 from "../../assets/menu/08.png";
 import Image8 from "../../assets/menu/088.png";
 import Image7 from "../../assets/menu/07.png";
 import Image13 from "../../assets/menu/13.png";
 import Image14 from "../../assets/menu/14.png";
 import Image15 from "../../assets/menu/15.png";
 import Image16 from "../../assets/menu/16.png";
import Cards from "../../components/Layouts/Cards";
const Image1 = "https://images.pexels.com/photos/8755221/pexels-photo-8755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const Image2 = "https://images.pexels.com/photos/30570738/pexels-photo-30570738/free-photo-of-assorted-indian-street-food-in-mumbai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const Image3 = "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const Image4 = "https://images.pexels.com/photos/724667/pexels-photo-724667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const Image5 = "https://images.pexels.com/photos/8887011/pexels-photo-8887011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const Image6 = "https://images.pexels.com/photos/7182054/pexels-photo-7182054.jpeg"
// const Image7 = "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg"
// const Image8 = "https://images.pexels.com/photos/8755221/pexels-photo-8755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// const Image90 = "https://images.pexels.com/photos/8755221/pexels-photo-8755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
const Image10 = "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg"
// const Image11 = "https://images.pexels.com/photos/28674713/pexels-photo-28674713/free-photo-of-delicious-indian-jeera-rice-in-ladle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// const Image12 = "https://images.pexels.com/photos/8755221/pexels-photo-8755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// const Image13 = "https://images.pexels.com/photos/8755221/pexels-photo-8755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// const Image14 = "https://images.pexels.com/photos/8755221/pexels-photo-8755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// const Image15 = "https://images.pexels.com/photos/8755221/pexels-photo-8755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// const Image16 = "https://images.pexels.com/photos/8755221/pexels-photo-8755221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

const menuData = [
  {
    id: "001",
    image: Image1,
    title: "Welcome Drinks",
    paragraph: "Kokam Sharbat, Lemon Sharbat, Jaljeera, Chilly Guava, Green Apple, Blue Lagoon, Mint Lemon, Mojito, Kiwi Cooler, Strawberry, Pineapple",
    rating: 5,
  },
  {
    id: "002",
    image: Image2,
    title: "Regular Starters",
    paragraph: "Kothambirwadi, Aloo Wadi, Surliwadi, Corn Cutlet, Gol Bhaji, Khekda Bhaji, Corn Tikki, Mini Wada, Harabhara Kebab, Cheese Corn Ball, Moong Kachori, Moong Bhaji, Veg Cutlet",
    rating: 4.5,
  },
  {
    id: "003",
    image: Image3,
    title: "Special Starters",
    paragraph: "Paneer Tikka, Paneer Malai Tikka, Paneer Adraki Tikka, Veg Cigar Roll, Dragon Roll, Veg Kurkure, Veg Bullet, Paneer Chilly Dry, Spring Roll, Soya Chaap",
    rating: 4,
  },
  {
    id: "004",
    image: Image4,
    title: "Soups",
    paragraph: "Manchow Soup, Tomato Soup, Hot & Sour Soup, Tomato Coriander Shorba, Sweet Corn Soup, Minestrone, Lemon Coriander Soup, Cream of Tomato",
    rating: 3.5,
  },
  {
    id: "005",
    image: Image5,
    title: "Regular Sweet",
    paragraph: "Gulab Jamun, Diljani, Pineapple Sheera, Gajar Halwa, Jilebi, Sevaiyan Kheer, Nariyal Barfi, Doodhi Halwa, Moong Dal Halwa, Traffic Jaam, Shrikhand,Ladoo",
    rating: 3.0,
  },
  {
    id: "006",
    image: Image6,
    title: "Special Sweet",
    paragraph: "Angoor Rabdi, Sitafal Rabdi, Shahi Tukda, Fruit Custard, Rasmalai, Pista Barfi, Aamrakhand, Dry-Fruit Rabdi, Gulkand Rabdi, Fruit Shrikhand, Kaju Katli, Gulkand Barfi, Puran Poli, Malai Sandwich",
    rating: 3,
  },
  {
    id: "007",
    image: Image7,
    title: "Veg Main Course Part 1",
    paragraph: "Aloo Mushroom Masala, Methi Mutter Malai, Mutter Mushroom Masala, Rajma Masala,Veg Handi, Veg Adraki, Veg Kadhai, Veg Jaipuri, Veg Hariyali, Aloo Mutter, Aloo Methi, Veg Bhuna, Veg Kolhapuri, Aloo Chatpata, Aloo Jeera, Aloo Palak, Veg Kofta Curry",
    rating: 2.5,
  },
  {
    id: "008",
    image: Image8,
    title: "Veg Main Course Part 2",
    paragraph: " Chana Masala, Bhendi Fry, Tawa Veg, Matki Usal, Paneer Lasuni, Palak Paneer, Bharli Wangi, Mutter Usal, Paneer Corn, Mutter Paneer, Paneer Kadhai, Paneer Angaara, Paneer Dopyaza, Paneer Pasanda, Paneer Lababdar, Paneer Tikka Masala",
    rating: 2.5,
  },
  {
    id: "009",
    image: Image9,
    title: "Rice",
    paragraph: "Jeera Rice, Plain Rice, Kashmiri Pulao, Veg Pulao, Zafran Pulao, Veg Biryani, Corn Pulao, Peas Pulao, Jeera Peas Pulao, Navratan Pulao, Moong Dal Khichdi, Curd Rice, Paneer Pulao",
    rating: 2.0,
  },
  {
    id: "010",
    image: Image10,
    title: "Roti",
    paragraph: "Puri, Phulke, Tandoor Roti, Rumali Roti, Masala Puri, Palak Puri, Butter Naan, Laccha Paratha, Tawa Paratha, Missi Roti",
    rating: 2.0,
  },
  {
    id: "011",
    image: Image11,
    title: "Curry Dal",
    paragraph: "Kadi Pakoda, Gujarati Kadi, Panchmel Dal, Rasam, Tomato Saar, Dal Tadka, Dal Fry, Katachi Aamti, Dal Makhani, Varun",
    rating: 4.0,
  },
  {
    id: "012",
    image: Image12,
    title: "Raita",
    paragraph: "Pineapple Raita, Boondi Raita, Mix Veg Raita",
    rating: 3.5,
  },
  {
    id: "013",
    image: Image13,
    title: "Salad",
    paragraph: "Green Salad, Sprout Salad, Aloo Chana",
    rating: 4.5,
  },
  {
    id: "014",
    image: Image14,
    title: "Chaat",
    paragraph: "Dahi Bhalla, Panipuri, Bhel, S.P.D.P., Aloo Papdi Chaat, Papdi Chaat, Ragda Pattice, Pav Bhaji, Misal Pav, Chole Bhature",
    rating: 4.5,
  },
  {
    id: "015",
    image: Image15,
    title: "Chinese",
    paragraph: "Veg 65, Veg Manchurian, Chilly Garlic Rice, Fried Rice, Schezwan Rice, Paneer 65, Hakka Noodles, Ginger Garlic Noodles, Veg Singapore Noodles",
    rating: 4,
  },
  {
    id: "016",
    image: Image16,
    title: "Ice-Cream",
    paragraph: "Strawberry, Vanilla, Kesar Pista, Choco Chips, American Dryfruit, Mango, Rajbhog, Butterscotch, Kulfi",
    rating: 5,
  },
];



const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};
function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR SPECIAL CATERING MENU</h2>
            <p className="para">
              Enjoy a variety of authentic Indian dishes, freshly prepared with traditional flavors and spices.
            </p>
          </Col>
        </Row>
        <Row>
          {menuData.map((menuItem, index) => (
            <Cards
              key={index}
              image={menuItem.image}
              rating={menuItem.rating}
              title={menuItem.title}
              paragraph={menuItem.paragraph}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
