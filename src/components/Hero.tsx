import { Button } from "./ui/button";
import { MapPin } from "lucide-react";
const truckBg = "/images/trucks/truck1.jpg";

export const Hero = () => {
  return (
    <section
      className="relative min-h-[580px] overflow-hidden"
    >
      {/* Background truck photo */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-[center_22%] bg-no-repeat"
        style={{ backgroundImage: `url(${truckBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/45" />

      {/* Burgundy accent bar at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#86005e]" />

      <div className="relative z-10 flex min-h-[580px] w-full justify-end">
        <div className="w-full lg:w-[46%] bg-[#86005e]/75 min-h-[580px] flex items-center">
          <div className="w-full px-6 py-14 sm:px-10 lg:px-12 xl:px-16">
            {/* Top tagline */}
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-4 w-4 text-white" />
              <p className="text-white font-semibold tracking-widest uppercase text-sm">
                Serving the Intermountain West Since 1982
              </p>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Delivering The Best Throughout The{" "}
              <span className="text-[#e2e8f0]">Intermountain West</span>
            </h1>

            {/* Sub-heading */}
            <p className="text-lg md:text-xl text-[#e5e7eb] max-w-3xl mb-10">
              Join a thriving community of professional truck drivers. Dedicated routes,
              new equipment, and a full benefits package — including Health, Vacation &amp; 401k.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white hover:bg-[#e5e7eb] text-[#86005e] text-base px-8"
                asChild
              >
                <a href="#employment-info">Employment Info</a>
              </Button>
              <Button
                size="lg"
                className="bg-[#374151] hover:bg-[#4b5563] text-white text-base px-8"
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
          </div>
        </div>
      </div>
    </section>
  );
};
