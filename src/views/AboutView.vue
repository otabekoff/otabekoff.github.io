<template>
  <div id="about">
    <section class="py-32">
      <div class="container flex flex-col gap-28">
        <div class="flex flex-col gap-7">
          <h1 class="text-4xl font-semibold lg:text-7xl">
            Bringing the power of software to everyone
          </h1>
          <p class="max-w-xl text-lg">
            Stacker makes it easy to build customer portals, CRMs, internal tools, and
            other business applications for your team. In minutes, not months.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            class="size-full max-h-96 rounded-2xl object-cover"
          />
          <div class="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
            <p class="text-sm text-muted-foreground">OUR MISSION</p>
            <p class="text-lg font-medium">
              We believe that building software should be insanely easy. That everyone
              should have the freedom to create the tools they need, without any
              developers, designers or drama.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-6 md:gap-20">
          <div class="max-w-xl">
            <h2 class="mb-2.5 text-3xl font-semibold md:text-5xl">
              We make creating software ridiculously easy
            </h2>
            <p class="text-muted-foreground">
              We aim to help empower 1,000,000 teams to create their own software. Here is
              how we plan on doing it.
            </p>
          </div>
          <div class="grid gap-10 md:grid-cols-3">
            <div class="flex flex-col">
              <div
                class="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent"
              >
                <Files class="size-5" />
              </div>
              <h3 class="mb-3 mt-2 text-lg font-semibold">Being radically open</h3>
              <p class="text-muted-foreground">
                We believe there’s no room for big egos and there’s always time to help
                each other. We strive to give and receive feedback, ideas, perspectives
              </p>
            </div>
            <div class="flex flex-col">
              <div
                class="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent"
              >
                <CircleArrowRight class="size-5" />
              </div>
              <h3 class="mb-3 mt-2 text-lg font-semibold">Moving the needle</h3>
              <p class="text-muted-foreground">
                Boldly, bravely and with clear aims. We seek out the big opportunities and
                double down on the most important things to work on.
              </p>
            </div>
            <div class="flex flex-col">
              <div
                class="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent"
              >
                <Settings class="size-5" />
              </div>
              <h3 class="mb-3 mt-2 text-lg font-semibold">Optimizing for empowerment</h3>
              <p class="text-muted-foreground">
                We believe that everyone should be empowered to do whatever they think is
                in the company&apos;s best interests.
              </p>
            </div>
          </div>
        </div>
        <div class="grid gap-10 md:grid-cols-2">
          <div>
            <p class="mb-10 text-sm font-medium text-muted-foreground">JOIN OUR TEAM</p>
            <h2 class="mb-2.5 text-3xl font-semibold md:text-5xl">
              We&apos;re changing how software is made
            </h2>
          </div>
          <div>
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder.svg"
              alt="placeholder"
              class="mb-6 max-h-36 w-full rounded-xl object-cover"
            />
            <p class="text-muted-foreground">
              And we&apos;re looking for the right people to help us do it. If you&apos;re
              passionate about making change in the world, this might be the place for you
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32">
      <div class="container">
        <h1 class="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
          Frequently asked questions
        </h1>
        <Accordion v-for="(faq, index) in faqs" :key="index" type="single" collapsible>
          <AccordionItem :value="`item-${index}`">
            <AccordionTrigger class="hover:text-foreground/60 hover:no-underline">
              {{ faq.question }}
            </AccordionTrigger>
            <AccordionContent>{{ faq.answer }}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CircleArrowRight, Files, Settings } from "lucide-vue-next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a FAQ?",
    answer:
      "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    question: "What is the purpose of a FAQ?",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    question: "How do I create a FAQ?",
    answer:
      "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
  },
  {
    question: "What are the benefits of a FAQ?",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
];
</script>

<style></style>
