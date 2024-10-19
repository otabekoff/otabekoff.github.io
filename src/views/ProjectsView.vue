<template>
  <main id="projects">
    <section>
      <div class="container">
        <div class="grid items-center gap-8 lg:grid-cols-2">
          <div
            class="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left"
          >
            <p>New Release</p>
            <h1 class="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome to Our Website
            </h1>
            <p class="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque
              mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.
            </p>
            <div
              class="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
            >
              <Button class="w-full sm:w-auto">
                <ArrowRight class="mr-2 size-4" />
                Primary
              </Button>
              <Button variant="outline" class="w-full sm:w-auto"> Secondary </Button>
            </div>
          </div>
          <div class="relative aspect-[3/4]">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                class="size-full text-muted-foreground opacity-20"
              >
                <circle
                  v-for="(dot, index) in dots"
                  key="{index}"
                  :r="(3 * index) / dots.length"
                  :cx="
                    400 +
                    Math.round(Math.cos(0.2 * index) * (40 + index * (360 / dots.length)))
                  "
                  :cy="
                    400 +
                    Math.round(Math.sin(0.2 * index) * (40 + index * (360 / dots.length)))
                  "
                  :opacity="1 - Math.sin(0.2 * index)"
                />
              </svg>
            </div>
            <div
              class="absolute left-[8%] top-[10%] flex aspect-[5/6] w-[38%] justify-center rounded-lg border border-border bg-accent"
            ></div>
            <div
              class="absolute right-[12%] top-[20%] flex aspect-square w-1/5 justify-center rounded-lg border border-border bg-accent"
            ></div>
            <div
              class="absolute bottom-[24%] right-[24%] flex aspect-[5/6] w-[38%] justify-center rounded-lg border border-border bg-accent"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container text-center">
        <div class="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 class="text-3xl font-extrabold lg:text-6xl">
            A Collection of Components Built With Shadcn & Tailwind
          </h1>
          <p class="text-balance text-muted-foreground lg:text-lg">
            Finely crafted components built with React, Tailwind and Shadcn UI. Developers
            can copy and paste these blocks directly into their project.
          </p>
        </div>
        <Button size="lg" class="mt-10"> Discover all components </Button>
        <div class="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span class="mx-4 inline-flex items-center -space-x-4">
            <Avatar class="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar class="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar class="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar class="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                alt="placeholder"
              />
            </Avatar>
            <Avatar class="size-14 border">
              <AvatarImage
                src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                alt="placeholder"
              />
            </Avatar>
          </span>
          <div>
            <div class="flex items-center gap-1">
              <Star class="size-5 fill-yellow-400 text-yellow-400" />
              <Star class="size-5 fill-yellow-400 text-yellow-400" />
              <Star class="size-5 fill-yellow-400 text-yellow-400" />
              <Star class="size-5 fill-yellow-400 text-yellow-400" />
              <Star class="size-5 fill-yellow-400 text-yellow-400" />
              <span class="font-semibold">5.0</span>
            </div>
            <p class="text-left font-medium text-muted-foreground">from 200+ reviews</p>
          </div>
        </div>
      </div>
    </section>
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 600"
          class="min-h-full min-w-full"
        >
          <defs>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="1"
                strokeOpacity="{0.5}"
              />
            </pattern>
          </defs>
          <rect width="1400" height="600" fill="url(#grid)" />
        </svg>
      </div>
      <div class="relative">
        <div
          class="absolute left-0 z-10 hidden h-full w-1/2 bg-[linear-gradient(to_right,hsl(var(--background))_85%,transparent_100%)] md:block"
        ></div>
        <div
          class="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center"
        >
          <div
            class="z-20 -mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] shrink-0 bg-background px-[calc(theme(container.padding))] pt-32 md:w-1/2 md:bg-transparent md:pb-32"
          >
            <div class="flex flex-col items-start text-left">
              <div class="max-w-sm">
                <h1 class="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                  Welcome to Our Website
                </h1>
                <Button>Primary</Button>
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-16 pb-8 pt-12 md:py-32">
              <div
                v-for="(line, i) in integrations"
                :key="i"
                class="flex gap-x-24 odd:-translate-x-24"
              >
                <div
                  v-for="integration in line"
                  :key="integration.id"
                  class="size-24 rounded-xl border border-background bg-background shadow-xl"
                >
                  <div class="size-full bg-muted/20 p-4">
                    <img
                      :alt="integration.icon.alt"
                      :src="integration.icon.link || integration.icon.src"
                      class="integration-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container">
        <Badge
          variant="outline"
          class="mb-4 max-w-full text-sm font-normal lg:mb-10 lg:py-2 lg:pl-2 lg:pr-5"
        >
          <span
            class="mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent"
          >
            <Bell class="size-4" />
          </span>
          <p class="truncate whitespace-nowrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque
            distinctio iusto voluptas voluptatum sed!
          </p>
        </Badge>
        <h1
          class="mb-6 text-4xl font-bold leading-none tracking-tighter md:text-[7vw] lg:text-8xl"
        >
          Streamline your workflow experience.
        </h1>
        <p class="max-w-2xl text-muted-foreground md:text-[2vw] lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor assumenda
          voluptatem nemo magni a maiores aspernatur.
        </p>
        <div class="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">
          <Button size="lg" class="w-full md:w-auto"> Get a demo </Button>
          <Button size="lg" variant="outline" class="w-full md:w-auto">
            <PlayCircle class="mr-2 size-4" />
            Watch video
          </Button>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container max-w-6xl">
        <div class="flex flex-col gap-12 md:flex-row">
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            class="max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2"
          />
          <div class="lg:p-10">
            <h2 class="text-balance text-3xl font-medium md:text-5xl">
              Built with the latest technology stack
            </h2>
            <p class="mt-1 text-muted-foreground md:mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias unde et
              doloremque dignissimos error temporibus quisquam porro ducimus esse quod, a
              officiis.
            </p>
            <Button variant="outline" class="mt-6">
              Learn more <ChevronRight class="ml-2 size-4" />
            </Button>
            <ul class="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0">
              <li class="flex items-center gap-3">
                <CircleCheckBig class="size-4" /> Quality
              </li>
              <li class="flex items-center gap-3">
                <CircleCheckBig class="size-4" />
                Multi-purpose
              </li>
              <li class="flex items-center gap-3">
                <CircleCheckBig class="size-4" /> Easy to use
              </li>
              <li class="flex items-center gap-3">
                <CircleCheckBig class="size-4" /> Fast
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32">
      <div class="container max-w-5xl">
        <Tabs defaultValue="feature-1">
          <TabsList class="flex h-auto w-full flex-col gap-2 bg-background md:flex-row">
            <TabsTrigger
              value="feature-1"
              class="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div class="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span
                  class="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"
                >
                  <MessageCircleMore class="size-4 text-primary" />
                </span>
                <p class="text-lg font-semibold md:text-2xl lg:text-xl">Get Started</p>
              </div>
              <p class="font-normal text-muted-foreground md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="feature-2"
              class="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div class="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span
                  class="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"
                >
                  <Lightbulb class="size-4 text-primary" />
                </span>
                <p class="text-lg font-semibold md:text-2xl lg:text-xl">Get Ideas</p>
              </div>
              <p class="font-normal text-muted-foreground md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="feature-3"
              class="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
            >
              <div class="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span
                  class="flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"
                >
                  <ListChecks class="size-4 text-primary" />
                </span>
                <p class="text-lg font-semibold md:text-2xl lg:text-xl">Build</p>
              </div>
              <p class="font-normal text-muted-foreground md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="feature-1">
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
              alt=""
              class="aspect-video rounded-md object-cover"
            />
          </TabsContent>
          <TabsContent value="feature-2">
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-2.svg"
              alt=""
              class="aspect-video rounded-md object-cover"
            />
          </TabsContent>
          <TabsContent value="feature-3">
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-3.svg"
              alt=""
              class="aspect-video rounded-md object-cover"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
    <!-- Gallery Section -->
    <section class="py-32">
      <div class="container">
        <div
          class="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16"
        >
          <div>
            <p class="mb-6 text-xs font-medium uppercase tracking-wider">Tag Line</p>
            <h2 class="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Gallery
            </h2>
            <a
              href="#"
              class="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
              Book a demo
              <ArrowRight
                class="ml-2 size-4 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
          <div class="mt-8 flex shrink-0 items-center justify-center gap-2">
            <!-- Previous Button -->
            <Button
              size="icon"
              variant="outline"
              @click="scrollPrev"
              :disabled="!canScrollPrev"
              class="disabled:pointer-events-auto"
            >
              <ArrowLeft class="size-5" />
            </Button>
            <!-- Next Button -->
            <Button
              size="icon"
              variant="outline"
              @click="scrollNext"
              :disabled="!canScrollNext"
              class="disabled:pointer-events-auto"
            >
              <ArrowRight class="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div class="w-full">
        <!-- Carousel Component -->
        <Carousel
          :setApi="setCarouselApi"
          :opts="{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }"
        >
          <CarouselContent
            class="ml-[calc(theme(container.padding)-20px)] mr-[calc(theme(container.padding))] 2xl:ml-[calc(50vw-700px+theme(container.padding)-20px)] 2xl:mr-[calc(50vw-700px+theme(container.padding))]"
          >
            <CarouselItem
              v-for="item in data"
              :key="item.id"
              class="pl-[20px] md:max-w-[452px]"
            >
              <a :href="item.href" class="group flex flex-col justify-between">
                <div>
                  <div class="flex aspect-[3/2] text-clip rounded-xl">
                    <div class="flex-1">
                      <div
                        class="relative size-full origin-bottom transition duration-300 group-hover:scale-105"
                      >
                        <img
                          :src="item.image"
                          :alt="item.title"
                          class="size-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl"
                >
                  {{ item.title }}
                </div>
                <div
                  class="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9"
                >
                  {{ item.summary }}
                </div>
                <div class="flex items-center text-sm">
                  Read more
                  <ArrowRight
                    class="ml-2 size-5 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </a>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
