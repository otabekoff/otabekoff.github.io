<template>
  <main id="resume">
    <section class="py-32">
      <div class="container">
        <div class="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h1 class="mb-6 text-pretty text-4xl font-semibold lg:text-5xl">
            This is where your feature goes
          </h1>

          <div
            class="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <Card>
              <CardHeader class="pb-1">
                <Code class="size-4" strokeWidth="{1}" />
              </CardHeader>
              <CardContent class="text-left">
                <h2 class="mb-1 text-lg font-semibold">Card Title</h2>
                <p class="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter class="justify-end pb-0 pr-0">
                <img
                  class="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-1">
                <Play class="size-4" strokeWidth="{1}" />
              </CardHeader>
              <CardContent class="text-left">
                <h2 class="mb-1 text-lg font-semibold">Card Title</h2>
                <p class="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter class="justify-end pb-0 pr-0">
                <img
                  class="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-1">
                <GitBranch class="size-4" strokeWidth="{1}" />
              </CardHeader>
              <CardContent class="text-left">
                <h2 class="mb-1 text-lg font-semibold">Card Title</h2>
                <p class="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter class="justify-end pb-0 pr-0">
                <img
                  class="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-1">
                <List class="size-4" strokeWidth="{1}" />
              </CardHeader>
              <CardContent class="text-left">
                <h2 class="mb-1 text-lg font-semibold">Card Title</h2>
                <p class="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter class="justify-end pb-0 pr-0">
                <img
                  class="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-1">
                <WandSparkles class="size-4" strokeWidth="{1}" />
              </CardHeader>
              <CardContent class="text-left">
                <h2 class="mb-1 text-lg font-semibold">Card Title</h2>
                <p class="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter class="justify-end pb-0 pr-0">
                <img
                  class="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
            <Card>
              <CardHeader class="pb-1">
                <Sparkles class="size-4" strokeWidth="{1}" />
              </CardHeader>
              <CardContent class="text-left">
                <h2 class="mb-1 text-lg font-semibold">Card Title</h2>
                <p class="leading-snug text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </CardContent>
              <CardFooter class="justify-end pb-0 pr-0">
                <img
                  class="h-40 w-full rounded-tl-md object-cover object-center"
                  src="https://www.shadcnblocks.com/images/block/placeholder.svg"
                  alt="placeholder"
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container">
        <div class="flex flex-col items-center gap-6 border-y py-14 text-center md:py-20">
          <q class="block max-w-4xl text-2xl font-medium lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt iste
            distinctio corporis, alias illum.
          </q>
          <div class="flex flex-col items-center gap-2 sm:flex-row">
            <img
              src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg"
              alt="shadcn"
              class="h-7"
            />
            <p class="font-medium">John Doe, Founder & CEO of Company</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container">
        <Carousel class="w-full">
          <div class="mb-8 flex justify-between px-1 lg:mb-12">
            <h2 class="text-2xl font-semibold lg:text-5xl">Why Clients Love Us</h2>
            <div class="flex items-center space-x-2">
              <CarouselPrevious class="static translate-y-0" />
              <CarouselNext class="static translate-y-0" />
            </div>
          </div>
          <CarouselContent>
            <CarouselItem
              v-for="(testimonial, idx) in testimonials"
              :key="idx"
              class="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div class="h-full p-1">
                <div class="flex h-full flex-col justify-between rounded-lg border p-6">
                  <q class="leading-7 text-foreground/70"> {{ testimonial.content }} </q>
                  <div class="mt-6 flex gap-4 leading-5">
                    <Avatar class="size-9 rounded-full ring-1 ring-input">
                      <AvatarImage :src="testimonial.avatar" :alt="testimonial.name" />
                    </Avatar>
                    <div class="text-sm">
                      <p class="font-medium">{{ testimonial.name }}</p>
                      <p class="text-muted-foreground">{{ testimonial.role }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
    <section class="py-32">
      <div class="container">
        <div
          class="flex flex-col items-center justify-between gap-8 rounded-lg bg-accent p-6 md:flex-row lg:px-20 lg:py-16"
        >
          <div class="w-full">
            <h4 class="mb-1 text-2xl font-bold md:text-3xl">Integrations</h4>
            <p class="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo
              praesentium nisi, accusantium quae.
            </p>
            <Button class="mt-8 px-0 underline" variant="link">
              Get Started <ArrowRight class="ml-2 size-4" />
            </Button>
          </div>
          <div class="w-full">
            <ul class="space-y-2 text-sm font-medium sm:text-base lg:text-lg">
              <li class="flex items-center">
                <Check class="mr-4 size-5" />
                Lorem ipsum dolor sit.
              </li>
              <li class="flex items-center">
                <Check class="mr-4 size-5" />
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </li>
              <li class="flex items-center">
                <Check class="mr-4 size-5" />
                Lorem ipsum dolor sit amet consectetur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container">
        <div class="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 class="text-pretty text-4xl font-bold lg:text-6xl">My main skills</h2>
          <p class="text-muted-foreground lg:text-xl">
            Check out our affordable pricing plans
          </p>
          <div class="flex flex-col items-stretch gap-6 md:flex-row">
            <Card class="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Plus</p>
                </CardTitle>
                <p class="text-sm text-muted-foreground">For personal use</p>
                <span class="text-4xl font-bold">
                  {{ isYearly ? "$15" : "$19" }}
                </span>
                <p class="text-muted-foreground">
                  Billed {{ isYearly ? "$180" : "$228" }} anually
                </p>
              </CardHeader>
              <CardContent>
                <Separator class="mb-6" />
                <ul class="space-y-4">
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter class="mt-auto">
                <Button class="w-full">
                  Get Started
                  <ArrowRight class="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card class="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Pro</p>
                </CardTitle>
                <p class="text-sm text-muted-foreground">For professionals</p>
                <span class="text-4xl font-bold">
                  {{ isYearly ? "$35" : "$49" }}
                </span>
                <p class="text-muted-foreground">
                  Billed {{ isYearly ? "$420" : "$588" }} anually
                </p>
              </CardHeader>
              <CardContent>
                <Separator class="mb-6" />
                <p class="mb-3 text-lg font-semibold">Everything in Plus, and:</p>
                <ul class="space-y-4">
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter class="mt-auto">
                <Button class="w-full">
                  Get Started
                  <ArrowRight class="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card class="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Plus</p>
                </CardTitle>
                <p class="text-sm text-muted-foreground">For personal use</p>
                <span class="text-4xl font-bold">
                  {{ isYearly ? "$15" : "$19" }}
                </span>
                <p class="text-muted-foreground">
                  Billed {{ isYearly ? "$180" : "$228" }} anually
                </p>
              </CardHeader>
              <CardContent>
                <Separator class="mb-6" />
                <ul class="space-y-4">
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter class="mt-auto">
                <Button class="w-full">
                  Get Started
                  <ArrowRight class="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card class="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Plus</p>
                </CardTitle>
                <p class="text-sm text-muted-foreground">For personal use</p>
                <span class="text-4xl font-bold">
                  {{ isYearly ? "$15" : "$19" }}
                </span>
                <p class="text-muted-foreground">
                  Billed {{ isYearly ? "$180" : "$228" }} anually
                </p>
              </CardHeader>
              <CardContent>
                <Separator class="mb-6" />
                <ul class="space-y-4">
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <CircleCheck class="size-4" />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter class="mt-auto">
                <Button class="w-full">
                  Get Started
                  <ArrowRight class="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container">
        <div class="mx-auto max-w-screen-lg">
          <div class="text-center lg:text-left">
            <h1 class="text-left text-3xl font-medium md:text-4xl">Job Openings</h1>
          </div>
          <div class="mx-auto mt-6 flex flex-col gap-16 md:mt-14">
            <div v-for="jobCategory in jobs" :key="jobCategory.category" class="grid">
              <h2 class="border-b pb-4 text-xl font-bold">
                {{ jobCategory.category }}
              </h2>
              <div
                v-for="job in jobCategory.openings"
                :key="job.title"
                class="flex items-center justify-between border-b py-4"
              >
                <a :href="job.link" class="font-semibold hover:underline">
                  {{ job.title }}
                </a>

                <div size="sm" variant="outline" class="pointer-events-none rounded-full">
                  {{ job.location }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32">
      <div class="container flex flex-col items-center text-center">
        <h1 class="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Trusted by these companies
        </h1>
      </div>
      <div class="pt-10 md:pt-16 lg:pt-20">
        <div class="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel :opts="{ loop: true }" :plugins="[AutoScroll({ playOnInit: true })]">
            <CarouselContent class="ml-0">
              <CarouselItem
                v-for="logo in logos"
                :key="logo.id"
                class="basis-1/3 pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div class="mx-10 flex shrink-0 items-center justify-center">
                  <div>
                    <img :src="logo.image" :alt="logo.description" class="h-7 w-auto" />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div
            class="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"
          ></div>
          <div
            class="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"
          ></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
"use client";

import { ref } from "vue";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
  CircleCheck,
  Check,
  Code,
  GitBranch,
  List,
  Play,
  Sparkles,
  WandSparkles,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const isYearly = ref(false);

const testimonials = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "/images/avatar-1.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt.  id ut omnis repellat. Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis.",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    avatar: "/images/avatar-2.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "John Smith",
    role: "COO",
    avatar: "/images/avatar-3.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. Lorem ipsum dolor sit.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    avatar: "/images/avatar-4.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. incidunt. Ratione, ullam? Iusto id ut omnis repellat ratione.",
  },
  {
    name: "Richard Doe",
    role: "Designer",
    avatar: "/images/avatar-5.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Gordon Doe",
    role: "Developer",
    avatar: "/images/avatar-6.webp",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
];

const logos = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "https://www.shadcnblocks.com/logos/astro.svg",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image: "https://www.shadcnblocks.com/logos/figma.svg",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image: "https://www.shadcnblocks.com/logos/nextjs.svg",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image: "https://www.shadcnblocks.com/logos/react.png",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "https://www.shadcnblocks.com/logos/shadcn-ui.svg",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "https://www.shadcnblocks.com/logos/supabase.svg",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "https://www.shadcnblocks.com/logos/tailwind.svg",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "https://www.shadcnblocks.com/logos/vercel.svg",
  },
];

const jobs = [
  {
    category: "Engineering",
    openings: [
      {
        title: "Senior Software Engineer",
        location: "Remote",
        link: "#",
      },
      {
        title: "Product Manager",
        location: "Windhoek, Namibia",
        link: "#",
      },
      {
        title: "QA Engineer",
        location: "Remote",
        link: "#",
      },
      {
        title: "Technical Support Specialist",
        location: "Remote",
        link: "#",
      },
    ],
  },
  {
    category: "Marketing",
    openings: [
      {
        title: "Content Writer",
        location: "Fes, Morocco",
        link: "#",
      },
      {
        title: "Social Media Manager",

        location: "Goa, India",
        link: "#",
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
