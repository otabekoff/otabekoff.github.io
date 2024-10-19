<script setup lang="ts">
import { Separator } from "../components/ui/separator";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode({ disableTransition: false });

// Resources
import CheckerBoard from "@/components/CheckerBoard.vue";

// Components
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

// Component icons
import Logo from "@/components/icons/Logo.vue";
import Apple from "@/components/icons/Apple.vue";
import Google from "@/components/icons/Google.vue";
import Discord from "@/components/icons/Discord.vue";
import Reddit from "@/components/icons/Reddit.vue";
import Telegram from "@/components/icons/Telegram.vue";
import Twitter from "@/components/icons/Twitter.vue";

// Functions
import { cn } from "@/lib/utils";

// Icons
import { MessagesSquare, Play, ExternalLink } from "lucide-vue-next";
import Features from "@/components/sections/home/Features.vue";

// Data
const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
];
</script>

<template>
  <main id="home">
    <section class="relative overflow-hidden py-32">
      <div class="container">
        <div
          class="absolute inset-x-0 top-0 z-10 flex size-full items-center justify-center opacity-100"
        >
          <CheckerBoard :opacity="mode == 'dark' ? 0.07 : 1" />
        </div>
        <div class="mx-auto flex max-w-5xl flex-col items-center">
          <div class="z-10 flex flex-col items-center gap-6 text-center">
            <Logo :color="mode == 'dark' ? 'white' : 'black'" class="h-14 w-14" />
            <Badge variant="outline">Full Stack Senior Developer</Badge>
            <div>
              <h1 class="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
                Otabek Sadiridinov
              </h1>
              <p class="text-muted-foreground lg:text-xl">
                I design and develop high-performance web applications with a focus on
                clean code, intuitive interfaces, and cutting-edge technologies. Let’s
                build something exceptional together.
              </p>
            </div>
            <div class="mt-4 flex justify-center gap-2">
              <Button>Hire me now</Button>
              <Button variant="outline">
                More about me <ExternalLink class="ml-2 h-4" />
              </Button>
            </div>
            <div class="mt-16 flex flex-col items-center gap-4">
              <p class="text-center: text-muted-foreground lg:text-left">
                Find my social media profiles
              </p>
              <div class="flex flex-wrap items-center justify-center gap-4">
                <a href="#" class="group px-3" variant="outline">
                  <img
                    src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui-small.svg"
                    alt="company logo"
                    class="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a href="#" class="group px-3" variant="outline">
                  <img
                    src="https://www.shadcnblocks.com/images/block/logos/typescript-small.svg"
                    alt="company logo"
                    class="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>

                <a href="#" class="group px-3" variant="outline">
                  <img
                    src="https://www.shadcnblocks.com/images/block/logos/react-icon.svg"
                    alt="company logo"
                    class="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a href="#" class="group px-3" variant="outline">
                  <img
                    src="https://www.shadcnblocks.com/images/block/logos/tailwind-small.svg"
                    alt="company logo"
                    class="h-4 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Features></Features>
    <section class="py-32">
      <div class="container">
        <div class="grid items-center gap-8 lg:grid-cols-2">
          <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span class="flex size-12 items-center justify-center rounded-full bg-accent">
              <MessagesSquare class="size-6" />
            </span>
            <h1 class="my-6 text-pretty text-3xl font-bold lg:text-4xl">
              Welcome to Bekfolio!
            </h1>
            <p class="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              As a seasoned Full Stack Senior Developer, I specialize in creating robust,
              scalable web applications from front to back. With expertise across modern
              technologies and a passion for building efficient, user-centric solutions, I
              help businesses bring their digital visions to life. Dive in to explore my
              portfolio, where innovation meets functionality.
            </p>
            <div
              class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
            >
              <Button variant="outline" class="w-full sm:w-auto" size="lg">
                <Play class="mr-2 size-4" />
                Watch Demo
              </Button>
              <Button class="w-full sm:w-auto" size="lg"> Get Started </Button>
            </div>
          </div>
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            class="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container">
        <div class="grid items-center gap-8 lg:grid-cols-2">
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            class="max-h-96 w-full rounded-md object-cover"
          />
          <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span class="flex size-12 items-center justify-center rounded-full bg-accent">
              <MessagesSquare class="size-6" />
            </span>
            <h1 class="my-6 text-pretty text-3xl font-bold lg:text-4xl">
              Welcome to Bekfolio!
            </h1>
            <p class="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              As a seasoned Full Stack Senior Developer, I specialize in creating robust,
              scalable web applications from front to back. With expertise across modern
              technologies and a passion for building efficient, user-centric solutions, I
              help businesses bring their digital visions to life. Dive in to explore my
              portfolio, where innovation meets functionality.
            </p>
            <div
              class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
            >
              <Button variant="outline" class="w-full sm:w-auto" size="lg">
                <Play class="mr-2 size-4" />
                Watch Demo
              </Button>
              <Button class="w-full sm:w-auto" size="lg"> Get Started </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32">
      <div class="container">
        <div class="flex flex-col items-center text-center">
          <h3 class="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Contact with me
          </h3>
          <p class="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque
            mollitia fugiat omnis!
          </p>
          <div class="w-full md:max-w-lg">
            <div class="flex flex-col justify-center gap-2 sm:flex-row">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
            <p class="mt-2 text-left text-xs text-muted-foreground">
              View our
              <a href="#" class="underline hover:text-foreground"> privacy policy </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32">
      <div class="container">
        <footer>
          <div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <img
              src="https://www.shadcnblocks.com
/images/block/logos/shadcn-ui.svg"
              alt="logo"
              class="mb-8 mr-auto h-7 md:mb-0"
            />
            <div class="flex flex-col gap-4 md:flex-row md:items-center">
              <p class="text-lg font-medium">Copy the code and make it yours.</p>
              <div class="flex gap-2">
                <a
                  href="#"
                  class="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                >
                  <Apple class="size-7 text-background" />
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center rounded-lg bg-primary p-2.5"
                >
                  <Google class="size-4 text-background" />
                </a>
              </div>
            </div>
          </div>
          <Separator class="my-14" />
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="(section, sectionIdx) in sections" :key="sectionIdx">
              <h3 class="mb-4 font-bold">{{ section.title }}</h3>
              <ul class="space-y-4 text-muted-foreground">
                <li
                  v-for="(link, index) in section.links"
                  :key="index"
                  class="font-medium hover:text-primary"
                >
                  <a :href="link.href">{{ link.name }}</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mb-4 font-bold">Legal</h3>
              <ul class="space-y-4 text-muted-foreground">
                <li class="font-medium hover:text-primary">
                  <a href="#">Term of Services</a>
                </li>
                <li class="font-medium hover:text-primary">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <h3 class="mb-4 mt-8 font-bold">Social</h3>
              <ul class="flex items-center space-x-6 text-muted-foreground">
                <li class="font-medium hover:text-primary">
                  <a href="#">
                    <Discord class="size-6" />
                  </a>
                </li>
                <li class="font-medium hover:text-primary">
                  <a href="#">
                    <Reddit class="size-6" />
                  </a>
                </li>
                <li class="font-medium hover:text-primary">
                  <a href="#">
                    <Twitter class="size-6" />
                  </a>
                </li>
                <li class="font-medium hover:text-primary">
                  <a href="#">
                    <Telegram class="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator class="my-14" />
          <p class="text-sm text-muted-foreground">
            © 2024 Shadcnblocks. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  </main>
</template>
