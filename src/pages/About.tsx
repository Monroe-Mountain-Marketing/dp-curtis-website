import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SEO } from '@/components/SEO';
import {
  Truck,
  RefreshCw,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Users,
  ShieldCheck,
  Star,
} from 'lucide-react';
const truckPhoto = '/images/dent-curtis.jpg';
const fleetPhoto = '/images/trucks/truck3.jpg';

/* ─────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────── */
const stats = [
  { icon: Truck,    value: '130+',  label: 'Tractors in Fleet' },
  { icon: Calendar, value: '1982',  label: 'Year Founded' },
  { icon: RefreshCw,value: '3 yrs', label: 'Tractor Rotation Cycle' },
  { icon: MapPin,   value: '13+',   label: 'States & Canada Served' },
];

const values = [
  { icon: ShieldCheck, title: 'Honesty',         desc: 'We mean what we say and deliver on every commitment — to our customers, our drivers, and our partners.' },
  { icon: Star,        title: 'Hard Work',        desc: 'Built on plain old hard work from day one. Our culture rewards effort and takes pride in getting the job done right.' },
  { icon: Users,       title: 'Self-Discipline',  desc: 'Our drivers and team hold themselves to the highest standards of safety, professionalism, and reliability.' },
  { icon: CheckCircle2,title: 'Solid Ethics',     desc: 'Every decision we make is guided by a strong ethical foundation that Dent P. Curtis instilled from the very beginning.' },
];

