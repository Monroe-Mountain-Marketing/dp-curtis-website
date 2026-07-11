import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Truck,
  Route,
  BadgeDollarSign,
  Clock,
  ShieldCheck,
  FileText,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Job Data — add more jobs here as they become available
───────────────────────────────────────────────────────────── */
interface Job {
  id: string;
  title: string;
  type: string;
  region: string;
  locations: string[];
  status: 'Hiring' | 'Filled' | 'Coming Soon';
  postedDate: string;
  summary: string;
  requirements: string[];
  preferred: string[];
  benefits: string[];
}

const JOBS: Job[] = [
  {
    id: 'flatbed-northwest-regional',
    title: 'Flatbed Driver – Northwest Regional',
    type: 'Regional OTR',
    region: 'Northwest',
    locations: ['Portland, OR', 'Boise, ID', 'Northern Utah', 'Southern Idaho', 'Surrounding Northwest Region'],
    status: 'Hiring',
    postedDate: 'June 2026',
    summary:
      "DP Curtis Trucking is expanding its regional operations and looking for professional, safety-minded flatbed drivers to join our elite team. If you're based in or around Portland, Boise, Northern Utah, or the greater Northwest, and are serious about a driving career with a company that values integrity, safety, and professionalism \u2014 we want to hear from you.",
    requirements: [
      '23 years of age with at least one year of certified OTR driving experience',
      'Valid CDL license required',
      'No DUI or DWI violations within a 5-year period',
      'No more than 3 moving violations in the past three years',
      'No preventable accidents in the previous 12 months',
      'No drug convictions in history',
      'No record of truck abandonments',
      'Current DOT physical and drug test upon application',
      '3 years of verifiable driving references required',
      'Must be honest, clean, and well-groomed',
    ],
    preferred: [
      'Flatbed experience',
      'Familiarity with tarping and load securement',
    ],
    benefits: [
      'Dedicated regional routes — home time is a priority',
      'New, reliable equipment — no breakdowns on the road',
      'Health insurance coverage',
      'Vacation pay',
      '401k contributions',
      'Competitive, performance-based earnings',
      'Supportive, family-oriented company culture',
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   Stat Badges
───────────────────────────────────────────────────────────── */
const stats = [
  { icon: Truck, label: 'New Equipment', desc: 'Modern, reliable fleet' },
  { icon: Route, label: 'Dedicated Routes', desc: 'Home time prioritized' },
  { icon: BadgeDollarSign, label: 'Full Benefits', desc: 'Health, 401k & Vacation' },
  { icon: Clock, label: 'Since 1982', desc: 'Family-owned & stable' },
];

/* ─────────────────────────────────────────────────────────────
   Status Badge helper
───────────────────────────────────────────────────────────── */
const StatusBadge = ({ status }: { status: Job['status'] }) => {
  const styles: Record<Job['status'], string> = {
    Hiring: 'bg-green-100 text-green-800 border-green-200',
    Filled: 'bg-gray-100 text-gray-500 border-gray-200',
    'Coming Soon': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles[status]}`}>
      {status === 'Hiring' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse" />}
      {status}
    </span>
  );
};

/* ─────────────────────────────────────────────────────────────
   Job Card
───────────────────────────────────────────────────────────── */
const JobCard = ({ job, selected, onSelect }: { job: Job; selected: boolean; onSelect: () => void }) => (
  <button
    onClick={onSelect}
    className={`w-full text-left rounded-xl border-2 p-5 transition-all ${
      selected
        ? 'border-[#86005e] bg-[#f3f4f6] shadow-md'
        : 'border-gray-200 bg-white hover:border-[#86005e] hover:shadow-sm'
    }`}
  >
    <div className="flex items-start justify-between gap-3 mb-3">
      <div>
        <StatusBadge status={job.status} />
        <h3 className="font-bold text-slate-900 text-lg mt-2 leading-tight">{job.title}</h3>
        <p className="text-sm text-slate-500 mt-1">{job.type} &bull; Posted {job.postedDate}</p>
      </div>
      <Truck className={`h-8 w-8 shrink-0 mt-1 ${selected ? 'text-[#86005e]' : 'text-slate-300'}`} />
    </div>

    <div className="flex flex-wrap gap-2">
      {job.locations.slice(0, 3).map((loc) => (
        <span key={loc} className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 rounded-full px-2.5 py-1">
          <MapPin className="h-3 w-3" /> {loc}
        </span>
      ))}
      {job.locations.length > 3 && (
        <span className="inline-flex items-center text-xs text-slate-500 bg-slate-100 rounded-full px-2.5 py-1">
          +{job.locations.length - 3} more
        </span>
      )}
    </div>
  </button>
);

/* ─────────────────────────────────────────────────────────────
   Job Detail Panel
───────────────────────────────────────────────────────────── */
const JobDetail = ({ job }: { job: Job }) => {
  const [showAllReqs, setShowAllReqs] = useState(false);
  const visibleReqs = showAllReqs ? job.requirements : job.requirements.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-center gap-3 mb-3">
          <StatusBadge status={job.status} />
          <Badge variant="secondary">{job.type}</Badge>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{job.title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {job.locations.map((loc) => (
            <span key={loc} className="inline-flex items-center gap-1 text-sm text-[#86005e] bg-[#f3f4f6] border border-[#e5e7eb] rounded-full px-3 py-1">
              <MapPin className="h-3.5 w-3.5" /> {loc}
            </span>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed">{job.summary}</p>
      </div>

      {/* Requirements */}
      <div>
        <h3 className="flex items-center gap-2 font-bold text-slate-900 text-lg mb-4">
          <ShieldCheck className="h-5 w-5 text-[#86005e]" /> Requirements
        </h3>
        <ul className="space-y-2.5">
          {visibleReqs.map((req) => (
            <li key={req} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#86005e] shrink-0 mt-0.5" />
              <span className="text-slate-700">{req}</span>
            </li>
          ))}
        </ul>
        {job.requirements.length > 5 && (
          <button
            onClick={() => setShowAllReqs(!showAllReqs)}
            className="mt-3 flex items-center gap-1 text-sm text-[#86005e] font-medium hover:text-[#86005e]"
          >
            {showAllReqs ? <><ChevronUp className="h-4 w-4" /> Show less</> : <><ChevronDown className="h-4 w-4" /> Show all {job.requirements.length} requirements</>}
          </button>
        )}
      </div>

      {/* Preferred */}
      {job.preferred.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 font-bold text-slate-900 text-lg mb-4">
            <FileText className="h-5 w-5 text-[#86005e]" /> Preferred Qualifications
          </h3>
          <ul className="space-y-2.5">
            {job.preferred.map((pref) => (
              <li key={pref} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#86005e]/60 shrink-0 mt-0.5" />
                <span className="text-slate-600">{pref}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Benefits */}
      <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl p-5">
        <h3 className="flex items-center gap-2 font-bold text-slate-900 text-lg mb-4">
          <BadgeDollarSign className="h-5 w-5 text-[#86005e]" /> What We Offer
        </h3>
        <ul className="space-y-2.5">
          {job.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#86005e] shrink-0 mt-0.5" />
              <span className="text-slate-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply CTA */}
      <div className="bg-slate-900 rounded-xl p-6 text-center">
        <h3 className="text-white font-bold text-xl mb-2">Ready to Drive Your Future Forward?</h3>
        <p className="text-slate-400 text-sm mb-5">
          Apply online in minutes. Our team will be in touch shortly after reviewing your application.
        </p>
        <Button
          size="lg"
          className="w-full bg-[#86005e] hover:bg-[#86005e] text-white text-base"
          asChild
        >
          <a
            href="https://pulse.tenstreet.com/includes/login_html.php?uri_b=pulse_100&login_method=pulse_app_last_ssn_dob"
            target="_blank"
            rel="noreferrer noopener"
          >
            Apply Now for This Position
          </a>
        </Button>
        <p className="text-slate-500 text-xs mt-3">
          Questions? Call us at{' '}
          <a href="tel:18002579151" className="text-[#86005e] hover:text-[#86005e]">
            1-800-257-9151
          </a>{' '}
          or email{' '}
          <a href="mailto:helpdesk@dpcurtis.com" className="text-[#86005e] hover:text-[#86005e]">
            helpdesk@dpcurtis.com
          </a>
        </p>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   Employment Page
───────────────────────────────────────────────────────────── */
const EmploymentPage: React.FC = () => {
  const [selectedJobId, setSelectedJobId] = useState<string>(JOBS[0].id);
  const selectedJob = JOBS.find((j) => j.id === selectedJobId) ?? JOBS[0];

  return (
    <div>
      <SEO
        title="CDL Driver Jobs — Now Hiring Flatbed Drivers"
        description="D.P. Curtis Trucking is now hiring flatbed drivers for Northwest regional routes (Portland, Boise, Northern Utah, Southern Idaho). Full benefits, new equipment, dedicated routes. Apply today."
        canonical="/employment"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Flatbed Driver \u2013 Northwest Regional",
            "description": "D.P. Curtis Trucking is expanding its regional operations and looking for professional, safety-minded flatbed drivers. Dedicated routes based in Portland OR, Boise ID, Northern Utah, and Southern Idaho.",
            "datePosted": "2026-06-01",
            "validThrough": "2026-12-31",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "D.P. Curtis Trucking, Inc.",
              "sameAs": "https://dpcurtis.com",
              "logo": "https://dpcurtis.com/src/assets/dpcurtisimages/DPCurtisLogo-1.webp"
            },
            "jobLocation": [
              { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Portland", "addressRegion": "OR", "addressCountry": "US" } },
              { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Boise", "addressRegion": "ID", "addressCountry": "US" } },
              { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Richfield", "addressRegion": "UT", "addressCountry": "US" } }
            ],
            "applicantLocationRequirements": { "@type": "Country", "name": "United States" },
            "experienceRequirements": "Minimum 1 year certified OTR driving experience",
            "qualifications": "Valid CDL license, 23+ years old, no DUI/DWI within 5 years, current DOT physical",
            "skills": "Flatbed driving, tarping, load securement",
            "jobBenefits": "Health insurance, 401k contributions, vacation pay, new equipment, dedicated routes",
            "industry": "Transportation & Logistics",
            "occupationalCategory": "53-3032 Heavy and Tractor-Trailer Truck Drivers",
            "directApply": true,
            "url": "https://dpcurtis.com/employment",
            "applicationContact": {
              "@type": "ContactPoint",
              "telephone": "+1-800-257-9151",
              "email": "helpdesk@dpcurtis.com",
              "contactType": "hiring"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dpcurtis.com/" },
              { "@type": "ListItem", "position": 2, "name": "Employment", "item": "https://dpcurtis.com/employment" }
            ]
          }
        ]}
      />
      {/* ── Page Hero ──────────────────────────────────────── */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#86005e] font-semibold uppercase tracking-widest text-sm mb-3">
            We're Hiring
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Drive Your Career Forward
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Join a family-owned, driver-first trucking company that's been delivering excellence
            throughout the Intermountain West since 1982.
          </p>
          <Button
            size="lg"
            className="bg-[#86005e] hover:bg-[#86005e] text-white px-10"
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
      </section>

      {/* ── Why Work Here stats bar ────────────────────────── */}
      <section className="bg-[#86005e] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3 text-white">
                <div className="p-2 rounded-lg bg-white/10 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-tight">{label}</p>
                  <p className="text-white/70 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Job Finder ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
              Open Positions
            </h2>
            <p className="text-slate-500">
              {JOBS.filter((j) => j.status === 'Hiring').length} position
              {JOBS.filter((j) => j.status === 'Hiring').length !== 1 ? 's' : ''} currently available
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* ── Job list (sidebar) */}
            <div className="lg:col-span-2 space-y-3">
              {JOBS.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  selected={job.id === selectedJobId}
                  onSelect={() => setSelectedJobId(job.id)}
                />
              ))}

              {/* No more jobs note */}
              <div className="rounded-xl border-2 border-dashed border-gray-200 p-5 text-center">
                <p className="text-sm text-slate-400 font-medium">More positions coming soon</p>
                <p className="text-xs text-slate-400 mt-1">
                  Check back or call{' '}
                  <a href="tel:18002579151" className="text-[#86005e] hover:underline">
                    1-800-257-9151
                  </a>
                </p>
              </div>
            </div>

            {/* ── Job detail panel */}
            <div className="lg:col-span-3">
              <Card className="shadow-sm border-gray-200">
                <CardContent className="pt-6">
                  <JobDetail job={selectedJob} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Requirements Snapshot ──────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#86005e] font-semibold uppercase tracking-widest text-sm mb-3">
              Driver Standards
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              What We Look For
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              DP Curtis Trucking maintains high standards to keep our team safe and our record spotless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { ok: true,  text: 'Valid CDL license' },
              { ok: true,  text: '23+ years of age' },
              { ok: true,  text: '1+ year certified OTR experience' },
              { ok: true,  text: 'Current DOT physical' },
              { ok: true,  text: '3 years verifiable references' },
              { ok: false, text: 'DUI/DWI within 5 years' },
              { ok: false, text: '4+ moving violations (3 yrs)' },
              { ok: false, text: 'Preventable accident (12 mo)' },
              { ok: false, text: 'Drug convictions on record' },
            ].map(({ ok, text }) => (
              <div
                key={text}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 border ${
                  ok
                    ? 'bg-[#86005e] border-[#86005e] text-white'
                    : 'bg-[#4b5563] border-[#374151] text-[#f3f4f6]'
                }`}
              >
                {ok
                  ? <CheckCircle2 className="h-5 w-5 text-white shrink-0" />
                  : <XCircle className="h-5 w-5 text-[#e5e7eb] shrink-0" />
                }
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Not sure if you qualify?{' '}
            <a href="tel:18002579151" className="text-[#86005e] font-medium hover:underline">
              Give us a call
            </a>{' '}
            — we're happy to talk through your situation.
          </p>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <section className="py-16 bg-[#86005e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Make a Change?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            DP Curtis Trucking operates from a fully equipped 8.8-acre facility in Richfield, Utah.
            Join us and drive your future forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#86005e] hover:bg-[#e5e7eb] font-semibold px-10"
              asChild
            >
              <a
                href="https://pulse.tenstreet.com/includes/login_html.php?uri_b=pulse_100&login_method=pulse_app_last_ssn_dob"
                target="_blank"
                rel="noreferrer noopener"
              >
                Fill Out the Application
              </a>
            </Button>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-white/80 text-sm sm:ml-4">
              <a href="tel:18002579151" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" /> 1-800-257-9151
              </a>
              <a href="mailto:helpdesk@dpcurtis.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> helpdesk@dpcurtis.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Richfield, UT 84701
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmploymentPage;
