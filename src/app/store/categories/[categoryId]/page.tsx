'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ProductCard from '@/components/ProductCard'
import { categories, products } from '@/lib/data'
import NotFoundCard from '@/components/NotFoundCard'

export default function CategoryProducts({params}:{params:{categoryId:string}}) {
    const [sortBy, setSortBy] = useState('featured')

    const category = categories.find(c=>c.name==params.categoryId)
    const categoryProducts = products.filter(p=>p.id==category?.id)

    if(!category) return <NotFoundCard />

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">{category.name}</h1>

            <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">{categoryProducts.length} products</p>
                <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                        <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                        <SelectItem value="newest">Newest Arrivals</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Button variant="outline" className="mr-2">Previous</Button>
                <Button variant="outline" className="mr-2">1</Button>
                <Button variant="outline" className="mr-2">2</Button>
                <Button variant="outline" className="mr-2">3</Button>
                <Button variant="outline">Next</Button>
            </div>
        </div>
    )
}