const services = [
  {
    title: 'Flatbed',
    items: [
      'Rollback systems and side kits for safe transport in any weather',
      'Maxi trailer capability for oversized loads',
      'Regional and long-haul flatbed routes throughout the western US',
    ],
  },
  {
    title: 'Dry Bulk — Pneumatic',
    items: [
      'Agricultural gypsum',
      'Cement and flyash',
      'Lime and bentonite',
      'Select liquid products',
    ],
  },
  {
    title: 'Dry Bulk — Bottom Drop',
    items: [
      'Grain and coal',
      'Gravel and cinders',
      'Lime and other aggregate products',
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   About Page
───────────────────────────────────────────────────────────── */
const AboutPage: React.FC = () => {
  const [formData, setFormData] = useState({ firstName: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will be in touch shortly.');
    setFormData({ firstName: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      <SEO
        title="About Us — History & Story"
        description="Learn about D.P. Curtis Trucking — founded in 1982 by Dent P. Curtis in Richfield, Utah. Over 40 years of flatbed and dry bulk trucking built on honesty, hard work, and solid ethics."
        canonical="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About D.P. Curtis Trucking",
          "url": "https://dpcurtis.com/about",
          "description": "Founded in 1982 by Dent P. Curtis, D.P. Curtis Trucking has grown from one truck in Southern Utah to a fleet of 130+ tractors serving the western US and Canada.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dpcurtis.com/" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://dpcurtis.com/about" }
            ]
          }
        }}
      />
      {/* ── Page Hero ──────────────────────────────────────── */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#86005e] font-semibold uppercase tracking-widest text-sm mb-3">
            Est. 1982
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            History of D.P. Curtis Trucking
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A family-owned carrier built on honesty, self-discipline, solid ethics, and plain old hard work.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────── */}
      <section className="bg-[#86005e] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="h-6 w-6 mx-auto mb-2 opacity-80" />
                <p className="text-2xl md:text-3xl font-bold">{value}</p>
                <p className="text-white/70 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founding Story ─────────────────────────────────── */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 items-stretch">
            <div className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16">
              <p className="text-[#86005e] font-semibold uppercase tracking-widest text-sm mb-3">
                How It Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                One Truck, One Vision
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                D.P. Curtis Trucking, Inc. was founded in 1982 by Dent P. Curtis as a family
                business. He started with one truck and worked throughout Southern Utah until he
                could secure contracts with local area shippers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                His primary operation began by serving the two gypsum plants in the county —
                hauling sheetrock — and has since expanded to serve many major companies
                throughout the United States, hauling a wide variety of products and commodities.
                To this day, we continue providing transportation services to the local area gypsum
                plants for both outbound and inbound shipments.
              </p>
              <p className="text-slate-700 leading-relaxed">
                He has built his business on honesty, self-discipline, solid ethics, and plain old
                hard work — values that still define us today.
              </p>
            </div>

            <div className="relative rounded-none overflow-hidden shadow-xl h-full">
              <img
                src={truckPhoto}
                alt="D.P. Curtis Trucking Kenworth tractor"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
        </div>
      </section>

      {/* ── Growth Story ───────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100">
        <div className="grid lg:grid-cols-2 items-stretch">
            <div className="rounded-none overflow-hidden shadow-xl order-last lg:order-first h-full min-h-[24rem]">
              <img
                src={fleetPhoto}
                alt="D.P. Curtis Trucking fleet on the highway"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="py-20 px-4 sm:px-6 lg:px-12 xl:px-16">
              <p className="text-[#86005e] font-semibold uppercase tracking-widest text-sm mb-3">
                Where We Are Today
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Growing Strong for Over 40 Years
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The fleet grew through the purchase of additional trucks and the addition of
                Owner-Operators. What began as strictly flatbed operations has expanded to include
                dry bulk shipments with both pneumatic and bottom drop trailers.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our fleet currently runs over <strong>130 tractors</strong> across the United
                States. We rotate our tractors every three years and our trailers every five to
                six years — ensuring our drivers always have modern, reliable equipment under them.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our flatbeds feature rollback systems and side kits to safely transport loads
                through any weather, with Maxi trailer capability for oversized freight.
              </p>
            </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="py-20 bg-[#86005e] border-t border-[#86005e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#e5e7eb] font-semibold uppercase tracking-widest text-sm mb-3">
              What We Haul
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our Services
            </h2>
            <p className="text-[#e5e7eb] max-w-xl mx-auto">
              From flatbed to dry bulk, we have the equipment and experience to move what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map(({ title, items }) => (
              <Card key={title} className="border-t-4 border-t-[#86005e] shadow-sm bg-white">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">{title}</h3>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-[#86005e] shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#86005e] font-semibold uppercase tracking-widest text-sm mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Our Core Values
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              These aren't just words on a wall — they're the foundation Dent P. Curtis
              built this company on and the standard we hold ourselves to every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center px-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-none bg-[#f3f4f6] border border-[#e5e7eb] mb-4">
                  <Icon className="h-6 w-6 text-[#86005e]" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ───────────────────────────────────── */}
      <section className="py-20 bg-[#86005e] border-t border-[#86005e]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left */}
            <div>
              <p className="text-[#e5e7eb] font-semibold uppercase tracking-widest text-sm mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't Hesitate to Reach Out
              </h2>
              <p className="text-[#e5e7eb] mb-8 leading-relaxed">
                Whether you're a driver interested in joining the team, a customer looking for
                freight services, or just want to learn more about us — we'd love to hear from you.
              </p>

              <div className="space-y-5">
                <a href="tel:18002579151" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-[#f3f4f6] border border-[#e5e7eb] group-hover:bg-[#e5e7eb] transition-colors">
                    <Phone className="h-5 w-5 text-[#86005e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#e5e7eb] uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-semibold text-white">1-800-257-9151</p>
                  </div>
                </a>

                <a href="mailto:helpdesk@dpcurtis.com" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-[#f3f4f6] border border-[#e5e7eb] group-hover:bg-[#e5e7eb] transition-colors">
                    <Mail className="h-5 w-5 text-[#86005e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#e5e7eb] uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-semibold text-white">helpdesk@dpcurtis.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#f3f4f6] border border-[#e5e7eb]">
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
            <Card className="shadow-sm border-gray-200 bg-white">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium mb-1 block text-slate-700">
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
                    <label htmlFor="email" className="text-sm font-medium mb-1 block text-slate-700">
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
                    <label htmlFor="phone" className="text-sm font-medium mb-1 block text-slate-700">
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
                    <label htmlFor="message" className="text-sm font-medium mb-1 block text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      maxLength={180}
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    />
                    <p className="text-xs text-slate-400 text-right mt-1">
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

export default AboutPage;
