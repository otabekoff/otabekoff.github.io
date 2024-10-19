<template>
  <main id="repositories" class="overflow-hidden py-32">
    <div class="container relative">
      <div
        class="pointer-events-none absolute inset-0 -top-20 -z-10 mx-auto hidden size-[500px] bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-25 [background-size:6px_6px] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] lg:block"
      ></div>
      <div class="relative flex justify-between gap-16">
        <div
          class="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-transparent lg:block"
        ></div>

        <div class="w-full max-w-96 shrink-0 justify-between">
          <p class="font-mono text-xs text-muted-foreground">What’s the solution?</p>
          <h2 class="mb-3 mt-6 text-3xl font-medium lg:text-4xl">
            Let Streamline handle the details
          </h2>
          <p class="text-sm text-muted-foreground">
            Streamline optimizes your workflow from start to finish. It gathers
            information, generates reports, automates tasks, and delivers results—all in
            one seamless system.
          </p>
        </div>
        <div class="hidden w-full max-w-3xl shrink-0 lg:block">
          <img
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder"
            class="max-h-[450px] w-full min-w-[450px] max-w-3xl rounded-lg border object-cover"
          />
        </div>
      </div>
      <div class="relative mt-8 grid md:grid-cols-3">
        <div class="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
          <Timer />
          <div>
            <h3 class="text-lg font-medium">Maximize efficiency</h3>
            <p class="mt-1 text-sm text-muted-foreground">
              Skip the manual tasks and complex setups. With Streamline, you can focus on
              what matters most while the system handles the rest.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
          <DollarSign />
          <div>
            <h3 class="text-lg font-medium">Optimize resources</h3>
            <p class="mt-1 text-sm text-muted-foreground">
              Don’t overspend on unnecessary tools or teams. Keep your operations lean and
              efficient by automating your workflows with Streamline.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
          <KeyRound />
          <div>
            <h3 class="text-lg font-medium">Simplify operations</h3>
            <p class="mt-1 text-sm text-muted-foreground">
              Say goodbye to managing multiple platforms. Streamline takes care of all the
              heavy lifting, ensuring consistent results with minimal hassle.
            </p>
          </div>
        </div>
        <div class="absolute -inset-x-4 top-0 h-px bg-input md:hidden"></div>
        <div
          class="absolute -inset-x-4 top-[-0.5px] row-start-2 h-px bg-input md:hidden"
        ></div>
        <div
          class="absolute -inset-x-4 top-[-0.5px] row-start-3 h-px bg-input md:hidden"
        ></div>
        <div
          class="absolute -inset-x-4 bottom-0 row-start-4 h-px bg-input md:hidden"
        ></div>
        <div class="absolute -left-2 -top-2 bottom-0 w-px bg-input md:hidden"></div>
        <div
          class="absolute -right-2 -top-2 bottom-0 col-start-2 w-px bg-input md:hidden"
        ></div>
        <div class="absolute -inset-x-2 top-0 hidden h-px bg-input md:block"></div>
        <div class="absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block"></div>
        <div
          class="absolute -left-[0.5px] -top-2 bottom-0 col-start-2 hidden w-px bg-input md:block"
        ></div>
        <div
          class="absolute -left-[0.5px] -top-2 bottom-0 col-start-3 hidden w-px bg-input md:block"
        ></div>
        <div class="absolute -top-2 bottom-0 right-0 hidden w-px bg-input md:block"></div>
      </div>
    </div>

    <section class="py-32">
      <div class="container">
        <div class="flex flex-col-reverse items-center justify-between gap-4 lg:flex-row">
          <p class="text-center text-lg font-medium lg:text-left lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae.
          </p>
          <div class="flex items-center gap-6 lg:gap-12">
            <div class="flex flex-col items-center gap-1">
              <div class="flex items-center gap-2 text-2xl font-medium">
                <span>4.8</span>
                <Star class="w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <div class="flex items-center gap-2">
                <Apple class="lg:mr-1 text-black w-4" />
                <span class="whitespace-nowrap text-xs lg:text-sm"> Apple Store </span>
              </div>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="flex items-center gap-2 text-2xl font-medium">
                <span>4.8</span>
                <Star class="w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <div class="flex items-center gap-2">
                <PlayStore class="lg:mr-1" />
                <span class="whitespace-nowrap text-xs lg:text-sm"> Play Store </span>
              </div>
            </div>
            <div class="flex flex-col items-center gap-1">
              <div class="flex items-center gap-2 text-2xl font-medium">
                <span>4.9</span>
                <Star class="w-4 text-yellow-400 fill-yellow-400" />
              </div>
              <div class="flex items-center gap-2">
                <Stars class="w-4 lg:mr-1" />
                <span class="whitespace-nowrap text-xs lg:text-sm"> Trustpilot </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative py-32 before:absolute before:inset-0 before:bg-primary/10 before:[mask-image:url(/waves.svg)] before:[mask-repeat:repeat] before:[mask-size:_64px_32px]"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background"
      ></div>
      <div class="container relative">
        <h2 class="mb-8 max-w-screen-sm text-balance text-2xl font-semibold lg:text-4xl">
          Build your own website with our UI blocks
        </h2>
        <div class="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex flex-col gap-10 rounded-lg border bg-background p-8"
          >
            <div>
              <component :is="feature.icon"></component>
              <h3 class="mb-2 mt-6 font-medium">{{ feature.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ feature.description }}</p>
            </div>
            <a :href="feature.link" class="flex items-center gap-2 text-sm font-medium">
              Learn more
              <ChevronRight class="w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container">
        <h1 class="text-center text-4xl font-semibold lg:text-6xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <div class="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
          <div class="text-center">
            <p class="text-sm font-medium text-muted-foreground">
              Reduce your time to hire by
            </p>
            <p class="pt-4 text-7xl font-semibold lg:pt-10">4x</p>
            <p class="text-2xl font-semibold text-muted-foreground">quicker</p>
          </div>
          <div class="text-center">
            <p class="text-sm font-medium text-muted-foreground">
              Clients have seen a decrease in
            </p>
            <p class="pt-4 text-7xl font-semibold lg:pt-10">50%</p>
            <p class="text-2xl font-semibold text-muted-foreground">in time to hire</p>
          </div>
          <div class="text-center">
            <p class="text-sm font-medium text-muted-foreground">
              The average number of hires per
            </p>
            <p class="pt-4 text-7xl font-semibold lg:pt-10">3</p>
            <p class="text-2xl font-semibold text-muted-foreground">months</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container">
        <p class="mb-4 text-xs text-muted-foreground">Why Us?</p>
        <h2 class="text-3xl font-medium lg:text-4xl">A better way to build websites</h2>
        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          <div
            class="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5"
          >
            <span
              class="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12"
            >
              <Timer class="size-5 md:size-6" />
            </span>
            <div>
              <h3 class="font-medium md:mb-2 md:text-xl">
                Performance
                <span
                  class="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"
                ></span>
              </h3>
              <p class="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.
              </p>
            </div>
          </div>
          <div
            class="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5"
          >
            <span
              class="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12"
            >
              <Zap class="size-5 md:size-6" />
            </span>
            <div>
              <h3 class="font-medium md:mb-2 md:text-xl">
                Innovation
                <span
                  class="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"
                ></span>
              </h3>
              <p class="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.
              </p>
            </div>
          </div>
          <div
            class="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5"
          >
            <span
              class="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12"
            >
              <ZoomIn class="size-5 md:size-6" />
            </span>
            <div>
              <h3 class="font-medium md:mb-2 md:text-xl">
                Quality
                <span
                  class="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"
                ></span>
              </h3>
              <p class="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.
              </p>
            </div>
          </div>
          <div
            class="relative flex gap-3 rounded-lg border-dashed md:block md:border-l md:p-5"
          >
            <span
              class="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12"
            >
              <PersonStanding class="size-5 md:size-6" />
            </span>
            <div>
              <h3 class="font-medium md:mb-2 md:text-xl">
                Accessibility
                <span
                  class="absolute -left-px hidden h-6 w-px bg-primary md:inline-block"
                ></span>
              </h3>
              <p class="text-sm text-muted-foreground md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sunt beatae tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-10">
      <div class="container py-24 lg:py-32">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
            <div class="space-y-6 lg:space-y-10">
              <div class="flex">
                <BrainCogIcon class="flex-shrink-0 mt-2 h-8 w-8" />
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-base sm:text-lg font-semibold">Creative minds</h3>
                  <p class="mt-1 text-muted-foreground">
                    We choose our teams carefully. Our people are the secret to great
                    work.
                  </p>
                </div>
              </div>
              <div class="flex">
                <PackageIcon class="flex-shrink-0 mt-2 h-8 w-8" />
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-base sm:text-lg font-semibold">Effortless updates</h3>
                  <p class="mt-1 text-muted-foreground">
                    Benefit from automatic updates to all boards any time you need to make
                    a change to your website.
                  </p>
                </div>
              </div>
              <div class="flex">
                <ZapIcon class="flex-shrink-0 mt-2 h-8 w-8" />
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-base sm:text-lg font-semibold">Strong empathy</h3>
                  <p class="mt-1 text-muted-foreground">
                    We&apos;ve user tested our own process by shipping over 1k products
                    for clients.
                  </p>
                </div>
              </div>
            </div>
            <div class="space-y-6 lg:space-y-10">
              <div class="flex">
                <TrophyIcon class="flex-shrink-0 mt-2 h-8 w-8" />
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-base sm:text-lg font-semibold">Conquer the best</h3>
                  <p class="mt-1 text-muted-foreground">
                    We stay lean and help your product do one thing well.
                  </p>
                </div>
              </div>
              <div class="flex">
                <UsersIcon class="flex-shrink-0 mt-2 h-8 w-8" />
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-base sm:text-lg font-semibold">Designing for people</h3>
                  <p class="mt-1 text-muted-foreground">
                    We actively pursue the right balance between functionality and
                    aesthetics, creating delightful experiences.
                  </p>
                </div>
              </div>
              <div class="flex">
                <ThumbsUpIcon class="flex-shrink-0 mt-2 h-8 w-8" />
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-base sm:text-lg font-semibold">
                    Simple and affordable
                  </h3>
                  <p class="mt-1 text-muted-foreground">
                    From boarding passes to movie tickets, there&apos;s pretty much
                    nothing you can&apos;t do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-8">
      <div class="container py-24 lg:py-32">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="lg:w-3/4">
            <h2
              class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
            >
              Collaborative tools to design better user experience
            </h2>
            <p class="mt-3 text-muted-foreground">
              We help businesses bring ideas to life in the digital world, by designing
              and implementing the technology tools that they need to win.
            </p>
            <p class="mt-5">
              <a
                class="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4"
                href="#"
              >
                Contact sales to learn more
                <ChevronRightIcon
                  class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
                />
              </a>
            </p>
          </div>
          <div class="space-y-6 lg:space-y-10">
            <div class="flex">
              <span
                class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground"
              >
                <BookOpenIcon class="flex-shrink-0 w-5 h-5" />
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold">
                  Industry-leading documentation
                </h3>
                <p class="mt-1 text-muted-foreground">
                  Our documentation and extensive Client libraries contain everything a
                  business needs to build a custom integration in a fraction of the time.
                </p>
              </div>
            </div>
            <div class="flex">
              <span
                class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground"
              >
                <MessagesSquareIcon class="flex-shrink-0 w-5 h-5" />
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold">
                  Developer community support
                </h3>
                <p class="mt-1 text-muted-foreground">
                  We actively contribute to open-source projects—giving back to the
                  community through development, patches, and sponsorships.
                </p>
              </div>
            </div>
            <div class="flex">
              <span
                class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground"
              >
                <ThumbsUpIcon class="flex-shrink-0 w-5 h-5" />
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold">Simple and affordable</h3>
                <p class="mt-1 text-muted-foreground">
                  From boarding passes to movie tickets, there&apos;s pretty much nothing
                  you can&apos;t do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container py-24 lg:py-32">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          <Card>
            <CardHeader class="pb-4 flex-row items-center gap-4">
              <div
                class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary"
              >
                <PaletteIcon class="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Build your portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              The simplest way to keep your portfolio always up-to-date.
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="pb-4 flex-row items-center gap-4">
              <div
                class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary"
              >
                <PresentationIcon class="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Get freelance work</CardTitle>
            </CardHeader>
            <CardContent>
              New design projects delivered to your inbox each morning.
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="pb-4 flex-row items-center gap-4">
              <div
                class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary"
              >
                <StoreIcon class="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Sell your goods</CardTitle>
            </CardHeader>
            <CardContent>
              Get your goods in front of millions of potential customers with ease.
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="pb-4 flex-row items-center gap-4">
              <div
                class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary"
              >
                <StoreIcon class="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Get freelance work</CardTitle>
            </CardHeader>
            <CardContent>
              New design projects delivered to your inbox each morning.
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="pb-4 flex-row items-center gap-4">
              <div
                class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary"
              >
                <StoreIcon class="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Sell your goods</CardTitle>
            </CardHeader>
            <CardContent>
              Get your goods in front of millions of potential customers with ease.
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="pb-4 flex-row items-center gap-4">
              <div
                class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary"
              >
                <PaletteIcon class="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Build your portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              The simplest way to keep your portfolio always up-to-date.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <section class="py-32">
      <div class="container py-24 lg:py-32">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          <a
            class="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
            href="#"
          >
            <div
              class="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg"
            >
              <TabletSmartphoneIcon
                class="flex-shrink-0 w-6 h-6 text-primary-foreground"
              />
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold">Responsive</h3>
              <p class="mt-1 text-muted-foreground">
                Responsive, and mobile-first project on the web
              </p>
              <span
                class="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium"
              >
                Learn more
                <ChevronRightIcon class="flex-shrink-0 w-4 h-4" />
              </span>
            </div>
          </a>
          <a
            class="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
            href="#"
          >
            <div
              class="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg"
            >
              <Settings2Icon class="flex-shrink-0 w-6 h-6 text-primary-foreground" />
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold">Customizable</h3>
              <p class="mt-1 text-muted-foreground">
                Components are easily customized and extendable
              </p>
              <span
                class="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium"
              >
                Learn more
                <ChevronRightIcon class="flex-shrink-0 w-4 h-4" />
              </span>
            </div>
          </a>
          <a
            class="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
            href="#"
          >
            <div
              class="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg"
            >
              <BookOpenIcon class="flex-shrink-0 w-6 h-6 text-primary-foreground" />
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold">Documentation</h3>
              <p class="mt-1 text-muted-foreground">
                Every component and plugin is well documented
              </p>
              <span
                class="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium"
              >
                Learn more
                <ChevronRightIcon class="flex-shrink-0 w-4 h-4" />
              </span>
            </div>
          </a>
          <a
            class="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
            href="#"
          >
            <div
              class="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg"
            >
              <MessagesSquareIcon
                class="flex-shrink-0 w-6 h-6 text-primary-foreground"
              />
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold">24/7 Support</h3>
              <p class="mt-1 text-muted-foreground">
                Contact us 24 hours a day, 7 days a week
              </p>
              <span
                class="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium"
              >
                Learn more
                <ChevronRightIcon class="flex-shrink-0 w-4 h-4" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {
  DollarSign,
  KeyRound,
  Timer,
  Star,
  Stars,
  Blocks,
  ChevronRight,
  Infinity,
  Laptop,
  ListEnd,
  Zap,
  ZoomIn,
  PersonStanding,
  BrainCogIcon,
  PackageIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  ThumbsUpIcon,
  PaletteIcon,
  PresentationIcon,
  StoreIcon,
  Settings2Icon,
  TabletSmartphoneIcon,
} from "lucide-vue-next";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import PlayStore from "@/components/icons/PlayStore.vue";
import Apple from "@/components/icons/Apple.vue";

const features = [
  {
    title: "Quality",
    description:
      "Our UI blocks are designed with quality in mind. We make sure that every block is pixel perfect and visually appealing.",
    icon: ZoomIn,
    link: "#",
  },
  {
    title: "Customizable",
    description:
      "You can easily customize our UI blocks to fit your needs. Change colors, fonts, and more with our easy-to-use interface.",
    icon: Blocks,
    link: "#",
  },
  {
    title: "Responsive",
    description:
      "Our UI blocks are fully responsive and look great on any device. No matter the screen size, your website will look amazing.",
    icon: Laptop,
    link: "#",
  },
  {
    title: "Easy to Use",
    description:
      "Our UI blocks are easy to use and require no coding knowledge. Simply drag and drop the blocks you want and you are good to go.",
    icon: ListEnd,
    link: "#",
  },
  {
    title: "Fast",
    description:
      "Our UI blocks are optimized for speed and performance. Your website will load fast and provide a great user experience.",
    icon: Zap,
    link: "#",
  },
  {
    title: "Modern",
    description:
      "Our UI blocks are designed with modern trends in mind. Your website will look fresh and up-to-date with our blocks.",
    icon: Infinity,
    link: "#",
  },
];
</script>

<style scoped></style>
