export const categories = [
      { "id": 1, "name": "মোবাইল", "icon": "mdi:cellphone", "count": "৩১,২৭৭", "is_featured": true },
      { "id": 2, "name": "ইলেকট্রনিক্স", "icon": "mdi:desktop-classic", "count": "৫১,৬৫৪", "is_featured": false },
      { "id": 3, "name": "যানবাহন", "icon": "mdi:car", "count": "২৯,১৫৯", "is_featured": true },
      { "id": 4, "name": "প্রপার্টি", "icon": "mdi:home", "count": "১৮,৬৮৩", "is_featured": false },
      { "id": 5, "name": "হোম এবং লিভিং", "icon": "mdi:sofa", "count": "১৭,৯১১", "is_featured": true },
      { "id": 6, "name": "মেয়েদের ফ্যাশন ও সৌন্দর্য", "icon": "mdi:dress", "count": "৮,৪৪৪", "is_featured": false },
      { "id": 7, "name": "ছেলেদের ফ্যাশন ও কটিং", "icon": "mdi:tshirt-crew", "count": "৭,৯১৪", "is_featured": false },
      { "id": 8, "name": "খেলাধুলা এবং শিল্প", "icon": "mdi:basketball", "count": "৭,৩০৭", "is_featured": true },
      { "id": 9, "name": "ব্যবসা ও শিল্পকারখানা", "icon": "mdi:factory", "count": "৩,২৪২", "is_featured": false },
      { "id": 10, "name": "শিক্ষা", "icon": "mdi:school", "count": "২,৯৬৮", "is_featured": true },
      { "id": 11, "name": "নিত্য প্রয়োজনীয় সামগ্রী", "icon": "mdi:shopping", "count": "২,৬৬৮", "is_featured": false },
      { "id": 12, "name": "কৃষি পণ্য", "icon": "mdi:sprout", "count": "৮৩০", "is_featured": true },
      { "id": 13, "name": "সার্ভিস", "icon": "mdi:tools", "count": "৭৬৯", "is_featured": false },
      { "id": 14, "name": "চাকরি", "icon": "mdi:briefcase", "count": "৭০৩", "is_featured": true },
      { "id": 15, "name": "বিদেশে চাকরি", "icon": "mdi:airplane", "count": "৫২", "is_featured": false }
]
    
