<template lang="pug">
.hello
  h1 {{ prettyMessage }}
  p
    | For a guide and recipes on how to configure / customize this project,<br>
    | check out the
    a(target='_blank' rel='noopener' href='https://cli.vuejs.org') vue-cli documentation
  h3 Installed CLI Plugins
  ul
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router'
      ) router
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex'
      ) vuex
    li
      a(
        target='_blank'
        rel='noopener'
        href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript'
      ) typescript
  h3 Essential Links
  ul
    li
      a(target='_blank' rel='noopener' href='https://vuejs.org') Core Docs
    li
      a(target='_blank' rel='noopener' href='https://forum.vuejs.org') Forum
    li
      a(target='_blank' rel='noopener' href='https://chat.vuejs.org') Community Chat
    li
      a(target='_blank' rel='noopener' href='https://twitter.com/vuejs') {{ msg }}
    li
      a(target='_blank' rel='noopener' href='https://news.vuejs.org') News
  h3 Ecosystem
  ul
    li
      a(target='_blank' rel='noopener' href='https://router.vuejs.org') vue-router
    li
      a(target='_blank' rel='noopener' href='https://vuex.vuejs.org') vuex
    li
      a(target='_blank' rel='noopener' href='https://github.com/vuejs/vue-devtools#vue-devtools') vue-devtools
    li
      a(target='_blank' rel='noopener' href='https://vue-loader.vuejs.org') vue-loader
    li
      a(target='_blank' rel='noopener' href='https://github.com/vuejs/awesome-vue') awesome-vue
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    setup(props) {
      const message = ref(props.msg);

      const prettyMessage = computed(() => {
        return `Pretty ${message.value}`;
      });

      return { prettyMessage };
    },
  });
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
