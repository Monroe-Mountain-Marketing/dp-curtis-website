/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          50:  '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#86005e',
          400: '#86005e',
          500: '#86005e',
          600: '#86005e',
          700: '#86005e', // primary brand — matches logo & map
          800: '#86005e',
          900: '#374151',
          950: '#111827',
        },
      },
      spacing: {
        '0.25': '0.0625rem', // 1px
        '0.5': '0.125rem',   // 2px
        '0.75': '0.1875rem', // 3px
        '1.5': '0.375rem',   // 6px
        '2.5': '0.625rem',   // 10px
        '3.5': '0.875rem',   // 14px
        '4.5': '1.125rem',   // 18px
        '5.5': '1.375rem',   // 22px
        '6.5': '1.625rem',   // 26px
        '7.5': '1.875rem',   // 30px
        '8.5': '2.125rem',   // 34px
        '9.5': '2.375rem',   // 38px
        '10.5': '2.625rem',  // 42px
        '11.5': '2.875rem',  // 46px
        '12.5': '3.125rem',  // 50px
        '13': '3.25rem',     // 52px
        '14': '3.5rem',      // 56px
        '15': '3.75rem',     // 60px
        '16': '4rem',        // 64px
        '17': '4.25rem',     // 68px
        '18': '4.5rem',      // 72px
        '19': '4.75rem',     // 76px
        '20': '5rem',        // 80px
        '22': '5.5rem',      // 88px
        '24': '6rem',        // 96px
        '26': '6.5rem',      // 104px
        '28': '7rem',        // 112px
        '30': '7.5rem',      // 120px
        '32': '8rem',        // 128px
        '34': '8.5rem',      // 136px
        '36': '9rem',        // 144px
        '38': '9.5rem',      // 152px
        '40': '10rem',       // 160px
        '44': '11rem',       // 176px
        '48': '12rem',       // 192px
        '52': '13rem',       // 208px
        '56': '14rem',       // 224px
        '60': '15rem',       // 240px
        '64': '16rem',       // 256px
        '68': '17rem',       // 272px
        '72': '18rem',       // 288px
        '76': '19rem',       // 304px
        '80': '20rem',       // 320px
        '84': '21rem',       // 336px
        '88': '22rem',       // 352px
        '92': '23rem',       // 368px
        '96': '24rem',       // 384px
        '100': '25rem',      // 400px
        '104': '26rem',      // 416px
        '108': '27rem',      // 432px
        '112': '28rem',      // 448px
        '116': '29rem',      // 464px
        '120': '30rem',      // 480px
        '124': '31rem',      // 496px
        '128': '32rem',      // 512px
        '132': '33rem',      // 528px
        '136': '34rem',      // 544px
        '140': '35rem',      // 560px
        '144': '36rem',      // 576px
        '148': '37rem',      // 592px
        '152': '38rem',      // 608px
        '156': '39rem',      // 624px
        '160': '40rem',      // 640px
      },
      inset: {
        '0.25': '0.0625rem', // 1px
        '0.5': '0.125rem',   // 2px
        '0.75': '0.1875rem', // 3px
        '1.5': '0.375rem',   // 6px
        '2.5': '0.625rem',   // 10px
        '3.5': '0.875rem',   // 14px
        '4.5': '1.125rem',   // 18px
        '5.5': '1.375rem',   // 22px
        '6.5': '1.625rem',   // 26px
        '7.5': '1.875rem',   // 30px
        '8.5': '2.125rem',   // 34px
        '9.5': '2.375rem',   // 38px
        '10.5': '2.625rem',  // 42px
        '11.5': '2.875rem',  // 46px
        '12.5': '3.125rem',  // 50px
        '13': '3.25rem',     // 52px
        '14': '3.5rem',      // 56px
        '15': '3.75rem',     // 60px
        '16': '4rem',        // 64px
        '17': '4.25rem',     // 68px
        '18': '4.5rem',      // 72px
        '19': '4.75rem',     // 76px
        '20': '5rem',        // 80px
        '22': '5.5rem',      // 88px
        '24': '6rem',        // 96px
        '26': '6.5rem',      // 104px
        '28': '7rem',        // 112px
        '30': '7.5rem',      // 120px
        '32': '8rem',        // 128px
        '34': '8.5rem',      // 136px
        '36': '9rem',        // 144px
        '38': '9.5rem',      // 152px
        '40': '10rem',       // 160px
        '44': '11rem',       // 176px
        '48': '12rem',       // 192px
        '52': '13rem',       // 208px
        '56': '14rem',       // 224px
        '60': '15rem',       // 240px
        '64': '16rem',       // 256px
        '68': '17rem',       // 272px
        '72': '18rem',       // 288px
        '76': '19rem',       // 304px
        '80': '20rem',       // 320px
        '84': '21rem',       // 336px
        '88': '22rem',       // 352px
        '92': '23rem',       // 368px
        '96': '24rem',       // 384px
        '100': '25rem',      // 400px
        '104': '26rem',      // 416px
        '108': '27rem',      // 432px
        '112': '28rem',      // 448px
        '116': '29rem',      // 464px
        '120': '30rem',      // 480px
        '124': '31rem',      // 496px
        '128': '32rem',      // 512px
        '132': '33rem',      // 528px
        '136': '34rem',      // 544px
        '140': '35rem',      // 560px
        '144': '36rem',      // 576px
        '148': '37rem',      // 592px
        '152': '38rem',      // 608px
        '156': '39rem',      // 624px
        '160': '40rem',      // 640px
      },
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      width: {
        '1/7': '14.285714%',
        '2/7': '28.571429%',
        '3/7': '42.857143%',
        '4/7': '57.142857%',
        '5/7': '71.428571%',
        '6/7': '85.714286%',
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
        '1/9': '11.111111%',
        '2/9': '22.222222%',
        '4/9': '44.444444%',
        '5/9': '55.555556%',
        '7/9': '77.777778%',
        '8/9': '88.888889%',
        '1/10': '10%',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        highlight: {
          DEFAULT: 'var(--highlight)',
          foreground: 'var(--highlight-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        // 950 variants using CSS custom properties
        slate: {
          950: 'var(--slate-950)',
        },
        gray: {
          950: 'var(--gray-950)',
        },
        zinc: {
          950: 'var(--zinc-950)',
        },
        neutral: {
          950: 'var(--neutral-950)',
        },
        stone: {
          950: 'var(--stone-950)',
        },
        red: {
          950: 'var(--red-950)',
        },
        orange: {
          950: 'var(--orange-950)',
        },
        amber: {
          950: 'var(--amber-950)',
        },
        yellow: {
          950: 'var(--yellow-950)',
        },
        lime: {
          950: 'var(--lime-950)',
        },
        green: {
          950: 'var(--green-950)',
        },
        emerald: {
          950: 'var(--emerald-950)',
        },
        teal: {
          950: 'var(--teal-950)',
        },
        cyan: {
          950: 'var(--cyan-950)',
        },
        sky: {
          950: 'var(--sky-950)',
        },
        blue: {
          950: 'var(--blue-950)',
        },
        indigo: {
          950: 'var(--indigo-950)',
        },
        violet: {
          950: 'var(--violet-950)',
        },
        purple: {
          950: 'var(--purple-950)',
        },
        fuchsia: {
          950: 'var(--fuchsia-950)',
        },
        pink: {
          950: 'var(--pink-950)',
        },
        rose: {
          950: 'var(--rose-950)',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
