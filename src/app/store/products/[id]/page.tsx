'use client';

import { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export default function Component() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedImage, setSelectedImage] = useState(0); // For image selection

  const product = {
    name: "Men's Classic Fit Crew Neck T-Shirt",
    price: 29.99,
    rating: 4.5,
    description: 'Experience comfort and style with our classic fit crew neck t-shirt. Perfect for everyday wear, this versatile piece is a must-have in every wardrobe.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      '/placeholder.webp',
      '/placeholder.webp',
      '/placeholder.webp',
      '/placeholder.webp',
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image Gallery */}
        <div className="space-y-4 w-full">
          {/* Main Image Display */}
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.images[selectedImage]}
              alt={`${product.name} - Main View`}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Image Thumbnails */}
          <div className="grid grid-cols-4 xs:grid-cols-6 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  `aspect-square overflow-hidden rounded-lg cursor-pointer bg-muted`,
                  selectedImage === index ? 'ring-2 ring-primary' : ''
                )}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} - Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${index < Math.floor(product.rating) ? 'text-yellow-500' : 'text-muted'
                    }`}
                  fill="currentColor"
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">{product.rating} stars</span>
            </div>
          </div>
          <p className="text-muted-foreground">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium">Size</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  onClick={() => setSelectedSize(size)}
                  className="px-3 py-1"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Description Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description" className="w-full !h-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description" className="flex-1 px-4 py-2">
              Description
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 px-4 py-2">
              Reviews
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex-1 px-4 py-2">
              Contact
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Product Description</h2>
              <p className="text-muted-foreground">
                Our classic fit crew neck t-shirt is made from premium cotton for ultimate comfort. The versatile design makes it perfect for casual outings or layering under your favorite jacket. With its soft texture and durable construction, this t-shirt is designed to withstand frequent wear and washing, ensuring it remains a staple in your wardrobe for years to come.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Product Details</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>100% premium cotton for breathability and comfort</li>
                <li>Classic fit for a relaxed, easy wear</li>
                <li>Ribbed crew neck for durability</li>
                <li>Machine washable for easy care</li>
                <li>Available in multiple colors to suit your style</li>
                <li>Tagless label for itch-free comfort</li>
                <li>Reinforced shoulder seams for added durability</li>
                <li>Imported</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${index < 4 ? 'text-yellow-500' : 'text-muted'}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-muted-foreground">
                    4.0 out of 5
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Great t-shirt! The fabric is soft and comfortable, and the fit is perfect. Ive
                  washed it several times now, and its holding up well. Definitely recommend"
                </p>
                <p className="text-sm text-muted-foreground mt-1">- John D., Verified Buyer</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="contact" className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Contact Seller</h2>
            <div className="space-y-4">
                  
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
