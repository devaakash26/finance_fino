import HeroSection from "@/components/herosection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from 'next/image';
import Link from "next/link";


export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      {/* user active section */}
      <section className="py-20 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) => (
              <div className="text-center" key={index}>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {statsData.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{statsData.label} </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10"> Everthing you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4 text-green-600 dark:text-green-400">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100"> {feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300"> {feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10"> How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">{step.title} </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description} </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-gray-100">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold dark:text-gray-100">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-lime-600 dark:bg-lime-800" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-blue-50 dark:bg-gray-100 dark:hover:bg-gray-200 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

    </div>

  );
}
