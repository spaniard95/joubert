"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/ui-library/navigation-menu";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Lessons",
//     href: "/dashboard/lessons",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
// ];

function CustomNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Lessons Catalogs</NavigationMenuTrigger>
          {/* <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent> */}
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-gray-100 hover:text-accent-foreground"
                    href="/dashboard/lessons"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Curriculum
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      all the lessons teached at the Science university of
                      Example
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <p className="p-3 text-lg font-medium">Academic year 2023</p>
              <ListItem
                href="/dashboard/semester/2023/fall"
                title="Fall semester 2023"
              >
                info about the lessons of the fall semester
              </ListItem>
              <ListItem
                href="/dashboard/semester/2023/spring"
                title="Summer semester 2024"
              >
                info about the lessons of the spring semester
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard/teachers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Teachers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }) => {
  return (
    <li>
      {/* <NavigationMenuItem>
        <Link href="/docs" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem> */}
      <NavigationMenuLink asChild>
        <Link
          //   legacyBehavior
          //   passHref
          href={href ?? "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default CustomNavigationMenu;
