/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/XKI1Ko3T0eK
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function aisoftbrand() {
  return (
    <div className="flex flex-col min-h-dvh">
      <div className="bg-gradient-to-r from-primary to-secondary py-2 text-primary-foreground">
        <div className="container flex items-center justify-center">
          <div className="text-sm font-medium marquee-text">
            Free shipping on all orders over $50 | 30-day money back guarantee
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Products
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full bg-gradient-to-r from-[#D1FAE5] to-secondary py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center gap-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Unlock the Power of Web Development
              </h1>
              <p className="max-w-[700px] text-lg text-primary-foreground md:text-xl">
                Discover the ultimate platform for building the web. Unleash your creativity and deliver exceptional
                digital experiences.
              </p>
            </div>
            <form className="w-full max-w-md space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md bg-primary-foreground px-4 py-3 text-primary"
              />
              <Button type="submit" className="w-full">
                Get Started
              </Button>
            </form>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 320" className="fill-background" preserveAspectRatio="none">
              <path d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,192C672,203,768,181,864,165.3C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </svg>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:grid-cols-3 lg:gap-16">
            <Card className="group relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Website Designing"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <CardContent className="absolute inset-0 bg-gradient-to-t from-[#D1FAE5]/80 to-transparent p-6">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-2xl font-bold text-foreground">Website Designing</h3>
                  <p className="mt-2 text-muted-foreground">
                    Discover the ultimate solution for your web design needs.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="App Development"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <CardContent className="absolute inset-0 bg-gradient-to-t from-[#D1FAE5]/80 to-transparent p-6">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-2xl font-bold text-foreground">App Development</h3>
                  <p className="mt-2 text-muted-foreground">
                    Elevate your business with our innovative mobile solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="E-commerce Solutions"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <CardContent className="absolute inset-0 bg-gradient-to-t from-[#D1FAE5]/80 to-transparent p-6">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-2xl font-bold text-foreground">E-commerce Solutions</h3>
                  <p className="mt-2 text-muted-foreground">
                    Transform your digital landscape with our cutting-edge e-commerce solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:grid-cols-3 lg:gap-16">
            <Card className="group relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Website Optimization"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <CardContent className="absolute inset-0 bg-gradient-to-t from-[#D1FAE5]/80 to-transparent p-6">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-2xl font-bold text-foreground">Website Optimization</h3>
                  <p className="mt-2 text-muted-foreground">
                    Unlock new possibilities with our cutting-edge website optimization services.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Digital Marketing"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <CardContent className="absolute inset-0 bg-gradient-to-t from-[#D1FAE5]/80 to-transparent p-6">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-2xl font-bold text-foreground">Digital Marketing</h3>
                  <p className="mt-2 text-muted-foreground">
                    Elevate your online presence with our comprehensive digital marketing solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Cloud Services"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <CardContent className="absolute inset-0 bg-gradient-to-t from-[#D1FAE5]/80 to-transparent p-6">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-2xl font-bold text-foreground">Cloud Services</h3>
                  <p className="mt-2 text-muted-foreground">
                    Transform your business with our cutting-edge cloud computing solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:grid-cols-3 lg:gap-16">
            <Card className="group relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Clients"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <CardContent className="absolute inset-0 bg-gradient-to-t from-[#D1FAE5]/80 to-transparent p-6">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-2xl font-bold text-foreground">Clients</h3>
                  <p className="mt-2 text-muted-foreground">Learn more about our valued clients.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="group relative overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Our Team"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <CardContent className="absolute inset-0 bg-gradient-to-t from-[#D1FAE5]/80 to-transparent p-6">
                <div className="flex h-full flex-col justify-end">
                  <h3 className="text-2xl font-bold text-foreground">Our Team</h3>
                  <p className="mt-2 text-muted-foreground">Meet the talented individuals behind our success.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-sm">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline underline-offset-4" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
      <div className="fixed bottom-4 left-4 z-50">
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          prefetch={false}
        >
          <PhoneIcon className="h-6 w-6" />
          <span className="sr-only">WhatsApp</span>
        </Link>
      </div>
    </div>
  )
}

function MountainIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PhoneIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
