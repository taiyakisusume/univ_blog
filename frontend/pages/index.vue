<script setup lang="ts">
import type {Blog} from "~/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
</script>

<template>
  <div>
    <h1>トップページ</h1>
    <hr />
    <NuxtLink to="/about">このブログについての情報はこちら</NuxtLink>
    <br />
    <ul>
      <li v-for="blog in data?.contents" :key="blog.id">
        <NuxtLink :to="`/${blog.id}`">
          <div>
            <div>
              {{ blog.category?.name }}
            </div>
            <div>
              {{ blog.title }}
            </div>
            <div>
              {{ blog.publishedAt ?? blog.createdAt }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>