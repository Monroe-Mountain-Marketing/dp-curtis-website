import { Button } from "./ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import truckBg from "@/assets/dpcurtisimages/truck2dpc.webp";

export const Hero = () => {
  return (
    <section
      className="relative min-h-[580px] flex items-center justify-center overflow-hidden"
    >
      {/* Background truck photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${truckBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/75" />

      {/* Burgundy accent bar at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#6b1128]" />

      <div className="container relative z-10 text-center py-24 px-4">
        {/* Top tagline */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <MapPin className="h-4 w-4 text-[#eb5c7c]" />
          <p className="text-[#eb5c7c] font-semibold tracking-widest uppercase text-sm">
            Serving the Intermountain West Since 1982
          </p>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Delivering The Best Throughout The{" "}
          <span className="text-[#eb5c7c]">Intermountain West</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-4">
          Join a thriving community of professional truck drivers. Dedicated routes,
          new equipment, and a full benefits package — including Health, Vacation &amp; 401k.
        </p>

        {/* States */}
        <p className="text-sm text-slate-400 mb-10">
          Utah &bull; Wyoming &bull; Colorado &bull; Arizona &bull; Nevada &bull; Idaho &bull;
          California &bull; Oregon &bull; Washington &bull; Montana &bull; New Mexico &bull; Kansas &bull; Canada
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-transparent hover:bg-white hover:text-slate-900 text-base px-8"
            asChild
          >
            <a href="#employment-info">Employment Info</a>
          </Button>
          <Button
            size="lg"
            className="bg-[#801530] hover:bg-[#6b1128] text-white text-base px-8"
            asChild
          >
            <a
              href="https://pulse.tenstreet.com/includes/login_html.php?uri_b=pulse_100&login_method=pulse_app_last_ssn_dob"
              target="_blank"
              rel="noreferrer noopener"
            >
              Apply Now
            </a>
          </Button>
        </div>

        {/* Contact info strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
          <a href="tel:18002579151" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="h-4 w-4 text-[#eb5c7c]" />
            1-800-257-9151
          </a>
          <a href="mailto:helpdesk@dpcurtis.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="h-4 w-4 text-[#eb5c7c]" />
            helpdesk@dpcurtis.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#eb5c7c]" />
            1450 South Hwy. 118, Richfield, UT 84701
          </span>
        </div>
      </div>
    </section>
  );
};
