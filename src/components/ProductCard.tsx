import React from 'react'

import { Card, CardContent, CardFooter } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

interface ProductCardProps {
    product: {
        id: number
        name: string
        price: string
        rating: number
        image: string
    }
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <Card key={product.id} className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-0 relative bg-muted aspect-square overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 hover:scale-110"
                />
            </CardContent>
            <CardFooter className="space-y-2 grid py-4">
                <Link href={`/store/products/${product.id}`} className="block font- hover:text-primary transition-colors">
                    {product.name.length > 20 ? `${product.name.slice(0, 20)}...` : product.name}
                </Link>
                <div className="flex items-center scale-75 origin-left">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-primary' : 'text-muted'
                                }`}
                            fill="currentColor"
                        />
                    ))}
                    <span className="ml-2 text-xs text-muted-foreground">
                        {product.rating}
                    </span>
                </div>
                <p className="text-base font-semibold">{product.price}</p>
            </CardFooter>
        </Card>
    )
}
