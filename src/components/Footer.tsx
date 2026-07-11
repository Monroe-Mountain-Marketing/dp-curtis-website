import { Phone, Mail, MapPin } from "lucide-react";
import DPCurtisLogo from '@/assets/dpcurtisimages/DPCurtisLogo-1.webp';

export const Footer = () => {
  return (
    <footer id="footer" className="border-t border-gray-200 bg-white text-slate-700">

      <section className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10">

        {/* Brand */}
        <div className="lg:col-span-3 lg:pr-8">
          <a rel="noreferrer noopener" href="/" className="inline-flex items-center mb-4">
            <img src={DPCurtisLogo} alt="D.P. Curtis Trucking" className="h-14 w-auto" />
          </a>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed mt-2">
            Delivering the best throughout the Intermountain West since 1982. Family-owned,
            driver-focused, and built on honesty and hard work.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 lg:col-span-3 lg:pl-8">
          <h3 className="font-bold text-slate-900 mb-2">Contact</h3>
          <div className="space-y-3 text-sm">
            <a href="tel:18002579151" className="flex items-center gap-2 hover:text-[#86005e] transition-colors">
              <Phone className="h-4 w-4 text-[#86005e] shrink-0" />
              1-800-257-9151
            </a>
            <a href="mailto:helpdesk@dpcurtis.com" className="flex items-center gap-2 hover:text-[#86005e] transition-colors">
              <Mail className="h-4 w-4 text-[#86005e] shrink-0" />
              helpdesk@dpcurtis.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-[#86005e] shrink-0 mt-0.5" />
              <span>1450 South Hwy. 118<br />Richfield, UT 84701</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 lg:col-span-3">
          <h3 className="font-bold text-slate-900 mb-2">Quick Links</h3>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "#employment-info", label: "Employment" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a key={label} rel="noreferrer noopener" href={href} className="text-sm text-slate-500 hover:text-[#86005e] transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2 lg:col-span-3">
          <h3 className="font-bold text-slate-900 mb-2">Legal</h3>
          {[
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
          ].map(({ href, label }) => (
            <a key={label} rel="noreferrer noopener" href={href} className="text-sm text-slate-500 hover:text-[#86005e] transition-colors">
              {label}
            </a>
          ))}

          <div className="mt-4">
            <a
              href="https://pulse.tenstreet.com/includes/login_html.php?uri_b=pulse_100&login_method=pulse_app_last_ssn_dob"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block mt-2 px-4 py-2 rounded-md bg-[#86005e] hover:bg-[#86005e] text-white text-sm font-medium transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>

      </section>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span>
            &copy; {new Date().getFullYear()} DP Curtis Trucking, Inc. All rights reserved.
          </span>
          <span>1450 South Hwy. 118, Richfield, UT 84701</span>
        </div>
      </div>

    </footer>
  );
};
