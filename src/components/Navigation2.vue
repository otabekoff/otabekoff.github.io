<script setup lang="ts">
import { Book, Menu, Sunset, Trees, Zap } from "lucide-vue-next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const subMenuItemsOne = [
  {
    title: "Blog",
    description: "The latest industry news, updates, and info",
    icon: Book,
  },
  {
    title: "Company",
    description: "Our mission is to innovate and empower the world",
    icon: Trees,
  },
  {
    title: "Careers",
    description: "Browse job listing and discover our workspace",
    icon: Sunset,
  },
  {
    title: "Support",
    description: "Get in touch with our support team or visit our community forums",
    icon: Zap,
  },
];

const subMenuItemsTwo = [
  {
    title: "Help Center",
    description: "Get all the answers you need right here",
    icon: Zap,
  },
  {
    title: "Contact Us",
    description: "We are here to help you with any questions you have",
    icon: Sunset,
  },
  {
    title: "Status",
    description: "Check the current status of our services and APIs",
    icon: Trees,
  },
  {
    title: "Terms of Service",
    description: "Our terms and conditions for using our services",
    icon: Book,
  },
];
</script>

<template>
  <div class="py-6">
    <div class="container">
      <!-- Desktop Navigation -->
      <nav class="hidden justify-between lg:flex">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold">Shadcn Blocks</span>
          </div>
          <div class="flex items-center">
            <a class="text-muted-foreground" href="#"> Home </a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem class="text-muted-foreground">
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul class="w-80 p-3">
                      <li v-for="(item, idx) in subMenuItemsOne" :key="idx">
                        <NavigationMenuLink>
                          <a
                            class="flex select-none gap-4 rounded-md p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <component :is="item.icon" class="size-6" />
                            <div>
                              <div class="text-sm font-semibold">{{ item.title }}</div>
                              <p class="text-sm leading-snug text-muted-foreground">
                                {{ item.description }}
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem class="text-muted-foreground">
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul class="w-80 p-3">
                      <li v-for="(item, idx) in subMenuItemsTwo" :key="idx">
                        <NavigationMenuLink>
                          <a
                            class="flex select-none gap-4 rounded-md p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <component :is="item.icon" class="size-6" />
                            <div>
                              <div class="text-sm font-semibold">{{ item.title }}</div>
                              <p class="text-sm leading-snug text-muted-foreground">
                                {{ item.description }}
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a class="text-muted-foreground" href="#"> Pricing </a>
            <a class="text-muted-foreground" href="#"> Blog </a>
          </div>
        </div>
        <div class="flex gap-2">
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </nav>

      <!-- Mobile Navigation -->
      <div class="block lg:hidden">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold">Shadcn Blocks</span>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu class="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent class="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <div class="flex items-center gap-2">
                    <span class="text-xl font-bold">Shadcn Blocks</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div class="my-8 flex flex-col gap-4">
                <a href="#" class="font-semibold"> Home </a>
                <Accordion type="single" collapsible class="w-full">
                  <AccordionItem value="products" class="border-b-0">
                    <AccordionTrigger class="mb-4 py-0 font-semibold hover:no-underline"
                      >Products</AccordionTrigger
                    >
                    <AccordionContent class="mt-2">
                      <a
                        v-for="(item, idx) in subMenuItemsOne"
                        :key="idx"
                        class="flex select-none gap-4 rounded-md p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <component :is="item.icon" class="size-6" />
                        <div>
                          <div class="text-sm font-semibold">{{ item.title }}</div>
                          <p class="text-sm leading-snug text-muted-foreground">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resources" class="border-b-0">
                    <AccordionTrigger class="py-0 font-semibold hover:no-underline"
                      >Resources</AccordionTrigger
                    >
                    <AccordionContent class="mt-2">
                      <a
                        v-for="(item, idx) in subMenuItemsTwo"
                        :key="idx"
                        class="flex select-none gap-4 rounded-md p-3 leading-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <component :is="item.icon" class="size-6" />
                        <div>
                          <div class="text-sm font-semibold">{{ item.title }}</div>
                          <p class="text-sm leading-snug text-muted-foreground">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <a href="#" class="font-semibold"> Pricing </a>
                <a href="#" class="font-semibold"> Blog </a>
              </div>
              <div class="border-t pt-4">
                <div class="grid grid-cols-2 justify-start">
                  <a class="justify-start text-muted-foreground" href="#"> Press </a>
                  <a class="justify-start text-muted-foreground" href="#"> Contact </a>
                  <a class="justify-start text-muted-foreground" href="#"> Imprint </a>
                  <a class="justify-start text-muted-foreground" href="#"> Sitemap </a>
                  <a class="justify-start text-muted-foreground" href="#"> Legal </a>
                  <a class="justify-start text-muted-foreground" href="#">
                    Cookie Settings
                  </a>
                </div>
                <div class="mt-2 flex flex-col gap-3">
                  <Button variant="outline">Log in</Button>
                  <Button>Sign up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
