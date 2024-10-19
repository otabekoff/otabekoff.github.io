<template>
  <component :is="isRouterLink ? 'router-link' : 'a'" v-bind="linkProps" class="link">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps<{
  to?: string; // For router-link
  href?: string; // For anchor link
  target?: string; // Optional target attribute for anchor links
  rel?: string; // Optional rel attribute for anchor links
}>();

const isRouterLink = computed(() => !!props.to);

const linkProps = computed(() => {
  return isRouterLink.value
    ? { to: props.to }
    : {
        href: props.href,
        target: props.target,
        rel: props.rel,
      };
});
</script>