"use client";
const dots = Array.from(Array(720).keys());

import { ref, watch, onMounted, onUnmounted } from "vue";
import type { CarouselApi } from "@/components/ui/carousel";

// Single reactive variable to manage the carousel API
const carouselApi = ref<CarouselApi | null>(null);

// Reactive variables to track whether scrolling is possible
const canScrollPrev = ref(false);
const canScrollNext = ref(false);

// Function to update the scroll state based on the carousel API's methods
const updateSelection = () => {
  if (carouselApi.value) {
    canScrollPrev.value = carouselApi.value.canScrollPrev();
    canScrollNext.value = carouselApi.value.canScrollNext();
  }
};

// Method to set the carousel API
const setCarouselApi = (api: CarouselApi) => {
  carouselApi.value = api;
};

// Handle previous button click
const scrollPrev = () => {
  carouselApi.value?.scrollPrev();
};

// Handle next button click
const scrollNext = () => {
  carouselApi.value?.scrollNext();
};

// Watch for changes in the carouselApi
watch(carouselApi, (newApi) => {
  if (!newApi) return;

  // Initial update when API is available
  updateSelection();

  // Attach the event listener for selection changes
  newApi.on("select", updateSelection);

  // Cleanup event listeners on unmount
  onUnmounted(() => {
    if (carouselApi.value) {
      carouselApi.value.off("select", updateSelection);
    }
  });
});

