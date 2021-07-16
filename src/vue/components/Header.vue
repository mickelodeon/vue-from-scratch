<template>
  <div class="c-header">
    <svgicon class="c-header__icon" icon="github-logo" />
    <h1 class="c-header__title">New Vue App</h1>
  </div>
</template>

<script>
import "@src/vue/icons/github-logo";
export default {};
</script>

<style lang="scss" scoped>
@import "node_modules/sass-mq/mq";
@import "~@src/styles/01-settings/settings.colors";

.c-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;

  @include mq($from: "desktop") {
    flex-direction: row;
    padding: 2em;
  }
}

.c-header__icon {
  width: 60px;
  margin: 1em auto;
  fill: map-get($f-colors-general, white);

  @include mq($from: "desktop") {
    margin: 0 2em;
  }
}

.c-header__title {
  margin: 0;
  font-size: 20px;
  color: map-get($f-colors-general, white);
  text-align: center;

  @include mq($from: "desktop") {
    font-size: 30px;
  }
}
</style>
