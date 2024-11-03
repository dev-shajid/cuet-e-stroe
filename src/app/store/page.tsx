'use client'

import ProductCard from '@/components/ProductCard'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { categories, products } from '@/lib/data'
import { Icon } from '@iconify/react'
import Link from 'next/link'




export default function StorePage() {
  return (
    <div className="min-h-screen container mx-auto items-center flex flex-col justify-center relative">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50%] w-[100%] opacity-20 max-w-full max-h-full bg-gradient-to-br from-purple-700 via-indigo-700 to-background blur-3xl" />


      <div className="relative border backdrop-blur-lg bg-background/20 rounded-lg shadow-xl p-8 w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">ক্যাটাগরি অনুযায়ী ব্রাউজ করুন</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category) => category.is_featured && (
            <Link href={`/store/categories/${category.id}`} key={category.name}>
              <Card
                key={category.name}
                className="bg-card/30 p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <Icon icon={category.icon} className="text-4xl mb-2" />
                <h2 className="text-lg font-semibold text-center mb-1">{category.name}</h2>
                <p className="text-sm">{category.count}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className='w-full'>
          <Card className='bg-background/40 backdrop-blur-md'>
            <CardHeader>
              <h3 className="text-xl font-semibold">Featured Products</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {products.map((product) => product.is_featured && (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}