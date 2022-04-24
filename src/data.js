import uuid from "react-uuid";

const featuredPlaces = [
  {
    name: "AmerFort",
    price: 2000,
    numOfReviews: 5,
    _id: uuid(),
    ratings: 4,
    images: [
      {
        url: "/Featured/amerfort1.jpg",
      },
      {
        url: "/Featured/amerfort2.jpg",
      },
      {
        url: "/Featured/amerfort3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome for visiting in spring",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Delhi",
    price: 3000,
    numOfReviews: 10,
    _id: uuid(),
    ratings: 2,
    images: [
      {
        url: "/Featured/delhi1.jpg",
      },
      {
        url: "/Featured/delhi2.jpg",
      },
      {
        url: "/Featured/delhi3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 4,
        comment: "This place gives chilled vibes",
      },
      {
        name: "Satyajit Paul",
        rating: 2,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Goa",
    price: 20000,
    numOfReviews: 5,
    _id: uuid(),
    ratings: 3,
    images: [
      {
        url: "/Featured/goa1.jpg",
      },
      {
        url: "/Featured/goa2.jpg",
      },
      {
        url: "/Featured/goa3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Golden Temple",
    price: 5000,
    numOfReviews: 20,
    _id: uuid(),
    ratings: 4,
    images: [
      {
        url: "/Featured/Golden1.jpg",
      },
      {
        url: "/Featured/Golden2.jpg",
      },
      {
        url: "/Featured/Golden3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Hyderabad",
    price: 20000,
    numOfReviews: 10,
    _id: uuid(),
    ratings: 4,
    images: [
      {
        url: "/Featured/hyderabad1.jpg",
      },
      {
        url: "/Featured/hyderabad2.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "London",
    price: 50000,
    numOfReviews: 100,
    _id: uuid(),
    ratings: 5,
    images: [
      {
        url: "/Featured/London1.jpg",
      },
      {
        url: "/Featured/London2.jpg",
      },
      {
        url: "/Featured/London3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Mecca Madina",
    price: 8000,
    numOfReviews: 200,
    _id: uuid(),
    ratings: 4,
    images: [
      {
        url: "/Featured/madina1.jpg",
      },
      {
        url: "/Featured/madina2.jpg",
      },
      {
        url: "/Featured/madina3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Taj Mahal",
    price: 2000,
    numOfReviews: 1000,
    _id: uuid(),
    ratings: 5,
    images: [
      {
        url: "/Featured/taj1.jpg",
      },
      {
        url: "/Featured/taj2.jpg",
      },
      {
        url: "/Featured/taj3.jpg",
      },
      {
        url: "/Featured/taj4.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
];

const exclusive = [
  {
    name: "Dubai",
    price: 20000,
    numOfReviews: 50,
    _id: uuid(),
    ratings: 5,
    images: [
      {
        url: "/Exclusive/dubai1.jpg",
      },
      {
        url: "/Exclusive/dubai2.jpg",
      },
      {
        url: "/Exclusive/dubai3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "India",
    price: 20000,
    numOfReviews: 1000,
    _id: uuid(),
    ratings: 4,
    images: [
      {
        url: "/Exclusive/india1.jpg",
      },
      {
        url: "/Exclusive/india2.jpg",
      },
      {
        url: "/Exclusive/india3.jpg",
      },
    ],
  },
  {
    name: "Jodhpur",
    price: 9000,
    numOfReviews: 10,
    _id: uuid(),
    ratings: 3,
    images: [
      {
        url: "/Exclusive/jodhpur1.jpg",
      },
      {
        url: "/Exclusive/jodhpur2.jpg",
      },
      {
        url: "/Exclusive/jodhpur3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "London",
    price: 10000,
    numOfReviews: 100,
    _id: uuid(),
    ratings: 4,
    images: [
      {
        url: "/Exclusive/london1.jpg",
      },
      {
        url: "/Exclusive/london2.jpg",
      },
      {
        url: "/Exclusive/london3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Mumbai",
    price: 20000,
    numOfReviews: 1000,
    _id: uuid(),
    ratings: 5,
    images: [
      {
        url: "/Exclusive/mumbai1.jpg",
      },
      {
        url: "/Exclusive/mumbai2.jpg",
      },
      {
        url: "/Exclusive/mumbai3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "New York",
    price: 20000,
    numOfReviews: 10,
    _id: uuid(),
    ratings: 2,
    images: [
      {
        url: "/Exclusive/newyork1.jpg",
      },
      {
        url: "/Exclusive/newyork2.jpg",
      },
      {
        url: "/Exclusive/newyork3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Paris",
    price: 20000,
    numOfReviews: 900,
    _id: uuid(),
    ratings: 4,
    images: [
      {
        url: "/Exclusive/paris1.jpg",
      },
      {
        url: "/Exclusive/paris2.jpg",
      },
      {
        url: "/Exclusive/paris3.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "United States",
    price: 20880,
    numOfReviews: 899,
    _id: uuid(),
    ratings: 4,
    images: [
      {
        url: "/Exclusive/usa1.jpg",
      },
      {
        url: "/Exclusive/usa2.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
];

const travelStories = [
  {
    name: "Aniket Kumar",
    price: 20000,
    numOfReviews: 10,
    _id: uuid(),
    ratings: 4,
    message: "This Place is Awesome",
    images: [
      {
        url: "/Travel/travel1.jpg",
      },
      {
        url: "/Travel/travel2.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Satyajit Paul",
    price: 20000,
    numOfReviews: 10,
    _id: uuid(),
    ratings: 3,
    message: "This Place is Awesome",
    images: [
      {
        url: "/Travel/travel3.jpg",
      },
      {
        url: "/Travel/travel4.jpg",
      },
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Vedang Chauhan",
    price: 20000,
    numOfReviews: 100,
    _id: uuid(),
    ratings: 5,
    message: "This Place is Awesome",
    images: [
      {
        url : "/Travel/travel5.jpg"
        },
        {
          url : "/Travel/travel6.jpg"
        }
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Manish Jiswal",
    price: 20000,
    numOfReviews: 10,
    _id: uuid(),
    ratings: 4,
    message: "This Place is Awesome",
    images: [
      {
        url : "/Travel/travel7.jpg"
        },
        {
          url : "/Travel/travel8.jpg"
        }
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Abhishek Prusty",
    price: 20000,
    numOfReviews: 10,
    _id: uuid(),
    ratings: 4,
    message: "This Place is Awesome",
    images: [
      {
        url : "/Travel/travel9.jpg"
        },
        {
          url : "/Travel/travel10.jpg"
        }
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
  {
    name: "Sayon Chakarborty",
    price: 20000,
    numOfReviews: 10,
    _id: uuid(),
    ratings: 4,
    message: "This Place is Awesome",
    images: [
      {
        url : "/Travel/travel11.jpg"
        },
        {
          url : "/Travel/travel12.jpg"
        },
        {
          url : "/Travel/travel13.jpg"
        }
    ],
    reviews: [
      {
        name: "Aniket Kumar",
        rating: 4,
        comment: "This place is awesome",
      },
      {
        name: "Deep Samanta",
        rating: 2,
        comment: "This place is below Average",
      },
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "This place is outstanding",
      },
      {
        name: "Dinkar Kumar",
        rating: 3,
        comment: "This place is below average",
      },
      {
        name: "Navin Kumar",
        rating: 5,
        comment: "This place gives chilled vibes",
      },
    ],
  },
];

const recommended = [
  {
    _id: uuid(),
    images: [
      {
        url: "/image-s1.png",
      },
      {
        url: "/image-s2.png",
      },
      {
        url: "/image-s3.png",
      },
      {
        url: "/image-s4.png",
      },
    ],
    name: "Private villa in San Fransisco",
    subtitle: "Delux Queen room with Street View",
    description: "1 Bedroom / 1 Bathroom / Wifi / 1 Kitchen",
    guest: 2,
    price: "100",
    rating: 4,
    numOfReviews: 200,
    location: "San Fransisco California United States",
  },
  {
    _id: uuid(),
    images: [
      {
        url: "/image-s2.png",
      },
      {
        url: "/image-s3.png",
      },
      {
        url: "/image-s4.png",
      },
    ],
    name: "Private villa in London",
    subtitle: "Delux Queen room with Street View",
    description: "1 Bedroom / 1 Bathroom / Wifi / 1 Kitchen",
    guest: 2,
    price: "100",
    rating: 4,
    numOfReviews: 200,
    location: "San Fransisco California United States",
  },
  {
    _id: uuid(),
    images: [
      {
        url: "/image-s3.png",
      },
    {
      url: "/image-s1.png",
    },
    {
      url: "/image-s2.png",
    },
      
    ],
    name: "Private villa in San Fransisco",
    subtitle: "Delux Queen room with Street View",
    description: "1 Bedroom / 1 Bathroom / Wifi / 1 Kitchen",
    guest: 2,
    price: "100",
    rating: 4,
    numOfReviews: 200,
    location: "San Fransisco California United States",
  },
  {
    _id: uuid(),
    images: [
      {
        url: "/image-s4.png",
      },
      {
        url: "/image-s1.png",
      },
      {
        url: "/image-s2.png",
      },
    ],
    name: "Private villa in San Fransisco",
    subtitle: "Delux Queen room with Street View",
    description: "1 Bedroom / 1 Bathroom / Wifi / 1 Kitchen",
    guest: 2,
    price: "100",
    rating: 4,
    numOfReviews: 200,
    location: "San Fransisco California United States",
  },
  {
    _id: uuid(),
    images: [
      {
        url: "/image-s5.png",
      },
      {
        url: "/image-s6.png",
      },
      {
        url: "/image-s4.png",
      },
    ],
    name: "Private villa in San Fransisco",
    subtitle: "Delux Queen room with Street View",
    description: "1 Bedroom / 1 Bathroom / Wifi / 1 Kitchen",
    guest: 2,
    price: "100",
    rating: 4,
    numOfReviews: 200,
    location: "San Fransisco California United States",
  },
  {
    _id: uuid(),
    images: [
      {
        url: "/image-s6.png",
      },
      {
        url: "/image-s4.png",
      },
      {
        url: "/image-s1.png",
      },
    ],
    name: "Private villa in San Fransisco",
    subtitle: "Delux Queen room with Street View",
    description: "1 Bedroom / 1 Bathroom / Wifi / 1 Kitchen",
    guest: 2,
    price: "100",
    rating: 4,
    numOfReviews: 200,
    location: "San Fransisco California United States",
  },
];

export { featuredPlaces, exclusive, travelStories, recommended };
