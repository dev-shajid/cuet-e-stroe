'use client'

import { cardAnimation, gridAnimation } from '@/components/Animations'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { MapPin, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const categories = [
  { name: 'মোবাইল', icon: 'mdi:cellphone', count: '৩১,২৭৭' },
  { name: 'ইলেকট্রনিক্স', icon: 'mdi:desktop-classic', count: '৫১,৬৫৪' },
  { name: 'যানবাহন', icon: 'mdi:car', count: '২৯,১৫৯' },
  { name: 'প্রপার্টি', icon: 'mdi:home', count: '১৮,৬৮৩' },
  { name: 'হোম এবং লিভিং', icon: 'mdi:sofa', count: '১৭,৯১১' },
  { name: 'পোশা প্রাণী ও জীবজন্তু', icon: 'mdi:paw', count: '১৪,৭৪১' },
  { name: 'মেয়েদের ফ্যাশন ও সৌন্দর্য', icon: 'mdi:dress', count: '৮,৪৪৪' },
  { name: 'ছেলেদের ফ্যাশন ও কটিং', icon: 'mdi:tshirt-crew', count: '৭,৯১৪' },
  { name: 'খেলাধুলা এবং শিল্প', icon: 'mdi:basketball', count: '৭,৩০৭' },
  { name: 'ব্যবসা ও শিল্পকারখানা', icon: 'mdi:factory', count: '৩,২৪২' },
  { name: 'শিক্ষা', icon: 'mdi:school', count: '২,৯৬৮' },
  { name: 'নিত্য প্রয়োজনীয় সামগ্রী', icon: 'mdi:shopping', count: '২,৬৬৮' },
  { name: 'কৃষি পণ্য', icon: 'mdi:sprout', count: '৮৩০' },
  { name: 'সার্ভিস', icon: 'mdi:tools', count: '৭৬৯' },
  { name: 'চাকরি', icon: 'mdi:briefcase', count: '৭০৩' },
  { name: 'বিদেশে চাকরি', icon: 'mdi:airplane', count: '৫২' },
]

const products = [
  {
    category: 'মোবাইল',
    products: [
      { id: 1, name: 'iPhone 13 Pro', price: '১১০,০০০ ৳', image: '/placeholder.webp', rating: 4.5 },
      { id: 2, name: 'Samsung Galaxy S21', price: '৯৫,০০০ ৳', image: '/placeholder.webp', rating: 4.2 },
      { id: 3, name: 'Xiaomi Redmi Note 10', price: '২০,০০০ ৳', image: '/placeholder.webp', rating: 4.0 },
      { id: 4, name: 'OnePlus 9', price: '৬৫,০০০ ৳', image: '/placeholder.webp', rating: 4.3 },
      { id: 5, name: 'Realme 8 Pro', price: '২৫,০০০ ৳', image: '/placeholder.webp', rating: 4.1 },
      { id: 6, name: 'Google Pixel 5', price: '৮০,০০০ ৳', image: '/placeholder.webp', rating: 4.6 },
    ]
  },
  {
    category: 'ইলেকট্রনিক্স',
    products: [
      { id: 1, name: 'Samsung 4K Smart TV', price: '৭৫,০০০ ৳', image: '/placeholder.webp', rating: 4.4 },
      { id: 2, name: 'Sony PlayStation 5', price: '৬০,০০০ ৳', image: '/placeholder.webp', rating: 4.8 },
      { id: 3, name: 'MacBook Air M1', price: '১২০,০০০ ৳', image: '/placeholder.webp', rating: 4.7 },
      { id: 4, name: 'Bose QuietComfort Earbuds', price: '২৫,০০০ ৳', image: '/placeholder.webp', rating: 4.6 },
      { id: 5, name: 'Apple iPad Pro', price: '১১০,০০০ ৳', image: '/placeholder.webp', rating: 4.9 },
      { id: 6, name: 'Dell XPS 13', price: '১২০,০০০ ৳', image: '/placeholder.webp', rating: 4.5 },
    ]
  },
  {
    category: 'যানবাহন',
    products: [
      { id: 1, name: 'Toyota Corolla 2020', price: '২২,০০,০০০ ৳', image: '/placeholder.webp', rating: 4.6 },
      { id: 2, name: 'Honda CBR150R', price: '৪,৫০,০০০ ৳', image: '/placeholder.webp', rating: 4.4 },
      { id: 3, name: 'Nissan X-Trail', price: '৩৫,০০,০০০ ৳', image: '/placeholder.webp', rating: 4.7 },
      { id: 4, name: 'Suzuki Gixxer SF', price: '২,২০,০০০ ৳', image: '/placeholder.webp', rating: 4.3 },
      { id: 5, name: 'Yamaha FZ', price: '২,৬০,০০০ ৳', image: '/placeholder.webp', rating: 4.2 },
      { id: 6, name: 'Ford Mustang', price: '৭০,০০,০০০ ৳', image: '/placeholder.webp', rating: 4.9 },
    ]
  },
  {
    category: 'প্রপার্টি',
    products: [
      { id: 1, name: '3 বেড অ্যাপার্টমেন্ট', price: '১,২০,০০,০০০ ৳', image: '/placeholder.webp', rating: 4.5 },
      { id: 2, name: '1000 sqft প্লট', price: '৫০,০০,০০০ ৳', image: '/placeholder.webp', rating: 4.3 },
      { id: 3, name: '2 বেড ফ্ল্যাট', price: '৭০,০০,০০০ ৳', image: '/placeholder.webp', rating: 4.4 },
      { id: 4, name: 'কমার্শিয়াল স্পেস', price: '২,০০,০০,০০০ ৳', image: '/placeholder.webp', rating: 4.8 },
      { id: 5, name: 'Villa', price: '৫,০০,০০,০০০ ৳', image: '/placeholder.webp', rating: 4.9 },
      { id: 6, name: 'Studio Apartment', price: '৪০,০০,০০০ ৳', image: '/placeholder.webp', rating: 4.1 },
    ]
  },
  {
    category: 'হোম এবং লিভিং',
    products: [
      { id: 1, name: 'Sofa Set', price: '৪৫,০০০ ৳', image: '/placeholder.webp', rating: 4.3 },
      { id: 2, name: 'Dining Table', price: '৩০,০০০ ৳', image: '/placeholder.webp', rating: 4.2 },
      { id: 3, name: 'Queen Size Bed', price: '৬০,০০০ ৳', image: '/placeholder.webp', rating: 4.5 },
      { id: 4, name: 'Wardrobe', price: '৫০,০০০ ৳', image: '/placeholder.webp', rating: 4.4 },
      { id: 5, name: 'Recliner Chair', price: '২৫,০০০ ৳', image: '/placeholder.webp', rating: 4.3 },
      { id: 6, name: 'Coffee Table', price: '২০,০০০ ৳', image: '/placeholder.webp', rating: 4.6 },
    ]
  },
  {
    category: 'পোশা প্রাণী ও জীবজন্তু',
    products: [
      { id: 1, name: 'Persian Cat', price: '২৫,০০০ ৳', image: '/placeholder.webp', rating: 4.7 },
      { id: 2, name: 'German Shepherd Dog', price: '৭০,০০০ ৳', image: '/placeholder.webp', rating: 4.8 },
      { id: 3, name: 'Parrot Pair', price: '১৫,০০০ ৳', image: '/placeholder.webp', rating: 4.5 },
      { id: 4, name: 'Rabbit', price: '৫,০০০ ৳', image: '/placeholder.webp', rating: 4.2 },
      { id: 5, name: 'Hamster', price: '২,০০০ ৳', image: '/placeholder.webp', rating: 4.1 },
      { id: 6, name: 'Goldfish', price: '১,০০০ ৳', image: '/placeholder.webp', rating: 4.3 },
    ]
  },
  {
    category: 'মেয়েদের ফ্যাশন ও সৌন্দর্য',
    products: [
      { id: 1, name: 'Saree', price: '১৫,০০০ ৳', image: '/placeholder.webp', rating: 4.4 },
      { id: 2, name: 'Makeup Kit', price: '৫,০০০ ৳', image: '/placeholder.webp', rating: 4.5 },
      { id: 3, name: 'Jewelry Set', price: '১০,০০০ ৳', image: '/placeholder.webp', rating: 4.3 },
      { id: 4, name: 'Kurti', price: '৩,০০০ ৳', image: '/placeholder.webp', rating: 4.2 },
      { id: 5, name: 'Handbag', price: '৮,০০০ ৳', image: '/placeholder.webp', rating: 4.1 },
      { id: 6, name: 'Perfume', price: '৬,০০০ ৳', image: '/placeholder.webp', rating: 4.6 },
    ]
  },
  {
    category: 'ছেলেদের ফ্যাশন ও কটিং',
    products: [
      { id: 1, name: 'T-shirt', price: '১,৫০০ ৳', image: '/placeholder.webp', rating: 4.3 },
      { id: 2, name: 'Jeans', price: '২,৫০০ ৳', image: '/placeholder.webp', rating: 4.2 },
      { id: 3, name: 'Sneakers', price: '৭,০০০ ৳', image: '/placeholder.webp', rating: 4.6 },
      { id: 4, name: 'Leather Jacket', price: '১২,০০০ ৳', image: '/placeholder.webp', rating: 4.5 },
      { id: 5, name: 'Wrist Watch', price: '১০,০০০ ৳', image: '/placeholder.webp', rating: 4.4 },
      { id: 6, name: 'Sunglasses', price: '৪,০০০ ৳', image: '/placeholder.webp', rating: 4.3 },
    ]
  }
];




export default function StorePage() {
  return (
    <div className="min-h-screen container mx-auto items-center flex flex-col justify-center relative">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50%] w-[100%] opacity-20 max-w-full max-h-full bg-gradient-to-br from-purple-700 via-indigo-700 to-background blur-3xl" />


      <div className="relative border backdrop-blur-lg bg-background/20 rounded-lg shadow-xl p-8 w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">ক্যাটাগরি অনুযায়ী ব্রাউজ করুন</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={`/store/categories/${category.name}`} key={category.name}>
              <Card
                key={category.name}
                className="bg-card/30 p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <Icon icon={category.icon} className="text-4xl mb-2" />
                <h2 className="text-lg font-semibold text-center mb-1">{category.name}</h2>
                <p className="text-sm">{category.count} টি বিজ্ঞাপন</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className='w-full'>
        {products.map((product) => (
          <div key={product.category} className="mt-12 backdrop-blur-md bg-background/10">
            <Card className='bg-background/40'>
              <CardHeader>
                <h3 className="text-xl font-semibold">{product.category}</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {product.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}