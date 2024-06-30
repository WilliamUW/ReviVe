// Define the type for a device listing

export interface DeviceInfo {
  name: string;
  description: string;
  model: string;
  quality: string;
  suggested_price?: number;
  b3tr_reward?: number;
}

export type DeviceListing = DeviceInfo & {
  id: number;
  price: number;
  condition: string;
  location: string;
  imageLinks: string[];
};

export const mockListings: DeviceListing[] = [
  {
    id: 1,
    name: "iPhone 12",
    description: "Great condition iPhone 12",
    price: 400,
    condition: "Used",
    location: "New York",
    model: "A2172",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00n0n_4w62DXKtKtd_0t20CI_1200x900.jpg",
    ],
    b3tr_reward: 48,
  },
  {
    id: 2,
    name: "Samsung TV",
    description: "Large Samsung Smart TV",
    price: 300,
    condition: "Broken",
    location: "Los Angeles",
    model: "QN55Q60A",
    quality: "Fair",
    imageLinks: [
      "https://images.craigslist.org/01212_9KTHJQmHRey_1320MM_1200x900.jpg",
    ],
    b3tr_reward: 34,
  },
  {
    id: 3,
    name: "MacBook Pro",
    description: "Powerful MacBook Pro laptop",
    price: 800,
    condition: "Like New",
    location: "Chicago",
    model: "A2338",
    quality: "Excellent",
    imageLinks: [
      "https://images.craigslist.org/00S0S_be31W6qVpqV_0rl0t2_1200x900.jpg",
    ],
    b3tr_reward: 85,
  },
  {
    id: 4,
    name: "Google Pixel 8",
    description: "Slightly used Google Pixel 8",
    price: 350,
    condition: "Used",
    location: "San Francisco",
    model: "GD1YQ",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00808_dVOGr6Btug8_0bC0fu_1200x900.jpg",
    ],
    b3tr_reward: 37,
  },
  {
    id: 5,
    name: "Dell XPS 13",
    description: "High performance Dell XPS 13",
    price: 900,
    condition: "Like New",
    location: "Austin",
    model: "9310",
    quality: "Excellent",
    imageLinks: [
      "https://images.craigslist.org/00f0f_abaYJq1M585_0t20CI_1200x900.jpg",
    ],
    b3tr_reward: 98,
  },
  {
    id: 6,
    name: "PlayStation 5",
    description: "Next-gen PlayStation 5 console",
    price: 500,
    condition: "Used",
    location: "Miami",
    model: "CFI-1015A",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00Y0Y_iq1BkGLqyUb_0lM0t2_1200x900.jpg",
    ],
    b3tr_reward: 53,
  },
  {
    id: 7,
    name: "iPad Pro",
    description: "Latest model iPad Pro",
    price: 600,
    condition: "Like New",
    location: "Seattle",
    model: "A2378",
    quality: "Excellent",
    imageLinks: [
      "https://images.craigslist.org/00909_cVEYfuD173O_0CI0t2_1200x900.jpg",
    ],
    b3tr_reward: 67,
  },
  {
    id: 8,
    name: "HP Envy 17",
    description: "Versatile HP Envy 17",
    price: 700,
    condition: "Used",
    location: "Denver",
    model: "13-aw0205tu",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00T0T_boJDIkTHhfM_0oF0pw_1200x900.jpg",
    ],
    b3tr_reward: 71,
  },
  {
    id: 9,
    name: "Microsoft Surface Laptop 4",
    description: "Powerful Surface Laptop 4",
    price: 850,
    condition: "Like New",
    location: "Portland",
    model: "5EB-00001",
    quality: "Excellent",
    imageLinks: [
      "https://images.craigslist.org/00F0F_2wHnUI1UrYr_0t20CI_1200x900.jpg",
    ],
    b3tr_reward: 86,
  },
  {
    id: 10,
    name: "Nintendo Switch",
    description: "Versatile Nintendo Switch",
    price: 250,
    condition: "Used",
    location: "Boston",
    model: "HAC-001(-01)",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00p0p_JsCS9kxJzG_0t20CI_1200x900.jpg",
    ],
    b3tr_reward: 25,
  },
  {
    id: 11,
    name: "Sony Alpha a7 II",
    description: "Full-frame mirrorless camera",
    price: 1800,
    condition: "Like New",
    location: "San Diego",
    model: "ILCE-7M3",
    quality: "Excellent",
    imageLinks: [
      "https://images.craigslist.org/00f0f_i5nBCDkfLxj_0uc0py_1200x900.jpg",
    ],
    b3tr_reward: 183,
  },
  {
    id: 12,
    name: "Fitbit Charge 4",
    description: "Fitness tracker with GPS",
    price: 100,
    condition: "Used",
    location: "Atlanta",
    model: "FB417",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00U0U_3rb1W8CHIPX_0t20CI_1200x900.jpg",
    ],
    b3tr_reward: 11,
  },
  {
    id: 13,
    name: "GoPro HERO5 Black",
    description: "Action camera with 5K video",
    price: 350,
    condition: "Like New",
    location: "Orlando",
    model: "CHDHX-901",
    quality: "Excellent",
    imageLinks: [
      "https://images.craigslist.org/00s0s_kb2dNxKUyC5_0t20CI_1200x900.jpg",
    ],
    b3tr_reward: 34,
  },
  {
    id: 14,
    name: "Canon R5",
    description: "Professional-grade mirrorless camera",
    price: 3500,
    condition: "Like New",
    location: "Phoenix",
    model: "R5",
    quality: "Excellent",
    imageLinks: [
      "https://images.craigslist.org/00l0l_8L9DKrIMVwc_0CI0lM_1200x900.jpg",
    ],
    b3tr_reward: 380,
  },
  {
    id: 15,
    name: "JBL Flip 5",
    description: "Portable Bluetooth speaker",
    price: 100,
    condition: "Used",
    location: "Nashville",
    model: "FLIP5",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00F0F_2MdBdJvMAxJ_0hr0CI_1200x900.jpg",
    ],
    b3tr_reward: 110,
  },
  {
    id: 16,
    name: "Bose QuietComfort 35 II",
    description: "Noise-cancelling headphones",
    price: 250,
    condition: "Used",
    location: "Dallas",
    model: "QC35 II",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00b0b_kLx6Lpfjck4_0t20CI_1200x900.jpg",
    ],
    b3tr_reward: 24,
  },
  {
    id: 17,
    name: "Amazon Kindle Paperwhite",
    description: "Waterproof e-reader",
    price: 130,
    condition: "Like New",
    location: "Houston",
    model: "PQ94WIF",
    quality: "Excellent",
    imageLinks: [
      "https://images.craigslist.org/00k0k_8onrcScyNIU_0MM132_1200x900.jpg",
    ],
    b3tr_reward: 14,
  },
  {
    id: 18,
    name: "Garmin Fenix 6X",
    description: "Rugged multisport GPS watch",
    price: 600,
    condition: "Used",
    location: "Philadelphia",
    model: "010-02157-00",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00c0c_8b6sTLUGJAY_0t20CI_1200x900.jpg",
    ],
    b3tr_reward: 69,
  },
  {
    id: 19,
    name: "Razer Blade 15",
    description: "Gaming laptop with RTX 3070",
    price: 2000,
    condition: "Like New",
    location: "San Antonio",
    model: "RZ09-0367",
    quality: "Excellent",
    imageLinks: [
      "https://images.craigslist.org/00000_4I6sfwxT3BU_0t10CI_1200x900.jpg",
    ],
    b3tr_reward: 210,
  },
  {
    id: 20,
    name: "Apple Watch Series 6",
    description: "Smartwatch with ECG",
    price: 350,
    condition: "Used",
    location: "Charlotte",
    model: "A2294",
    quality: "Good",
    imageLinks: [
      "https://images.craigslist.org/00W0W_hurSICh0SqK_0t20CI_1200x900.jpg",
    ],
    b3tr_reward: 33,
  },
];
