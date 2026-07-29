import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import DPCurtisLogo from '@/assets/dpcurtisimages/DPCurtisLogo-1.webp';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/employment", label: "Employment" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isHomePage = location.pathname === "/";

  // Handle logo click - scroll to top on homepage, navigate otherwise
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on homepage, allow default navigation to "/"
  };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              onClick={handleLogoClick}
              className="ml-2 flex items-center cursor-pointer"
            >
              <img
                src={DPCurtisLogo}
                alt="D.P. Curtis Trucking"
                className="h-10 w-auto"
              />
            </a>
          </NavigationMenuItem>

          {/* desktop */}
          <nav className="hidden md:flex gap-2 flex-grow justify-center items-center">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="flex md:order-2 gap-2 items-center">
            {/* Apply Now CTA — desktop */}
            <Button
              size="sm"
              className="hidden md:inline-flex bg-[#86005e] hover:bg-[#86005e] text-white"
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

            {/* mobile */}
            <span className="flex md:hidden">
              <Sheet
                open={isOpen}
                onOpenChange={setIsOpen}
              >
                <SheetTrigger className="px-2">
                  <Menu
                    className="flex md:hidden h-5 w-5"
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="sr-only">Menu Icon</span>
                  </Menu>
                </SheetTrigger>

                <SheetContent side={"left"} className="bg-white">
                  <SheetHeader>
                    <SheetTitle className="font-bold text-xl">
                      <img src={DPCurtisLogo} alt="D.P. Curtis Trucking" className="h-10 w-auto" />
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                    {routeList.map(({ href, label }: RouteProps) => (
                      <a
                        rel="noreferrer noopener"
                        key={label}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </span>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
