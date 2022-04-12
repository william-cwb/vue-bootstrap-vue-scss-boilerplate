<template>
  <div>
    <header>
      <h1>HEADER</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <h1>FOOTER</h1>
    </footer>
  </div>
</template>
<script>
export default {
  name: "DefaultLayout",
  data: () => ({}),
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>