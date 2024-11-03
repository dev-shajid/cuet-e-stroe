import { Button } from "@/components/ui/button"
import { LinkButton } from "../ui/link-button"
import BlurImage from "../BlurImage"

export function HeroSection() {
  return (
    <>
      {/* <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-1">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="">
                Welcome to CUET Student Marketplace
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
                Buy, sell, and connect with your fellow students. Your one-stop shop for all things CUET.
              </p>
            </div>
            <div className="space-x-4">
              <LinkButton href="/store" size="lg" variant='gradient'>
                Get Started
              </LinkButton>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-2 max-w-lg text-center md:text-left">
            <h1>
              Welcome to CUET Student Marketplace
            </h1>
            <p className="mx-auto text-muted-foreground">
              Buy, sell, and connect with your fellow students. Your one-stop shop for all things CUET.
            </p>
            <LinkButton href="/store" size="lg" className="mt-6">
              Get Started
            </LinkButton>
          </div>
          <div className="relative">
            <BlurImage
              src="/banner.png"
              alt="Hero Image"
              className="d drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  )
}
