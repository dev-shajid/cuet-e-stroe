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

export default function CategoryProducts() {
    const [sortBy, setSortBy] = useState('featured')

    // This would typically come from your data fetching logic
    const category = {
        name: "Men's T-Shirts",
        products: [
            { id: 1, name: "Classic Fit Crew Neck T-Shirt", price: "$29.99", rating: 4.5, image: "/placeholder.webp" },
            { id: 2, name: "V-Neck Slim Fit T-Shirt", price: "$24.99", rating: 4.2, image: "/placeholder.webp" },
            { id: 3, name: "Graphic Print Tee", price: "$34.99", rating: 4.7, image: "/placeholder.webp" },
            { id: 4, name: "Long Sleeve Henley T-Shirt", price: "$39.99", rating: 4.4, image: "/placeholder.webp" },
            { id: 5, name: "Striped Polo Shirt", price: "$44.99", rating: 4.6, image: "/placeholder.webp" },
            { id: 6, name: "Moisture-Wicking Sport Tee", price: "$49.99", rating: 4.8, image: "/placeholder.webp" },
        ]
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">{category.name}</h1>

            <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">{category.products.length} products</p>
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
                {category.products.map((product) => (
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