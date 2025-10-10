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
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuthStore } from "@/stores/authStore";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import OpenSkyLogoSvg from '@/assets/open-sky-logo-light-h.svg';
import OpenSkyLogoDarkSvg from '@/assets/open-sky-logo-dark-h.svg';
import ProfileIcon from '@/assets/profile-icon.png';
import cn from "classnames";

interface RouteProps {
  href: string;
  label: string;
}

const navSectionItems: RouteProps[] = [
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#ui-components", label: "UI System" },
  { href: "#features", label: "Core Features" },
  { href: "#architecture", label: "Architecture" },
  { href: "#deployment", label: "Deployment" },
  { href: "#getting-started", label: "Get Started" },
];

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/protected",
    label: "Protected Route",
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {isAuthenticated, user, handleLogout } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const logout = () => {
    handleLogout();
    navigate('/');
  };

  // Ensure in-page section links scroll instead of routing
  const handleSectionClick = (href: string, closeSheet?: boolean) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept for hash links on the homepage
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace(/^#/, '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback: update hash so browser attempts default behavior if element appears later
        window.location.hash = href;
      }
      if (closeSheet) setIsOpen(false);
    }
  };

  // Handle logo click - scroll to top on homepage, navigate otherwise
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on homepage, allow default navigation to "/"
  };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              onClick={handleLogoClick}
              className="ml-2 font-bold text-xl flex items-center cursor-pointer"
            >
              <img 
                src={theme === 'dark' ? OpenSkyLogoDarkSvg : OpenSkyLogoSvg} 
                alt="Open Sky Solutions Logo" 
                className='h-10 w-auto mr-3' 
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
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="relative">
                  <div className="h-full w-full absolute top-0 bg-blue-500 bg-blend-multiply opacity-30"></div>
                  <AvatarImage src={ProfileIcon} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <span className="block text-sm font-medium">{user?.name || 'User'}</span>
                  <span className="block truncate text-sm">{user?.email || 'test@test.com'}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem className='justify-between'>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ghost"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    <Sun className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {isAuthenticated
                  ? <DropdownMenuItem onClick={logout}>Sign out</DropdownMenuItem>
                  : <DropdownMenuItem onClick={() => navigate('/auth')}>Login / Sign Up</DropdownMenuItem>
                }
                
              </DropdownMenuContent>
            </DropdownMenu>

            {/* mobile */}
            <span className="flex md:hidden">
              <ModeToggle />

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

                <SheetContent side={"left"}>
                  <SheetHeader>
                    <SheetTitle className="font-bold text-xl">
                      Shadcn/React
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
          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>

      {isHomePage && navSectionItems.length > 0 &&
        <NavigationMenu className={cn(
          "hidden md:flex max-w-full w-full border-t border-t-gray-800 shadow-md",
          "bg-background dark:bg-background brightness-[98%] dark:brightness-[120%]",
        )}>
          <NavigationMenuList className="container h-10 px-4 w-screen flex justify-between items-center">
            {navSectionItems.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={handleSectionClick(href)}
                className={cn(
                  buttonVariants({ variant: "ghost", size: 'xs' }),
                  "hover:dark:bg-card hover:bg-secondary hover:text-primary"
                )}
              >
                {label}
              </a>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      }
    </header>
  );
};
