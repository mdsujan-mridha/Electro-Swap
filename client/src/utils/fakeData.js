
import acIon from "../assets/icon/air-conditioner.png";
import deviceIon from "../assets/icon/device.png";
import electronicIon from "../assets/icon/electrical-service.png";
import fanIon from "../assets/icon/fan.png";
import fridgeIon from "../assets/icon/fridge.png";
import headphoneIon from "../assets/icon/headphones.png";
import mobileIon from "../assets/icon/mobile-device.png";
import plugIon from "../assets/icon/plug.png";
import pcIon from "../assets/icon/responsive.png";
import smartPhoneIon from "../assets/icon/smart-home.png";

export const categoriesData = [
    {
        id: 1,
        title: "Fridge",
        image: fridgeIon

    },
    {
        id: 2,
        title: "Air Condition (AC)",
        image: acIon

    },
    {
        id: 3,
        title: "Mobile",
        image: mobileIon
    },
    {
        id: 4,
        title: "Headphone",
        image: headphoneIon
    },
    {
        id: 5,
        title: "Fan",
        image: fanIon
    },
    {
        id: 6,
        title: "Electrical Device",
        image: electronicIon
    },
    {
        id: 7,
        title: "Smart Phone",
        image: smartPhoneIon
    },
    {
        id: 8,
        title: "Plug",
        image: plugIon
    },
    {
        id: 9,
        title: "Computer",
        image: pcIon
    },
    {
        id: 10,
        title: "Device",
        image: deviceIon
    }

]

// nav item 
export const pages = [
    {
        _id: 1,
        link: "/",
        title: "Home",

    },
    {
        _id: 2,
        link: "/products",
        title: "Products",

    },
    {
        _id: 3,
        link: "/about",
        title: "About",

    },
    {
        _id: 4,
        link: "/contact",
        title: "Contact",

    },
    {
        _id: 5,
        link: "/blog",
        title: "Blog",

    }
];

// product category 
export const categories = [
    {
        name: "Computers & Accessories",
        subcategories: [
            "Laptops",
            "Desktops",
            "Monitors",
            "Networking Devices",
            "Computer Components",
            "Printers & Ink",
            "Storage Devices",
            "Computer Accessories"
        ]
    },
    {
        name: "Electronics",
        subcategories: [
            "Mobile Phones",
            "Tablets",
            "Wearable Technology",
            "Audio & Headphones",
            "Cameras & Photography",
            "Televisions",
            "Home Entertainment",
            "Drones & Action Cameras"
        ]
    },
    {
        name: "Home Appliances",
        subcategories: [
            "Large Appliances",
            "Small Appliances",
            "Heating & Cooling",
            "Vacuum Cleaners",
            "Ironing & Laundry",
            "Water Purifiers"
        ]
    },
    {
        name: "Fashion",
        subcategories: [
            "Men's Fashion",
            "Women's Fashion",
            "Kids' Fashion",
            "Footwear",
            "Watches",
            "Accessories",
            "Jewelry"
        ]
    },
    {
        name: "Health & Beauty",
        subcategories: [
            "Skincare",
            "Haircare",
            "Makeup",
            "Fragrances",
            "Personal Care",
            "Health Devices",
            "Supplements"
        ]
    },
    {
        name: "Sports & Outdoors",
        subcategories: [
            "Fitness Equipment",
            "Outdoor Gear",
            "Sports Apparel",
            "Footwear",
            "Cycling",
            "Camping & Hiking",
            "Water Sports",
            "Team Sports"
        ]
    },
    {
        name: "Home & Garden",
        subcategories: [
            "Furniture",
            "Home Decor",
            "Kitchen & Dining",
            "Bedding",
            "Garden Supplies",
            "Tools & Home Improvement",
            "Lighting"
        ]
    },
    {
        name: "Toys, Kids & Baby",
        subcategories: [
            "Toys",
            "Baby Products",
            "Kids' Clothing",
            "Kids' Shoes",
            "Nursery",
            "Strollers & Car Seats",
            "Feeding"
        ]
    },
    {
        name: "Automotive",
        subcategories: [
            "Car Electronics",
            "Car Accessories",
            "Motorcycle Accessories",
            "Car Parts",
            "Tools & Equipment",
            "Tires & Wheels"
        ]
    },
    {
        name: "Books & Stationery",
        subcategories: [
            "Books",
            "E-Books",
            "Stationery",
            "Office Supplies",
            "Educational Supplies",
            "Art Supplies"
        ]
    }
];

// founder 
const Founder = [
    {
        id: 1,
        name: "Md Rony Ahmed",
        image: "https://i.ibb.co.com/9YJM3kn/vector-users-icon.jpg"
    },
    {
        id: 2,
        name: "Md Sabbir Ahmed",
        image: "https://i.ibb.co.com/9YJM3kn/vector-users-icon.jpg"
    },
    {
        id: 3,
        name: "Meherun Nessa",
        image: "https://i.ibb.co.com/0ZhgShL/female-296990-1280.png"
    },
    
]

// review 
const reviews = [
    {
        id: 1,
        name: "Stacy",
        image: "https://i.ibb.co/JQZnGfm/unsplash-6-W4-F62s-N-y-I.png",
        review: "Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
        rating: 5
    },
    {
        id: 2,
        name: "Tiffany",
        image: "https://i.ibb.co/dLPLqP2/unsplash-6-W4-F62s-N-y-I-1.png",
        review: "I ordered a few items from your website and I received them on time. I am very satisfied with the quality of products.",
        rating: 4
    },
    {
        id: 3,
        name: "James",
        image: "https://i.ibb.co/Pxxrn13/unsplash-6-W4-F62s-N-y-I-2.png",
        review: "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
        rating: 3
    }
]

const fakeData = {
    Founder,
    reviews
};

export default fakeData;