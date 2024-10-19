<template>
  <header
    class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border"
  >
    <div class="container flex h-14 max-w-screen-2xl items-center">
      <div class="mr-4 md:mr-1 hidden md:flex">
        <router-link
          to="/"
          class="mr-4 md:mr-2 lg:mr-6 flex items-center lg:space-x1 xl:space-x-2"
        >
          <Logo></Logo>
          <span class="font-bold"> Bekfolio </span></router-link
        >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
                >
                  <li class="row-span-3">
                    <NavigationMenuLink as-child>
                      <router-link
                        class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        to="/blog"
                      >
                        <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6" />
                        <div class="mb-2 mt-4 text-lg font-medium">My blog</div>
                        <p class="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and Tailwind
                          CSS.
                        </p>
                      </router-link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink as-child>
                      <router-link
                        to="/about"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">
                          Find more about me
                        </div>
                        <p
                          class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                        >
                          Re-usable components built using Radix UI and Tailwind CSS.
                        </p>
                      </router-link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink as-child>
                      <router-link
                        to="/skills"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">
                          Explore my skills
                        </div>
                        <p
                          class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </p>
                      </router-link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink as-child>
                      <router-link
                        to="/resume"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">
                          Download my resume
                        </div>
                        <p
                          class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                        >
                          How to install dependencies and structure your app.
                        </p>
                      </router-link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Porfolio</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                >
                  <li v-for="component in components" :key="component.title">
                    <NavigationMenuLink as-child>
                      <a
                        :href="component.href"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">
                          {{ component.title }}
                        </div>
                        <p
                          class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                        >
                          {{ component.description }}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">
                <router-link to="/contact"> {{ $t("navigation.contact") }} </router-link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 py-2 mr-2 px-2 text-base flex-shrink-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <Hamburger></Hamburger>
        <span class="sr-only">Toggle Menu</span>
      </button>
      <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <Select>
          <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Tilni tanlang" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <!-- <SelectLabel>Tillar</SelectLabel> -->
              <SelectItem value="uz">O‘zbekcha</SelectItem>
              <SelectItem value="oz">Ўзбекча</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="kr">Qaraqalpaqsha</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <nav class="flex items-center">
          <Popover>
            <PopoverTrigger>
              <Button variant="ghost" class="px-3" size="icon">
                <Theme />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Popover</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button variant="ghost" class="px-3" size="icon">
                <Settings />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Popover</PopoverContent>
          </Popover>
          <Button variant="ghost" class="px-3" size="icon">
            <Github />
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button variant="ghost" class="px-3" size="icon">
                <ThemeIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Popover</PopoverContent>
          </Popover>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button";
// Icons
import Logo from "@/components/icons/Logo.vue";
import Theme from "@/components/icons/Theme.vue";
import Github from "@/components/icons/Github.vue";
import Settings from "@/components/icons/Settings.vue";
import ThemeIcon from "@/components/icons/ThemeIcon.vue";
import Hamburger from "@/components/icons/Hamburger.vue";

// Components
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Variables and data
const components: { title: string; href: string; description: string }[] = [
  {
    title: "My projects",
    href: "/docs/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Public Repositories",
    href: "/docs/components/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "GitHub Profile",
    href: "/docs/components/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "LinkedIn Profile",
    href: "/docs/components/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "YouTube channel",
    href: "/docs/components/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Telegram channel",
    href: "/docs/components/scroll-area",
    description: "Visually or semantically separates content.",
  },
];
</script>

<style lang="scss" scoped></style>
