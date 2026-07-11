import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { SEO } from '@/components/SEO';
const truckPhoto = '/images/trucks/truck7.jpg';
const fleetPhoto = '/images/trucks/truck8.jpeg';
const statesMap = '/images/service-map.png';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Route,
  Truck,
  BadgeDollarSign,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   YouTube Videos
───────────────────────────────────────────────────────────── */
const videos = [
  { id: 'n_jmNaHcwt0', title: 'Driver Testimonial 1' },
  { id: 'Cy00teNyNtk', title: 'Driver Testimonial 2' },
  { id: 'EEe9kEefP3I', title: 'Driver Testimonial 3' },
  { id: 'i5xyWaUdpzs', title: 'Driver Testimonial 4' },
];

/* ─────────────────────────────────────────────────────────────
   Feature Cards Data
───────────────────────────────────────────────────────────── */
const features = [
  {
    icon: Route,
    title: "Dedicated Routes",
    description:
      "Home time and safety are our top priorities. Our dedicated routes keep you close to home while delivering outstanding service.",
  },
  {
    icon: Truck,
    title: "New Equipment",
    description:
      "Our trucks are new and reliable so you are not stuck on the road. We work our hardest to exceed your expectations.",
  },
  {
    icon: BadgeDollarSign,
    title: "Full Benefits",
    description:
      "DP Curtis Trucking offers full benefits including Vacation, Health insurance, and 401k Contributions.",
  },
];

const featureCardThemes = [
  {
    card: 'bg-[#374151] text-white',
    iconWrap: 'bg-white/20',
    icon: 'text-white',
    description: 'text-white/90',
  },
  {
    card: 'bg-[#4b5563] text-white',
    iconWrap: 'bg-white/20',
    icon: 'text-white',
    description: 'text-white/90',
  },
  {
    card: 'bg-[#6b7280] text-white',
    iconWrap: 'bg-white/20',
    icon: 'text-white',
    description: 'text-white/90',
  },
];

/* ─────────────────────────────────────────────────────────────
   States Served
───────────────────────────────────────────────────────────── */
const states = [
  "Utah", "Wyoming", "Colorado", "Arizona", "Nevada",
  "Idaho", "California", "Oregon", "Washington",
  "Montana", "New Mexico", "Kansas", "Canada",
];

/* ─────────────────────────────────────────────────────────────
   Why Choose Us Bullets
───────────────────────────────────────────────────────────── */
const whyChooseUs = [
  "Competitive, substantial earnings that reward your dedication",
  "Comprehensive benefits: Health, Retirement, Vacation & more",
  "New, reliable equipment — you won't be left stranded",
  "Dedicated routes that prioritize home time",
  "A collaborative team environment that fosters growth",
  "Opportunities for career advancement and personal development",
];

