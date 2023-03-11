<template>
  <section class="app-main">
    <router-view v-slot="{Component}">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="tagViewStore.cachedViews">
          <component :is="Component" :key="key"/>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {useTagsViewStore} from "@/store/modules/tags-view";
import {computed} from "vue";

const route = useRoute()
const tagViewStore = useTagsViewStore()

const key = computed(() => {
  return route.path
})

</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - var(--v3-navigationbar-height));
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--v3-body-bg-color);
}

.fixed-header + .app-main {
  padding-top: var(--v3-navigationbar-height);
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    min-height: calc(100vh - var(--v3-header-height));
  }
  .fixed-header + .app-main {
    padding-top: var(--v3-header-height);
  }
}
</style>