// Dummy data for the carousel
const data = [
  {
    id: "item-1",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    href: "#",
    image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "item-2",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    href: "#",
    image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "item-3",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    href: "#",
    image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "item-4",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    href: "#",
    image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "item-5",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    href: "#",
    image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import {
  ChevronRight,
  CircleCheckBig,
  Lightbulb,
  ListChecks,
  MessageCircleMore,
  ArrowLeft,
  ArrowRight,
  Bell,
  PlayCircle,
  Star,
} from "lucide-vue-next";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const integrations = [
  [
    {
      id: "integration-1",
      icon: {
        link: "https://www.shadcnblocks.com/images/block/block-1.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-2",
      icon: {
        link: "https://www.shadcnblocks.com/images/block/block-2.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-3",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-3.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-4",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-4.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-5",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-5.svg",
        alt: "Integration",
      },
    },
  ],
  [
    {
      id: "integration-6",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-6.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-7",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-1.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-8",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-2.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-9",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-3.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-10",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-4.svg",
        alt: "Integration",
      },
    },
  ],
  [
    {
      id: "integration-11",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-5.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-12",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-6.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-13",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-1.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-14",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-2.svg",
        alt: "Integration",
      },
    },
    {
      id: "integration-15",
      icon: {
        src: "https://www.shadcnblocks.com/images/block/block-3.svg",
        alt: "Integration",
      },
    },
  ],
];

import { Avatar, AvatarImage } from "@/components/ui/avatar";
</script>

<style lang="scss" scoped></style>
