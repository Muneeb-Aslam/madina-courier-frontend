"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Button from "@repo/ui/button";
import { usePathname } from "next/navigation";
import GetNavItems from "@/constants/navbar/navitems";
import { INavItems } from "@/types";
import Image from "next/image";
import logo from "@/public/favicon.ico";

export default function Navbar() {
  const pathName = usePathname();
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "/placeholder-avatar.jpg",
  };

  return (
    <nav className="flex items-center justify-between border-b px-spacing-s py-spacing-s">
      <div className="ml-spacing-s flex items-center gap-spacing-s">
        <Link href="/" className="font-bold text-xl">
          <Image src={logo} alt="logo" className="h-10 w-10 rounded-[50%]" />
        </Link>

        <div className="ml-spacing-xl flex gap-spacing-xl">
          {GetNavItems()?.map((item: INavItems) => (
            <Link
              key={item.value}
              href={item.href}
              space-x-8
              className={`font-medium transition-colors ${
                pathName === item?.value
                  ? "text-primary"
                  : "text-black hover:text-primary"
              }`}
            >
              {item?.label}
            </Link>
          ))}
        </div>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="mr-spacing-xs cursor-pointer">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-56">
          <div className="flex flex-col space-y-1 p-2">
            <p className="font-medium">{user.name}</p>
            <p className="text-x">{user.email}</p>
          </div>
          <div className="border-t pt-2 mt-2">
            {/* <Button variant="ghost" size="sm" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </Button> */}
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
}
