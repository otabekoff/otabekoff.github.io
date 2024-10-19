<template>
  <main id="contact">
    <section class="py-24">
      <div class="container">
        <div class="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div class="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div class="text-center lg:text-left">
              <h1 class="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                Contact Me
              </h1>
              <p class="text-muted-foreground">
                I'm available for questions, feedback, or collaboration
                opportunities. Let us know how we can help!
              </p>
            </div>
            <div class="mx-auto w-fit lg:mx-0">
              <h3 class="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul class="ml-4 list-disc">
                <li>
                  <span class="font-bold">Phone: </span>
                  <a href="tel:+998905541574" class="underline">+998 90 554 15 74</a>
                </li>
                <li>
                  <span class="font-bold">Email: </span>
                  <a href="mailto:sadiridinovotabek@gmail.com" class="underline">
                    sadiridinovotabek@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div class="flex gap-4">
              <div class="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div class="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div class="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div class="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div class="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button class="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
</script>

<style lang="scss" scoped>

</style>

