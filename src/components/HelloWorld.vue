<template lang="pug">
.hello
  h1 {{ pageTitle }}
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const pageTitle = ref(props.msg);

      return { pageTitle };
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
