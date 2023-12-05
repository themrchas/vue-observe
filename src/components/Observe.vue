<template>
<div>
 <div>Count is below:</div> 

  {{ theCount }}

</div>
  
</template>

<script>

import { count } from '../main'


export default {
  name: 'observe',
  props: {  },
  setup() {

    let theCount = count;
    console.log('count is',count);

    return { theCount };

    

  } //setup

  }




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
