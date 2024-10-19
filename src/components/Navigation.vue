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
          <Logo :color="mode == 'dark' ? 'white' : 'black'" />
          <span class="font-bold"> Bekfolio </span></router-link
        >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{{ $t("nav.aboutMe") }}</NavigationMenuTrigger>
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
                        <div class="mb-2 mt-4 text-lg font-medium">
                          {{ $t("nav.myBlog") }}
                        </div>
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
                          {{ $t("nav.findMore") }}
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
                          {{ $t("nav.mySkills") }}
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
                          {{ $t("nav.myResume") }}
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
              <NavigationMenuTrigger>{{ $t("nav.portfolio") }}</NavigationMenuTrigger>
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
                <router-link to="/contact">
                  {{ $t("nav.contact") }}
                </router-link>
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
        <Select @update:model-value="handleLanguageChange" v-model="locale">
          <SelectTrigger class="w-[150px]">
            <SelectValue :placeholder="$t('lang')" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
              <SelectItem value="oz">Ўзбекча</SelectItem>
              <SelectItem value="uz">O‘zbekcha</SelectItem>
              <SelectItem value="kr">Qaraqalpaqsha</SelectItem>
              <SelectItem value="qr">Қарақалпақша</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <nav class="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="px-3" size="icon">
                <!-- <ThemeIcon /> -->
                <Icon
                  icon="radix-icons:moon"
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Icon
                  icon="radix-icons:sun"
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-24">
              <DropdownMenuRadioGroup v-model="themeSelectPosition">
                <DropdownMenuRadioItem value="auto">{{
                  $t("nav.auto")
                }}</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="light">{{
                  $t("nav.light")
                }}</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">{{
                  $t("nav.dark")
                }}</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" class="px-3" size="icon">
            <Github />
          </Button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Get the i18n instance
const { locale } = useI18n();

// Handle the language change
const handleLanguageChange = (selectedLang: string) => {
  locale.value = selectedLang;
};

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
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Icon } from "@iconify/vue";
import { useColorMode } from "@vueuse/core";
const mode = useColorMode({ disableTransition: false });
const themeSelectPosition = ref("auto");
watch(themeSelectPosition, (newTheme) => {
  if (newTheme === "light") {
    mode.value = "light";
  } else if (newTheme === "dark") {
    mode.value = "dark";
  } else {
    mode.value = "auto";
  }
});

// Variables and data
const components: { title: string; href: string; description: string }[] = [
  {
    title: t("nav.myProjects"),
    href: "/projects",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: t("nav.publicRepos"),
    href: "/repositories",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "GitHub Profile",
    href: "/github",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "LinkedIn Profile",
    href: "/linkedin",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "YouTube channel",
    href: "/youtube",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Telegram channel",
    href: "/telegram",
    description: "Visually or semantically separates content.",
  },
];
</script>

<style lang="scss" scoped></style>
