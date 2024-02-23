<script setup lang="ts">
import type { Blog } from "~~/types/blog";

const {
  params: { id },
} = useRoute();

const { data: blog } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(id) ? id[0] : id,
});
</script>

<template>
  <template v-if="blog">
    <h1>
      {{ blog.title }}
    </h1>
    <div>
      <div>
        {{ blog.category?.name }}
      </div>
      <div>
        {{ blog.publishedAt ?? blog.createdAt }}
      </div>
    </div>
    <div v-html="blog.content"></div>
  </template>
</template>

<style scoped>

</style>