<template>
  <main id="skills">
    <section class="py-10">
      <div class="container">
        <div
          class="flex items-center justify-center rounded-2xl border bg-cover bg-center px-8 py-20 text-center md:p-20 bg-[url(/circles.svg)]"
        >
          <div class="mx-auto max-w-screen-md">
            <h1 class="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Start building your websites faster
            </h1>
            <p class="text-muted-foreground md:text-lg">
              Try our tools and services to build your website faster. Start with a 14-day
              free trial. No credit card required. No setup fees. Cancel anytime.
            </p>
            <div class="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline"> Learn More </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10">
      <div class="container flex flex-col items-center text-center">
        <p class="semibold">We&apos;re hiring</p>
        <h2 class="my-6 text-pretty text-2xl font-bold lg:text-4xl">Meet our team</h2>
        <p class="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque
          mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.
        </p>
      </div>
      <div class="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="person in people" :key="person.id" class="flex flex-col items-center">
          <Avatar class="mb-4 size-20 border md:mb-5 lg:size-24">
            <AvatarImage :src="person.avatar" />
            <AvatarFallback>{{ person.name }}</AvatarFallback>
          </Avatar>
          <p class="text-center font-medium">{{ person.name }}</p>
          <p class="text-center text-muted-foreground">{{ person.role }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const people = [
  {
    id: "person-1",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
  },
  {
    id: "person-2",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
  },
  {
    id: "person-3",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
  },
  {
    id: "person-4",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
  },
  {
    id: "person-5",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
  },
  {
    id: "person-6",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-6.webp",
  },
  {
    id: "person-7",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-7.webp",
  },
  {
    id: "person-8",
    name: "Name",
    role: "Role",
    avatar: "https://www.shadcnblocks.com/images/block/avatar-8.webp",
  },
];
</script>

<style lang="scss" scoped></style>