export const products = [
      {
        "id": 101,
        "name": "iPhone 13 Pro",
        "price": "১১০,০০০ ৳",
        "images": ["/images/iphone13pro_1.webp", "/images/iphone13pro_2.webp", "/images/iphone13pro_3.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 1,
        "description": "Apple iPhone 13 Pro comes with the powerful A15 Bionic chip, 5G speed, and an advanced triple-camera system.",
        "reviews": [
          { "username": "রাফি", "rating": 5, "comment": "অদ্ভুত ফোন, ক্যামেরার গুণমান চমৎকার!" },
          { "username": "তানিয়া", "rating": 4, "comment": "দারুন পারফরমেন্স, তবে ব্যাটারি লাইফ একটু উন্নত করা যেত।" }
        ]
      },
      {
        "id": 102,
        "name": "Samsung Galaxy S21",
        "price": "৯৫,০০০ ৳",
        "images": ["/images/galaxyS21_1.webp", "/images/galaxyS21_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 1,
        "description": "Samsung Galaxy S21 features a high-quality camera system, smooth performance, and 5G support.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দাম অনুযায়ী ভালো ফোন।" },
          { "username": "নিলয়", "rating": 3.5, "comment": "ক্যামেরা ভালো, তবে কিছু কিছু ফিচার মিস করছে।" }
        ]
      },
      {
        "id": 103,
        "name": "Xiaomi Redmi Note 10",
        "price": "২০,০০০ ৳",
        "images": ["/images/redmiNote10_1.webp", "/images/redmiNote10_2.webp"],
        "rating": 4.0,
        "is_featured": false,
        "category_id": 1,
        "description": "An affordable smartphone with powerful performance and a long-lasting battery.",
        "reviews": [
          { "username": "কামরুল", "rating": 4, "comment": "দাম অনুযায়ী খুব ভালো, ব্যাটারি লাইফ চমৎকার।" },
          { "username": "শিমা", "rating": 4.5, "comment": "ব্যাটারি লাইফ এবং ইন্টারফেস খুবই ভালো।" }
        ]
      },
      {
        "id": 104,
        "name": "OnePlus 9",
        "price": "৬৫,০০০ ৳",
        "images": ["/images/onePlus9_1.webp", "/images/onePlus9_2.webp"],
        "rating": 4.3,
        "is_featured": true,
        "category_id": 1,
        "description": "OnePlus 9 offers a seamless user experience with its high refresh rate display and fast charging.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 4, "comment": "দারুন ডিসপ্লে এবং চার্জিং সাপোর্ট।" },
          { "username": "রুবিনা", "rating": 4.5, "comment": "ফাস্ট পারফরমেন্স এবং স্টাইলিশ ডিজাইন।" }
        ]
      },
      {
        "id": 105,
        "name": "Realme 8 Pro",
        "price": "২৫,০০০ ৳",
        "images": ["/images/realme8pro_1.webp", "/images/realme8pro_2.webp"],
        "rating": 4.1,
        "is_featured": false,
        "category_id": 1,
        "description": "Realme 8 Pro comes with a high-resolution camera and fast charging capabilities.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "ক্যামেরা ভালো, তবে কিছু ফিচার মিস করছে।" },
          { "username": "সাবিনা", "rating": 4.5, "comment": "ফাস্ট চার্জিং এবং ভালো ব্যাটারি লাইফ।" }
        ]
      },
      {
        "id": 106,
        "name": "Google Pixel 5",
        "price": "৮০,০০০ ৳",
        "images": ["/images/pixel5_1.webp", "/images/pixel5_2.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 1,
        "description": "Google Pixel 5 offers a clean Android experience with exceptional camera performance.",
        "reviews": [
          { "username": "ইমান", "rating": 5, "comment": "ক্যামেরা অসাধারণ এবং সাফ অ্যান্ড্রয়েড ইন্টারফেস।" },
          { "username": "সাব্দা", "rating": 4, "comment": "দারুন পারফরমেন্স, তবে দাম একটু বেশি।" }
        ]
      },
      {
        "id": 201,
        "name": "Samsung 4K Smart TV",
        "price": "৭৫,০০০ ৳",
        "images": ["/images/samsung4KTV_1.webp", "/images/samsung4KTV_2.webp"],
        "rating": 4.4,
        "is_featured": true,
        "category_id": 2,
        "description": "Enjoy stunning 4K resolution and vibrant colors with the Samsung 4K Smart TV.",
        "reviews": [
          { "username": "আরিফ", "rating": 5, "comment": "ঘরে সিনেমা দেখার জন্য চমৎকার টিভি।" },
          { "username": "তানিয়া", "rating": 4, "comment": "পিকচার কোয়ালিটি খুবই ভালো।" }
        ]
      },
      {
        "id": 202,
        "name": "Sony PlayStation 5",
        "price": "৬০,০০০ ৳",
        "images": ["/images/playstation5_1.webp", "/images/playstation5_2.webp"],
        "rating": 4.8,
        "is_featured": false,
        "category_id": 2,
        "description": "Sony PlayStation 5 offers next-gen gaming experiences with ultra-fast loading and stunning graphics.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "গেমিংয়ের জন্য অসাধারণ কনসোল।" },
          { "username": "নিলয়", "rating": 4.5, "comment": "পারফরমেন্স চমৎকার, তবে স্টক সমস্যা আছে।" }
        ]
      },
      {
        "id": 203,
        "name": "MacBook Air M1",
        "price": "১২০,০০০ ৳",
        "images": ["/images/macbookAirM1_1.webp", "/images/macbookAirM1_2.webp"],
        "rating": 4.7,
        "is_featured": true,
        "category_id": 2,
        "description": "MacBook Air M1 combines powerful performance with sleek design and long battery life.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "ফাস্ট পারফরমেন্স এবং হালকা ওজন।" },
          { "username": "রুবিনা", "rating": 4.5, "comment": "দারুন ডিসপ্লে এবং ব্যাটারি লাইফ।" }
        ]
      },
      {
        "id": 204,
        "name": "Bose QuietComfort Earbuds",
        "price": "২৫,০০০ ৳",
        "images": ["/images/boseQC_1.webp", "/images/boseQC_2.webp"],
        "rating": 4.6,
        "is_featured": false,
        "category_id": 2,
        "description": "Experience unparalleled sound quality and noise cancellation with Bose QuietComfort Earbuds.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "অসাধারণ সাউন্ড কোয়ালিটি, তবে কিছুটা দামি।" },
          { "username": "সাব্দা", "rating": 4.5, "comment": "নয়েজ ক্যান্সেলেশন চমৎকার।" }
        ]
      },
      {
        "id": 205,
        "name": "Apple iPad Pro",
        "price": "১১০,০০০ ৳",
        "images": ["/images/ipadPro_1.webp", "/images/ipadPro_2.webp"],
        "rating": 4.9,
        "is_featured": true,
        "category_id": 2,
        "description": "Apple iPad Pro offers a versatile tablet experience with the powerful M1 chip and stunning display.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "অসাধারণ ট্যাবলেট, বিশেষ করে ডিজাইনারদের জন্য।" },
          { "username": "নিলয়", "rating": 4.8, "comment": "পাওয়ারফুল পারফরমেন্স এবং লম্বা ব্যাটারি লাইফ।" }
        ]
      },
      {
        "id": 206,
        "name": "Dell XPS 13",
        "price": "১২০,০০০ ৳",
        "images": ["/images/dellXPS13_1.webp", "/images/dellXPS13_2.webp"],
        "rating": 4.5,
        "is_featured": false,
        "category_id": 2,
        "description": "Dell XPS 13 is a premium laptop offering sleek design, high performance, and excellent battery life.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "ডিজাইন খুবই ভালো এবং পারফরমেন্স চমৎকার।" },
          { "username": "সাব্দা", "rating": 4.5, "comment": "পিকচার কোয়ালিটি এবং বিল্ড কোয়ালিটি অসাধারণ।" }
        ]
      },
      {
        "id": 301,
        "name": "Toyota Corolla 2020",
        "price": "২২,০০,০০০ ৳",
        "images": ["/images/toyotaCorolla2020_1.webp", "/images/toyotaCorolla2020_2.webp", "/images/toyotaCorolla2020_3.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 3,
        "description": "Toyota Corolla 2020 is a reliable and fuel-efficient sedan with advanced safety features.",
        "reviews": [
          { "username": "নাশিত", "rating": 5, "comment": "পারিবারিক ব্যবহারের জন্য অত্যন্ত উপযুক্ত।" },
          { "username": "ফারজানা", "rating": 4, "comment": "চালনা খুবই মসৃণ এবং নিরাপদ।" }
        ]
      },
      {
        "id": 302,
        "name": "Honda CBR150R",
        "price": "৪,৫০,০০০ ৳",
        "images": ["/images/hondaCBR150R_1.webp", "/images/hondaCBR150R_2.webp"],
        "rating": 4.4,
        "is_featured": false,
        "category_id": 3,
        "description": "Honda CBR150R is a sporty motorcycle offering impressive speed and agile handling.",
        "reviews": [
          { "username": "রাফি", "rating": 4, "comment": "স্পোর্টি লুক এবং ভালো পারফরমেন্স।" },
          { "username": "তানিয়া", "rating": 4.2, "comment": "রাইডিং এক্সপেরিয়েন্স খুবই ভালো।" }
        ]
      },
      {
        "id": 303,
        "name": "Nissan X-Trail",
        "price": "৩৫,০০,০০০ ৳",
        "images": ["/images/nissanXTrail_1.webp", "/images/nissanXTrail_2.webp"],
        "rating": 4.7,
        "is_featured": true,
        "category_id": 3,
        "description": "Nissan X-Trail offers spacious interiors, advanced safety features, and excellent fuel efficiency.",
        "reviews": [
          { "username": "নাশিত", "rating": 5, "comment": "ইন্টারিয়র খুবই প্রশস্ত এবং আরামদায়ক।" },
          { "username": "ফারজানা", "rating": 4.7, "comment": "সেফটি ফিচারস চমৎকার।" }
        ]
      },
      {
        "id": 304,
        "name": "Suzuki Gixxer SF",
        "price": "২,২০,০০০ ৳",
        "images": ["/images/suzukiGixxerSF_1.webp", "/images/suzukiGixxerSF_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 3,
        "description": "Suzuki Gixxer SF is a stylish motorcycle with powerful performance and comfortable seating.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন ডিজাইন এবং পারফরমেন্স।" },
          { "username": "সাব্দা", "rating": 4.3, "comment": "চালনা মসৃণ এবং আরামদায়ক।" }
        ]
      },
      {
        "id": 305,
        "name": "Yamaha FZ",
        "price": "২,৬০,০০০ ৳",
        "images": ["/images/yamahaFZ_1.webp", "/images/yamahaFZ_2.webp"],
        "rating": 4.2,
        "is_featured": true,
        "category_id": 3,
        "description": "Yamaha FZ offers a balance of performance and comfort, making it ideal for daily commutes.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 4, "comment": "দৈনন্দিন ব্যবহারের জন্য চমৎকার।" },
          { "username": "রুবিনা", "rating": 4.1, "comment": "পারফরমেন্স ভালো, তবে কিছুটা ভারী।" }
        ]
      },
      {
        "id": 306,
        "name": "Ford Mustang",
        "price": "৭০,০০,০০০ ৳",
        "images": ["/images/fordMustang_1.webp", "/images/fordMustang_2.webp"],
        "rating": 4.9,
        "is_featured": false,
        "category_id": 3,
        "description": "Ford Mustang is a legendary sports car known for its powerful engine and iconic design.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "পাওয়ারফুল এবং স্টাইলিশ।" },
          { "username": "নিলয়", "rating": 4.8, "comment": "এক্সেলেন্ট পারফরমেন্স এবং লুক।" }
        ]
      },
      {
        "id": 401,
        "name": "3 বেড অ্যাপার্টমেন্ট",
        "price": "১,২০,০০,০০০ ৳",
        "images": ["/images/3bedApartment_1.webp", "/images/3bedApartment_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 4,
        "description": "A spacious 3-bedroom apartment in a prime location, ideal for families.",
        "reviews": [
          { "username": "মাহিন", "rating": 4, "comment": "স্পেসিয়াস এবং ভালো ডিজাইন।" },
          { "username": "করিম", "rating": 5, "comment": "লোকেশন এবং অ্যামেনিটিস চমৎকার।" }
        ]
      },
      {
        "id": 402,
        "name": "1000 sqft প্লট",
        "price": "৫০,০০,০০০ ৳",
        "images": ["/images/1000sqftPlot_1.webp", "/images/1000sqftPlot_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 4,
        "description": "A 1000 sqft plot available in a serene neighborhood, perfect for building your dream home.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "ভালো লোকেশন এবং কনডিশন।" },
          { "username": "সাব্দা", "rating": 4.3, "comment": "বিল্ডিং এর জন্য উপযুক্ত।" }
        ]
      },
      {
        "id": 403,
        "name": "2 বেড ফ্ল্যাট",
        "price": "৭০,০০,০০০ ৳",
        "images": ["/images/2bedFlat_1.webp", "/images/2bedFlat_2.webp"],
        "rating": 4.4,
        "is_featured": false,
        "category_id": 4,
        "description": "A cozy 2-bedroom flat with modern amenities and a convenient location.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 4, "comment": "কমফোর্টেবল এবং অ্যামেনিটিস ভালো।" },
          { "username": "রুবিনা", "rating": 4.4, "comment": "পরিবারের জন্য উপযুক্ত।" }
        ]
      },
      {
        "id": 404,
        "name": "কমার্শিয়াল স্পেস",
        "price": "২,০০,০০,০০০ ৳",
        "images": ["/images/commercialSpace_1.webp", "/images/commercialSpace_2.webp"],
        "rating": 4.8,
        "is_featured": true,
        "category_id": 4,
        "description": "Commercial space available in a bustling area, ideal for businesses looking to expand.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "অসাধারণ লোকেশন এবং স্পেস।" },
          { "username": "নিলয়", "rating": 4.8, "comment": "ব্যবসার জন্য চমৎকার জায়গা।" }
        ]
      },
      {
        "id": 405,
        "name": "4 বেড অ্যাপার্টমেন্ট",
        "price": "১,৫০,০০,০০০ ৳",
        "images": ["/images/4bedApartment_1.webp", "/images/4bedApartment_2.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 4,
        "description": "A luxurious 4-bedroom apartment with premium finishes and spacious living areas.",
        "reviews": [
          { "username": "আলিফ", "rating": 4.6, "comment": "লাক্সারি ফিনিশিং এবং স্পেসিয়াস।" },
          { "username": "সাব্দা", "rating": 4.7, "comment": "পার্থিব সুবিধা এবং ভালো লোকেশন।" }
        ]
      },
      {
        "id": 406,
        "name": "দোকান স্পেস",
        "price": "৩০,০০,০০০ ৳",
        "images": ["/images/shopSpace_1.webp", "/images/shopSpace_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 4,
        "description": "Shop space available in a high-traffic area, perfect for retail businesses.",
        "reviews": [
          { "username": "মাহিন", "rating": 4, "comment": "ভালো লোকেশন এবং স্পেস।" },
          { "username": "করিম", "rating": 4.2, "comment": "ব্যবসার জন্য উপযুক্ত জায়গা।" }
        ]
      },
      {
        "id": 501,
        "name": "Leather Sofa Set",
        "price": "৪৫,০০০ ৳",
        "images": ["/images/leatherSofaSet_1.webp", "/images/leatherSofaSet_2.webp"],
        "rating": 4.3,
        "is_featured": true,
        "category_id": 5,
        "description": "Elegant leather sofa set that adds a touch of luxury to your living room.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "স্টাইলিশ এবং আরামদায়ক।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "চমৎকার বিল্ড কোয়ালিটি।" }
        ]
      },
      {
        "id": 502,
        "name": "Dining Table",
        "price": "৩০,০০০ ৳",
        "images": ["/images/diningTable_1.webp", "/images/diningTable_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 5,
        "description": "Modern dining table that comfortably seats six, perfect for family gatherings.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 4, "comment": "দারুন ডিজাইন এবং স্টাইলিশ।" },
          { "username": "রুবিনা", "rating": 4.2, "comment": "খুবই আরামদায়ক এবং ফাংশনাল।" }
        ]
      },
      {
        "id": 503,
        "name": "Queen Size Bed",
        "price": "৬০,০০০ ৳",
        "images": ["/images/queenSizeBed_1.webp", "/images/queenSizeBed_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 5,
        "description": "Comfortable queen size bed with high-quality mattress and sturdy frame.",
        "reviews": [
          { "username": "আলিফ", "rating": 4.5, "comment": "আরামদায়ক এবং ভালো সাপোর্ট।" },
          { "username": "সাব্দা", "rating": 4.6, "comment": "সুন্দর ডিজাইন এবং কার্যকরী।" }
        ]
      },
      {
        "id": 504,
        "name": "Wardrobe",
        "price": "৫০,০০০ ৳",
        "images": ["/images/wardrobe_1.webp", "/images/wardrobe_2.webp"],
        "rating": 4.4,
        "is_featured": false,
        "category_id": 5,
        "description": "Spacious wardrobe with multiple compartments and modern design.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "বড় এবং কার্যকরী।" },
          { "username": "নিলয়", "rating": 4.4, "comment": "দারুন ডিজাইন এবং স্পেসিয়াস।" }
        ]
      },
      {
        "id": 505,
        "name": "Recliner Chair",
        "price": "২৫,০০০ ৳",
        "images": ["/images/reclinerChair_1.webp", "/images/reclinerChair_2.webp"],
        "rating": 4.3,
        "is_featured": true,
        "category_id": 5,
        "description": "Comfortable recliner chair with adjustable settings and plush cushioning.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 4, "comment": "আরামদায়ক এবং ভালো বিল্ড কোয়ালিটি।" },
          { "username": "রুবিনা", "rating": 4.3, "comment": "উত্তম আরাম এবং স্টাইলিশ ডিজাইন।" }
        ]
      },
      {
        "id": 506,
        "name": "Coffee Table",
        "price": "২০,০০০ ৳",
        "images": ["/images/coffeeTable_1.webp", "/images/coffeeTable_2.webp"],
        "rating": 4.6,
        "is_featured": false,
        "category_id": 5,
        "description": "Stylish coffee table with ample storage and modern design elements.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন ডিজাইন এবং কার্যকরী।" },
          { "username": "সাব্দা", "rating": 4.6, "comment": "স্পেসিয়াস এবং স্টাইলিশ।" }
        ]
      },
      {
        "id": 601,
        "name": "Saree",
        "price": "১৫,০০০ ৳",
        "images": ["/images/saree_1.webp", "/images/saree_2.webp"],
        "rating": 4.4,
        "is_featured": true,
        "category_id": 6,
        "description": "Elegant saree with intricate designs and comfortable fabric.",
        "reviews": [
          { "username": "রাফি", "rating": 4, "comment": "বেশ সুন্দর এবং আরামদায়ক।" },
          { "username": "তানিয়া", "rating": 4.5, "comment": "ডিজাইন খুবই ভালো।" }
        ]
      },
      {
        "id": 602,
        "name": "Makeup Kit",
        "price": "৫,০০০ ৳",
        "images": ["/images/makeupKit_1.webp", "/images/makeupKit_2.webp"],
        "rating": 4.5,
        "is_featured": false,
        "category_id": 6,
        "description": "Comprehensive makeup kit with high-quality brushes and vibrant colors.",
        "reviews": [
          { "username": "আলিফ", "rating": 4.5, "comment": "ভালো ব্রাশ এবং কালার প্যালেট।" },
          { "username": "সাব্দা", "rating": 4.6, "comment": "সুন্দর কালার এবং দীর্ঘস্থায়ী।" }
        ]
      },
      {
        "id": 603,
        "name": "Jewelry Set",
        "price": "১০,০০০ ৳",
        "images": ["/images/jewelrySet_1.webp", "/images/jewelrySet_2.webp"],
        "rating": 4.3,
        "is_featured": true,
        "category_id": 6,
        "description": "Beautiful jewelry set with matching earrings, necklace, and bracelet.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "স্টাইলিশ এবং ভালো মানের।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "দারুন ডিজাইন এবং আকর্ষণীয়।" }
        ]
      },
      {
        "id": 604,
        "name": "Kurti",
        "price": "৩,০০০ ৳",
        "images": ["/images/kurti_1.webp", "/images/kurti_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 6,
        "description": "Comfortable and stylish kurti available in various colors and patterns.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 4, "comment": "আরামদায়ক এবং ফ্যাশনেবল।" },
          { "username": "রুবিনা", "rating": 4.2, "comment": "ভালো কাট এবং ডিজাইন।" }
        ]
      },
      {
        "id": 605,
        "name": "Handbag",
        "price": "৮,০০০ ৳",
        "images": ["/images/handbag_1.webp", "/images/handbag_2.webp"],
        "rating": 4.1,
        "is_featured": true,
        "category_id": 6,
        "description": "Stylish handbag with ample space and durable material.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন ডিজাইন এবং ভালো স্টোরেজ।" },
          { "username": "নিলয়", "rating": 4.1, "comment": "অতীব কার্যকরী এবং স্টাইলিশ।" }
        ]
      },
      {
        "id": 606,
        "name": "Perfume",
        "price": "৬,০০০ ৳",
        "images": ["/images/perfume_1.webp", "/images/perfume_2.webp"],
        "rating": 4.6,
        "is_featured": false,
        "category_id": 6,
        "description": "Long-lasting perfume with a fresh and floral fragrance.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 4, "comment": "দারুন সুগন্ধ এবং দীর্ঘস্থায়ী।" },
          { "username": "রুবিনা", "rating": 4.6, "comment": "ফ্রেশ এবং আকর্ষণীয় ফ্র্যাগ্রেন্স।" }
        ]
      },
      {
        "id": 701,
        "name": "T-shirt",
        "price": "১,৫০০ ৳",
        "images": ["/images/tshirt_1.webp", "/images/tshirt_2.webp"],
        "rating": 4.3,
        "is_featured": true,
        "category_id": 7,
        "description": "Comfortable and stylish T-shirt available in various colors and sizes.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "আরামদায়ক এবং ভালো কাট।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "স্টাইলিশ এবং মানসম্মত।" }
        ]
      },
      {
        "id": 702,
        "name": "Jeans",
        "price": "২,৫০০ ৳",
        "images": ["/images/jeans_1.webp", "/images/jeans_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 7,
        "description": "High-quality jeans with a comfortable fit and durable fabric.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "চমৎকার ফিট এবং মানসম্মত।" },
          { "username": "সাব্দা", "rating": 4.2, "comment": "দারুন ডিজাইন এবং আরামদায়ক।" }
        ]
      },
      {
        "id": 703,
        "name": "Sneakers",
        "price": "৭,০০০ ৳",
        "images": ["/images/sneakers_1.webp", "/images/sneakers_2.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 7,
        "description": "Stylish sneakers with excellent comfort and durability.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "আরামদায়ক এবং ট্রেন্ডি।" },
          { "username": "নিলয়", "rating": 4.6, "comment": "চমৎকার পারফরমেন্স এবং স্টাইল।" }
        ]
      },
      {
        "id": 704,
        "name": "Leather Jacket",
        "price": "১২,০০০ ৳",
        "images": ["/images/leatherJacket_1.webp", "/images/leatherJacket_2.webp"],
        "rating": 4.5,
        "is_featured": false,
        "category_id": 7,
        "description": "Premium leather jacket with a stylish design and comfortable fit.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 4, "comment": "দারুন ডিজাইন এবং মানসম্মত।" },
          { "username": "রুবিনা", "rating": 4.5, "comment": "স্টাইলিশ এবং আরামদায়ক।" }
        ]
      },
      {
        "id": 705,
        "name": "Wrist Watch",
        "price": "১০,০০০ ৳",
        "images": ["/images/wristWatch_1.webp", "/images/wristWatch_2.webp"],
        "rating": 4.4,
        "is_featured": true,
        "category_id": 7,
        "description": "Elegant wrist watch with a classic design and reliable movement.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "স্টাইলিশ এবং কার্যকরী।" },
          { "username": "নিলয়", "rating": 4.4, "comment": "দারুন ডিজাইন এবং দীর্ঘস্থায়ী।" }
        ]
      },
      {
        "id": 706,
        "name": "Sunglasses",
        "price": "৪,০০০ ৳",
        "images": ["/images/sunglasses_1.webp", "/images/sunglasses_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 7,
        "description": "Stylish sunglasses with UV protection and durable frames.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন ডিজাইন এবং কার্যকরী।" },
          { "username": "সাব্দা", "rating": 4.3, "comment": "স্টাইলিশ এবং আরামদায়ক।" }
        ]
      },
      {
        "id": 801,
        "name": "Basketball",
        "price": "২,০০০ ৳",
        "images": ["/images/basketball_1.webp", "/images/basketball_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 8,
        "description": "Official size basketball suitable for indoor and outdoor play.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "চমৎকার গুণমান এবং টেকসই।" },
          { "username": "নিলয়", "rating": 4.5, "comment": "স্ট্যান্ডার্ড সাইজ এবং ভাল গ্রিপ।" }
        ]
      },
      {
        "id": 802,
        "name": "Tennis Racket",
        "price": "৩,৫০০ ৳",
        "images": ["/images/tennisRacket_1.webp", "/images/tennisRacket_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 8,
        "description": "Lightweight tennis racket with excellent balance and control.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "আকর্ষণীয় এবং আরামদায়ক।" },
          { "username": "সাব্দা", "rating": 4.2, "comment": "দারুন ভারসাম্য এবং কন্ট্রোল।" }
        ]
      },
      {
        "id": 803,
        "name": "Art Paint Set",
        "price": "৫,০০০ ৳",
        "images": ["/images/artPaintSet_1.webp", "/images/artPaintSet_2.webp"],
        "rating": 4.7,
        "is_featured": true,
        "category_id": 8,
        "description": "Comprehensive art paint set with a variety of colors for all your creative needs.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "রঙের পরিমাণ এবং মান চমৎকার।" },
          { "username": "রুবিনা", "rating": 4.7, "comment": "দারুন কালার প্যালেট এবং সহজ ব্যবহারযোগ্য।" }
        ]
      },
      {
        "id": 804,
        "name": "Sculpture Kit",
        "price": "৪,৫০০ ৳",
        "images": ["/images/sculptureKit_1.webp", "/images/sculptureKit_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 8,
        "description": "Sculpture kit with all necessary tools for creating detailed artwork.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "আকর্ষণীয় এবং কার্যকরী।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "দারুন টুলস এবং মানসম্মত।" }
        ]
      },
      {
        "id": 805,
        "name": "Yoga Mat",
        "price": "১,৫০০ ৳",
        "images": ["/images/yogaMat_1.webp", "/images/yogaMat_2.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 8,
        "description": "Non-slip yoga mat with excellent cushioning for comfortable workouts.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 4, "comment": "আরামদায়ক এবং ভালো গ্রিপ।" },
          { "username": "রুবিনা", "rating": 4.6, "comment": "দারুন আরাম এবং টেকসই।" }
        ]
      },
      {
        "id": 806,
        "name": "Fitness Tracker",
        "price": "৩,০০০ ৳",
        "images": ["/images/fitnessTracker_1.webp", "/images/fitnessTracker_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 8,
        "description": "Advanced fitness tracker with heart rate monitoring and activity tracking.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন ফিচারস এবং ব্যবহার সহজ।" },
          { "username": "সাব্দা", "rating": 4.2, "comment": "দারুন পারফরমেন্স এবং ব্যাটারি লাইফ।" }
        ]
      },
      {
        "id": 901,
        "name": "Factory Machine",
        "price": "৫,০০,০০,০০০ ৳",
        "images": ["/images/factoryMachine_1.webp", "/images/factoryMachine_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 9,
        "description": "High-efficiency factory machine designed for large-scale production.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "অসাধারণ কর্মক্ষমতা এবং টেকসই।" },
          { "username": "নিলয়", "rating": 4.5, "comment": "দারুন ডিজাইন এবং সহজ ব্যবহারের জন্য।" }
        ]
      },
      {
        "id": 902,
        "name": "Industrial Compressor",
        "price": "৭,০০,০০,০০০ ৳",
        "images": ["/images/industrialCompressor_1.webp", "/images/industrialCompressor_2.webp"],
        "rating": 4.8,
        "is_featured": false,
        "category_id": 9,
        "description": "Reliable industrial compressor with high air output and energy efficiency.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "চমৎকার কর্মক্ষমতা এবং নির্ভরযোগ্য।" },
          { "username": "সাব্দা", "rating": 4.8, "comment": "দারুন ফিচারস এবং কার্যকরী।" }
        ]
      },
      {
        "id": 903,
        "name": "Packaging Machine",
        "price": "১০,০০,০০,০০০ ৳",
        "images": ["/images/packagingMachine_1.webp", "/images/packagingMachine_2.webp"],
        "rating": 4.7,
        "is_featured": true,
        "category_id": 9,
        "description": "Automated packaging machine with precision and high-speed operation.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "অত্যন্ত কার্যকরী এবং দক্ষ।" },
          { "username": "রুবিনা", "rating": 4.7, "comment": "দারুন পারফরমেন্স এবং নির্ভরযোগ্য।" }
        ]
      },
      {
        "id": 904,
        "name": "Textile Machine",
        "price": "৮,০০,০০,০০০ ৳",
        "images": ["/images/textileMachine_1.webp", "/images/textileMachine_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 9,
        "description": "High-speed textile machine suitable for large-scale fabric production.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন কর্মক্ষমতা এবং নির্ভরযোগ্য।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "দারুন ফিচারস এবং সহজ ব্যবহারের জন্য।" }
        ]
      },
      {
        "id": 905,
        "name": "Metal Cutting Machine",
        "price": "১২,০০,০০,০০০ ৳",
        "images": ["/images/metalCuttingMachine_1.webp", "/images/metalCuttingMachine_2.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 9,
        "description": "Advanced metal cutting machine with precision and high-speed operation.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "অসাধারণ পারফরমেন্স এবং নির্ভরযোগ্য।" },
          { "username": "নিলয়", "rating": 4.6, "comment": "দারুন ফিচারস এবং কার্যকরী।" }
        ]
      },
      {
        "id": 906,
        "name": "Assembly Line",
        "price": "১৫,০০,০০,০০০ ৳",
        "images": ["/images/assemblyLine_1.webp", "/images/assemblyLine_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 9,
        "description": "Efficient assembly line setup designed for high-volume manufacturing.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন ডিজাইন এবং কার্যকরী।" },
          { "username": "সাব্দা", "rating": 4.2, "comment": "দারুন পারফরমেন্স এবং দক্ষ।" }
        ]
      },
      {
        "id": 1001,
        "name": "Advanced Microscope",
        "price": "৮,০০,০০০ ৳",
        "images": ["/images/microscope_1.webp", "/images/microscope_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 10,
        "description": "Advanced microscope with high-resolution optics for detailed observations.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "অসাধারণ ক্লিয়ারিটি এবং ফিচারস।" },
          { "username": "নিলয়", "rating": 4.5, "comment": "দারুন পারফরমেন্স এবং সহজ ব্যবহারযোগ্য।" }
        ]
      },
      {
        "id": 1002,
        "name": "Laboratory Set",
        "price": "৫,০০,০০০ ৳",
        "images": ["/images/labSet_1.webp", "/images/labSet_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 10,
        "description": "Comprehensive laboratory set with all necessary tools for experiments.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "চমৎকার ফিচারস এবং মানসম্মত।" },
          { "username": "সাব্দা", "rating": 4.2, "comment": "দারুন ডিজাইন এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1003,
        "name": "Educational Software",
        "price": "৪,০০,০০০ ৳",
        "images": ["/images/educationalSoftware_1.webp", "/images/educationalSoftware_2.webp"],
        "rating": 4.7,
        "is_featured": true,
        "category_id": 10,
        "description": "Educational software designed to enhance learning and interactive experiences.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "দারুন ইন্টারফেস এবং শিক্ষণীয়।" },
          { "username": "রুবিনা", "rating": 4.7, "comment": "সহজ ব্যবহারযোগ্য এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1004,
        "name": "Smart Classroom Kit",
        "price": "৬,০০,০০০ ৳",
        "images": ["/images/smartClassroomKit_1.webp", "/images/smartClassroomKit_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 10,
        "description": "Smart classroom kit equipped with interactive tools and digital learning resources.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন টুলস এবং শিক্ষণীয়।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "চমৎকার ফিচারস এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1005,
        "name": "Projector",
        "price": "৫,০০,০০০ ৳",
        "images": ["/images/projector_1.webp", "/images/projector_2.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 10,
        "description": "High-definition projector perfect for classrooms and educational presentations.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন ছবি কোয়ালিটি এবং সহজ ব্যবহার।" },
          { "username": "সাব্দা", "rating": 4.6, "comment": "চমৎকার পারফরমেন্স এবং মানসম্মত।" }
        ]
      },
      {
        "id": 1101,
        "name": "Shopping Cart",
        "price": "১,০০,০০০ ৳",
        "images": ["/images/shoppingCart_1.webp", "/images/shoppingCart_2.webp"],
        "rating": 4.2,
        "is_featured": false,
        "category_id": 11,
        "description": "Durable and spacious shopping cart for everyday use.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "আরামদায়ক এবং ভালো গ্রিপ।" },
          { "username": "নিলয়", "rating": 4.2, "comment": "চমৎকার মান এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1102,
        "name": "Kitchen Set",
        "price": "৪,০০,০০০ ৳",
        "images": ["/images/kitchenSet_1.webp", "/images/kitchenSet_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 11,
        "description": "Comprehensive kitchen set with all essential tools for cooking and baking.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "দারুন মান এবং কার্যকরী।" },
          { "username": "রুবিনা", "rating": 4.5, "comment": "সবকিছু আছে যা দরকার।" }
        ]
      },
      {
        "id": 1103,
        "name": "Cleaning Supplies Kit",
        "price": "৩,০০,০০০ ৳",
        "images": ["/images/cleaningSupplies_1.webp", "/images/cleaningSupplies_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 11,
        "description": "All-in-one cleaning supplies kit for maintaining a clean and healthy home.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন প্রোডাক্ট এবং কার্যকরী।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "বেশ ভালো মান এবং সহজ ব্যবহারযোগ্য।" }
        ]
      },
      {
        "id": 1104,
        "name": "Storage Boxes",
        "price": "২,০০,০০০ ৳",
        "images": ["/images/storageBoxes_1.webp", "/images/storageBoxes_2.webp"],
        "rating": 4.1,
        "is_featured": true,
        "category_id": 11,
        "description": "Durable storage boxes for organizing your home efficiently.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "চমৎকার মান এবং কার্যকরী।" },
          { "username": "সাব্দা", "rating": 4.1, "comment": "দারুন ডিজাইন এবং স্পেসিয়াস।" }
        ]
      },
      {
        "id": 1105,
        "name": "Laundry Basket",
        "price": "১,৫০০ ৳",
        "images": ["/images/laundryBasket_1.webp", "/images/laundryBasket_2.webp"],
        "rating": 4.4,
        "is_featured": false,
        "category_id": 11,
        "description": "Sturdy and spacious laundry basket for convenient use.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন মান এবং কার্যকরী।" },
          { "username": "নিলয়", "rating": 4.4, "comment": "চমৎকার ডিজাইন এবং সহজ ব্যবহারযোগ্য।" }
        ]
      },
      {
        "id": 1106,
        "name": "Dish Set",
        "price": "২,৫০০ ৳",
        "images": ["/images/dishSet_1.webp", "/images/dishSet_2.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 11,
        "description": "Elegant dish set with plates, bowls, and utensils for your dining needs.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "দারুন ডিজাইন এবং মানসম্মত।" },
          { "username": "রুবিনা", "rating": 4.6, "comment": "চমৎকার মান এবং স্টাইলিশ।" }
        ]
      },
      {
        "id": 1201,
        "name": "Tractor",
        "price": "৫,০০,০০,০০০ ৳",
        "images": ["/images/tractor_1.webp", "/images/tractor_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 12,
        "description": "Heavy-duty tractor designed for efficient farming and agricultural tasks.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "দারুন পারফরমেন্স এবং নির্ভরযোগ্য।" },
          { "username": "নিলয়", "rating": 4.5, "comment": "অত্যন্ত কার্যকরী এবং টেকসই।" }
        ]
      },
      {
        "id": 1202,
        "name": "Fertilizer Spreaders",
        "price": "৩,০০,০০,০০০ ৳",
        "images": ["/images/fertilizerSpreader_1.webp", "/images/fertilizerSpreader_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 12,
        "description": "Efficient fertilizer spreaders for uniform distribution and improved crop yield.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন পারফরমেন্স এবং সহজ ব্যবহারযোগ্য।" },
          { "username": "সাব্দা", "rating": 4.3, "comment": "চমৎকার ডিজাইন এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1203,
        "name": "Irrigation Systems",
        "price": "৪,০০,০০,০০০ ৳",
        "images": ["/images/irrigationSystem_1.webp", "/images/irrigationSystem_2.webp"],
        "rating": 4.7,
        "is_featured": true,
        "category_id": 12,
        "description": "Advanced irrigation systems for efficient water management and crop health.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "দারুন কার্যকরী এবং টেকসই।" },
          { "username": "রুবিনা", "rating": 4.7, "comment": "চমৎকার মান এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1204,
        "name": "Harvesting Machines",
        "price": "৬,০০,০০,০০০ ৳",
        "images": ["/images/harvestingMachine_1.webp", "/images/harvestingMachine_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 12,
        "description": "High-efficiency harvesting machines designed for large-scale agricultural operations.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "চমৎকার পারফরমেন্স এবং নির্ভরযোগ্য।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "দারুন ডিজাইন এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1205,
        "name": "Crop Dusters",
        "price": "৫,০০,০০,০০০ ৳",
        "images": ["/images/cropDuster_1.webp", "/images/cropDuster_2.webp"],
        "rating": 4.2,
        "is_featured": true,
        "category_id": 12,
        "description": "Efficient crop duster machines for precise pesticide and fertilizer application.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন পারফরমেন্স এবং কার্যকরী।" },
          { "username": "সাব্দা", "rating": 4.2, "comment": "চমৎকার ডিজাইন এবং ব্যবহার সহজ।" }
        ]
      },
      {
        "id": 1206,
        "name": "Ploughs",
        "price": "২,০০,০০,০০০ ৳",
        "images": ["/images/plough_1.webp", "/images/plough_2.webp"],
        "rating": 4.1,
        "is_featured": false,
        "category_id": 12,
        "description": "Durable ploughs designed for efficient soil tilling and preparation.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন ডিজাইন এবং কার্যকরী।" },
          { "username": "নিলয়", "rating": 4.1, "comment": "চমৎকার পারফরমেন্স এবং নির্ভরযোগ্য।" }
        ]
      },
      {
        "id": 1301,
        "name": "Industrial Drill",
        "price": "৪,০০,০০,০০০ ৳",
        "images": ["/images/industrialDrill_1.webp", "/images/industrialDrill_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 13,
        "description": "High-powered industrial drill designed for heavy-duty applications.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "অত্যন্ত কার্যকরী এবং শক্তিশালী।" },
          { "username": "নিলয়", "rating": 4.5, "comment": "দারুন পারফরমেন্স এবং টেকসই।" }
        ]
      },
      {
        "id": 1302,
        "name": "Welding Machine",
        "price": "৩,০০,০০,০০০ ৳",
        "images": ["/images/weldingMachine_1.webp", "/images/weldingMachine_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 13,
        "description": "Advanced welding machine with multiple settings for various types of welding.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "চমৎকার পারফরমেন্স এবং সহজ ব্যবহারযোগ্য।" },
          { "username": "সাব্দা", "rating": 4.3, "comment": "দারুন ডিজাইন এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1303,
        "name": "CNC Router",
        "price": "৫,০০,০০,০০০ ৳",
        "images": ["/images/cnCRouter_1.webp", "/images/cnCRouter_2.webp"],
        "rating": 4.7,
        "is_featured": true,
        "category_id": 13,
        "description": "Precision CNC router for detailed cutting and carving in various materials.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "অসাধারণ নির্ভুলতা এবং কার্যকরী।" },
          { "username": "রুবিনা", "rating": 4.7, "comment": "দারুন পারফরমেন্স এবং ব্যবহার সহজ।" }
        ]
      },
      {
        "id": 1304,
        "name": "Power Saw",
        "price": "৩,০০,০০,০০০ ৳",
        "images": ["/images/powerSaw_1.webp", "/images/powerSaw_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 13,
        "description": "High-efficiency power saw suitable for cutting various materials with precision.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন পারফরমেন্স এবং নির্ভরযোগ্য।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "চমৎকার ডিজাইন এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1305,
        "name": "Air Compressor",
        "price": "৬,০০,০০,০০০ ৳",
        "images": ["/images/airCompressor_1.webp", "/images/airCompressor_2.webp"],
        "rating": 4.2,
        "is_featured": true,
        "category_id": 13,
        "description": "Industrial-grade air compressor with high output and energy efficiency.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন পারফরমেন্স এবং কার্যকরী।" },
          { "username": "সাব্দা", "rating": 4.2, "comment": "চমৎকার ডিজাইন এবং নির্ভরযোগ্য।" }
        ]
      },
      {
        "id": 1306,
        "name": "Hydraulic Press",
        "price": "২,০০,০০,০০০ ৳",
        "images": ["/images/hydraulicPress_1.webp", "/images/hydraulicPress_2.webp"],
        "rating": 4.1,
        "is_featured": false,
        "category_id": 13,
        "description": "Heavy-duty hydraulic press for various industrial applications.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন কর্মক্ষমতা এবং নির্ভরযোগ্য।" },
          { "username": "নিলয়", "rating": 4.1, "comment": "চমৎকার ডিজাইন এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1401,
        "name": "Job Portal Subscription",
        "price": "১০,০০,০০০ ৳",
        "images": ["/images/jobPortalSubscription_1.webp", "/images/jobPortalSubscription_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 14,
        "description": "Premium subscription to our job portal with enhanced visibility and features.",
        "reviews": [
          { "username": "আনিস", "rating": 5, "comment": "অসাধারণ সুবিধা এবং ফিচারস।" },
          { "username": "নিলয়", "rating": 4.5, "comment": "দারুন মান এবং কার্যকরী।" }
        ]
      },
      {
        "id": 1402,
        "name": "Career Counseling Session",
        "price": "৫,০০,০০০ ৳",
        "images": ["/images/careerCounseling_1.webp", "/images/careerCounseling_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 14,
        "description": "One-on-one career counseling sessions to help you achieve your professional goals.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন পরামর্শ এবং সহায়ক।" },
          { "username": "সাব্দা", "rating": 4.3, "comment": "চমৎকার কাউন্সেলিং এবং গাইডেন্স।" }
        ]
      },
      {
        "id": 1403,
        "name": "Resume Writing Service",
        "price": "৩,০০,০০০ ৳",
        "images": ["/images/resumeWritingService_1.webp", "/images/resumeWritingService_2.webp"],
        "rating": 4.7,
        "is_featured": true,
        "category_id": 14,
        "description": "Professional resume writing service to enhance your job applications.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "দারুন সার্ভিস এবং মানসম্মত।" },
          { "username": "রুবিনা", "rating": 4.7, "comment": "চমৎকার রিজিউমে এবং সহায়ক।" }
        ]
      },
      {
        "id": 1404,
        "name": "Interview Preparation Kit",
        "price": "৪,০০,০০০ ৳",
        "images": ["/images/interviewPrepKit_1.webp", "/images/interviewPrepKit_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 14,
        "description": "Comprehensive interview preparation kit with tips and practice materials.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন টিপস এবং উপকারী।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "চমৎকার প্রস্তুতি এবং গাইডেন্স।" }
        ]
      },
      {
        "id": 1405,
        "name": "Online Job Fairs",
        "price": "৮,০০,০০০ ৳",
        "images": ["/images/onlineJobFair_1.webp", "/images/onlineJobFair_2.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 14,
        "description": "Access to exclusive online job fairs connecting you with top employers.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন সুযোগ এবং যোগাযোগ।" },
          { "username": "সাব্দা", "rating": 4.6, "comment": "চমৎকার ইভেন্ট এবং মানসম্মত।" }
        ]
      },
      {
        "id": 1406,
        "name": "Professional Networking Membership",
        "price": "২,০০,০০০ ৳",
        "images": ["/images/networkingMembership_1.webp", "/images/networkingMembership_2.webp"],
        "rating": 4.1,
        "is_featured": false,
        "category_id": 14,
        "description": "Membership to our professional networking platform for career growth.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন সুবিধা এবং সুযোগ।" },
          { "username": "নিলয়", "rating": 4.1, "comment": "চমৎকার প্ল্যাটফর্ম এবং সুবিধা।" }
        ]
      },
      {
        "id": 1501,
        "name": "International Job Listings",
        "price": "৩,০০,০০,০০০ ৳",
        "images": ["/images/internationalJobListings_1.webp", "/images/internationalJobListings_2.webp"],
        "rating": 4.5,
        "is_featured": true,
        "category_id": 15,
        "description": "Access to a wide range of international job listings across various industries.",
        "reviews": [
          { "username": "আলিফ", "rating": 5, "comment": "অসাধারণ জব লিস্টিং এবং সুযোগ।" },
          { "username": "সাব্দা", "rating": 4.5, "comment": "দারুন মান এবং বিভিন্ন সুযোগ।" }
        ]
      },
      {
        "id": 1502,
        "name": "Visa Assistance Service",
        "price": "৫,০০,০০,০০০ ৳",
        "images": ["/images/visaAssistance_1.webp", "/images/visaAssistance_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 15,
        "description": "Comprehensive visa assistance services for international job seekers.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন সার্ভিস এবং সহায়ক।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "চমৎকার সাহায্য এবং গাইডেন্স।" }
        ]
      },
      {
        "id": 1503,
        "name": "Global Networking Events",
        "price": "৭,০০,০০,০০০ ৳",
        "images": ["/images/globalNetworking_1.webp", "/images/globalNetworking_2.webp"],
        "rating": 4.7,
        "is_featured": true,
        "category_id": 15,
        "description": "Join global networking events to connect with international professionals and employers.",
        "reviews": [
          { "username": "মোহাম্মদ", "rating": 5, "comment": "অসাধারণ ইভেন্ট এবং মানসম্মত।" },
          { "username": "রুবিনা", "rating": 4.7, "comment": "চমৎকার সংযোগ এবং সুযোগ।" }
        ]
      },
      {
        "id": 1504,
        "name": "Language Training Programs",
        "price": "৪,০০,০০,০০০ ৳",
        "images": ["/images/languageTraining_1.webp", "/images/languageTraining_2.webp"],
        "rating": 4.3,
        "is_featured": false,
        "category_id": 15,
        "description": "Comprehensive language training programs to prepare you for international roles.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন প্রশিক্ষণ এবং উপকারী।" },
          { "username": "নিলয়", "rating": 4.3, "comment": "চমৎকার কোর্স এবং শিক্ষক।" }
        ]
      },
      {
        "id": 1505,
        "name": "Relocation Assistance",
        "price": "৬,০০,০০,০০০ ৳",
        "images": ["/images/relocationAssistance_1.webp", "/images/relocationAssistance_2.webp"],
        "rating": 4.6,
        "is_featured": true,
        "category_id": 15,
        "description": "Full relocation assistance services to help you move smoothly to your new country.",
        "reviews": [
          { "username": "আলিফ", "rating": 4, "comment": "দারুন সার্ভিস এবং সহায়ক।" },
          { "username": "সাব্দা", "rating": 4.6, "comment": "চমৎকার সাহায্য এবং গাইডেন্স।" }
        ]
      },
      {
        "id": 1506,
        "name": "International Certification Courses",
        "price": "২,০০,০০,০০০ ৳",
        "images": ["/images/internationalCertification_1.webp", "/images/internationalCertification_2.webp"],
        "rating": 4.1,
        "is_featured": false,
        "category_id": 15,
        "description": "Gain internationally recognized certifications to enhance your career prospects.",
        "reviews": [
          { "username": "আনিস", "rating": 4, "comment": "দারুন কোর্স এবং মানসম্মত।" },
          { "username": "নিলয়", "rating": 4.1, "comment": "চমৎকার প্রশিক্ষণ এবং সার্টিফিকেশন।" }
        ]
      }
    ]