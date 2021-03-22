<template lang="pug">
.hello
  h1 {{ pageTitle }}
  Button Click me!
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Button from '@/components/button/Button.vue';

  export default defineComponent({
    name: 'HelloWorld',
    components: {
      Button,
    },
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
