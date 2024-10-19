<script setup lang="ts">
import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomIn,
} from "lucide-vue-next";

const reasons = [
  {
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: ZoomIn,
  },
  {
    title: "Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: BarChartHorizontal,
  },
  {
    title: "Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: CircleHelp,
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: WandSparkles,
  },
  {
    title: "Results",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: Layers,
  },
  {
    title: "Efficiency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: BatteryCharging,
  },
];
</script>

<template>
  <section className="py-32">
    <div className="container">
      <div className="mb-10 md:mb-20">
        <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
          Why Work With Us?
        </h2>
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(reason, i) in reasons" :key="i" className="flex flex-col">
          <div
            className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent"
          >
            <component :is="reason.icon" class="size-6" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">{{ reason.title }}</h3>
          <p className="text-muted-foreground">{{ reason.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