/* ─────────────────────────────────────────────────────────────
   Home Page
───────────────────────────────────────────────────────────── */
const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handler — wire to backend when ready
    alert('Thank you! We will be in touch shortly.');
    setFormData({ firstName: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      <SEO
        title="Flatbed & Dry Bulk Trucking | Intermountain West"
        description="D.P. Curtis Trucking — family-owned carrier since 1982. Dedicated routes, new equipment, full benefits (Health, 401k, Vacation). Now hiring CDL drivers across Utah, Idaho, Oregon & the Northwest."
        canonical="/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What states does D.P. Curtis Trucking operate in?",
                "acceptedAnswer": { "@type": "Answer", "text": "D.P. Curtis Trucking serves Utah, Wyoming, Colorado, Arizona, Nevada, Idaho, California, Oregon, Washington, Montana, New Mexico, Kansas, and Canada." }
              },
              {
                "@type": "Question",
                "name": "What benefits does D.P. Curtis Trucking offer drivers?",
                "acceptedAnswer": { "@type": "Answer", "text": "Drivers receive full health insurance, vacation pay, 401k contributions, competitive earnings, dedicated regional routes, and new equipment rotated every 3 years." }
              },
              {
                "@type": "Question",
                "name": "When was D.P. Curtis Trucking founded?",
                "acceptedAnswer": { "@type": "Answer", "text": "D.P. Curtis Trucking was founded in 1982 by Dent P. Curtis as a family business in Richfield, Utah." }
              },
              {
                "@type": "Question",
                "name": "How many trucks does D.P. Curtis Trucking operate?",
                "acceptedAnswer": { "@type": "Answer", "text": "D.P. Curtis Trucking currently operates over 130 tractors across the United States. Tractors are rotated every 3 years and trailers every 5–6 years." }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dpcurtis.com/" }]
          }
        ]}
      />
      <Hero />

      {/* ── Feature Cards ────────────────────────────────────── */}
      <section id="employment-info" className="pt-20 pb-12 bg-background">
        <div className="text-center mb-14 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Drive With Us?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We put our drivers first — with the routes, equipment, and benefits you deserve.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 w-full">
            {features.map(({ icon: Icon, title, description }, index) => {
              const theme = featureCardThemes[index % featureCardThemes.length];

              return (
              <Card key={title} className={`rounded-none border-0 shadow-none ${theme.card}`}>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className={`p-2 rounded-md ${theme.iconWrap}`}>
                    <Icon className={`h-7 w-7 ${theme.icon}`} />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={theme.description}>{description}</p>
                </CardContent>
              </Card>
            )})}
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section id="why-choose-us" className="bg-[#86005e] border-t border-[#86005e]">
        <div className="grid lg:grid-cols-2 items-stretch">
            {/* Text */}
            <div className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16">
              <p className="text-[#e5e7eb] font-semibold uppercase tracking-widest text-sm mb-3">
                Career Opportunity
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose DP Curtis Trucking?</h2>
              <p className="text-[#f3f4f6] mb-6 leading-relaxed">
                Are you ready to elevate your career and be part of a thriving, expanding community
                of expert truck drivers? We extend an invitation to join our accomplished team, where
                you'll find not only a rewarding career but also a future filled with promise and
                possibilities.
              </p>
              <p className="text-[#f3f4f6] mb-8 leading-relaxed">
                At DP Curtis Trucking, we prioritize your well-being and aim to provide you with
                both job stability and financial security. Our commitment to your success is
                unwavering, and that's reflected in the competitive earnings we offer.
              </p>

              <ul className="space-y-3">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#e5e7eb] mt-0.5 shrink-0" />
                    <span className="text-[#f3f4f6]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-4">
                <Button className="bg-white hover:bg-[#e5e7eb] text-[#86005e]" asChild>
                  <a
                    href="https://pulse.tenstreet.com/includes/login_html.php?uri_b=pulse_100&login_method=pulse_app_last_ssn_dob"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Apply Now
                  </a>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#86005e]" asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>

            {/* Truck photo */}
            <div className="h-full min-h-[24rem]">
              <img
                src={truckPhoto}
                alt="DP Curtis Trucking — Kenworth T680"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────── */}
      <section id="our-story" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Fleet photo */}
            <div className="rounded-none overflow-hidden shadow-xl order-last lg:order-first">
              <img
                src={fleetPhoto}
                alt="DP Curtis Trucking fleet on the road"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-[#86005e] font-semibold uppercase tracking-widest text-sm mb-3">
                Est. 1982
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                DP Curtis Trucking, Inc. was founded in 1982 by Dent P. Curtis as a family business.
                He started with one truck and worked throughout Southern Utah until he was able to
                secure contracts with local area shippers.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                He has built his business on honesty, self-discipline, solid ethics, and plain old
                hard work — values that continue to define DP Curtis Trucking to this day.
              </p>
              <Button variant="outline" asChild>
                <a href="/about">Read More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Area ─────────────────────────────────────── */}
      <section id="service-area" className="py-20 bg-[#374151] border-t border-[#374151]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#e5e7eb] font-semibold uppercase tracking-widest text-sm mb-3">
            Where We Operate
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Service Area</h2>
          <p className="text-[#e5e7eb] mb-10 max-w-xl mx-auto">
            From the heart of Utah to the Pacific Coast and beyond, we cover the entire western
            United States and Canada.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {states.map((state) => (
              <span
                key={state}
                className="px-4 py-2 bg-white hover:bg-[#e5e7eb] border border-[#d1d5db] rounded-none text-sm font-medium text-[#86005e] transition-colors cursor-default"
              >
                {state}
              </span>
            ))}
          </div>

          {/* Service area map */}
          <div className="rounded-none overflow-hidden max-w-3xl mx-auto">
            <img
              src={statesMap}
              alt="DP Curtis Trucking service area map — western US states highlighted"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Driver Videos ────────────────────────────────────── */}
      <section id="driver-videos" className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#86005e] font-semibold uppercase tracking-widest text-sm mb-3">
              Hear It From Our Drivers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Out Why Drivers Choose D.P. Curtis Trucking
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't take our word for it — listen to the drivers who live it every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {videos.map(({ id, title }) => (
              <div key={id} className="rounded-none overflow-hidden shadow-md bg-black">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Lead Form ──────────────────────────────── */}
      <section id="contact" className="py-20 bg-[#86005e]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left info */}
            <div>
              <p className="text-[#e5e7eb] font-semibold uppercase tracking-widest text-sm mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Find Out Why Drivers Choose DP Curtis Trucking
              </h2>
              <p className="text-[#e5e7eb] mb-8 leading-relaxed">
                Ready to take the next step? Fill out the form and one of our team members will
                reach out to answer your questions about employment opportunities.
              </p>

              <div className="space-y-5">
                <a href="tel:18002579151" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-white group-hover:bg-[#e5e7eb] transition-colors">
                    <Phone className="h-5 w-5 text-[#86005e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#e5e7eb] uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-semibold text-white">1-800-257-9151</p>
                  </div>
                </a>

                <a href="mailto:helpdesk@dpcurtis.com" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-white group-hover:bg-[#e5e7eb] transition-colors">
                    <Mail className="h-5 w-5 text-[#86005e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#e5e7eb] uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-semibold text-white">helpdesk@dpcurtis.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white">
                    <MapPin className="h-5 w-5 text-[#86005e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#e5e7eb] uppercase tracking-wider mb-0.5">Address</p>
                    <p className="font-semibold text-white">1450 South Hwy. 118, Richfield, UT 84701</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <Card className="shadow-lg bg-white">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium mb-1 block">
                      First Name <span className="text-[#86005e]">*</span>
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1 block">
                      Email Address <span className="text-[#86005e]">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      maxLength={254}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-1 block">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      maxLength={20}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-1 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about yourself or ask any questions..."
                      maxLength={180}
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                    <p className="text-xs text-muted-foreground text-right mt-1">
                      {formData.message.length} / 180
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-[#86005e] hover:bg-[#86005e] text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
