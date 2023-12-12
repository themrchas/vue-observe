<template>
<div>
 <div>Count is '{{ theCount }}'</div> 
 <div>Observable Count is '{{ numberDisplay.count }}'</div>
 <button type="button" @click="incrementCount">Increment Count</button>
 <div>Current object name is '{{ objectObservable.entry.name }}'</div>
 <button type="button" @click="changeName">Change name</button>
 

</div>
  
</template>

<script>

import { numberDisplay, blah, objectObservable } from '../main'


export default {
  name: 'observe',
  props: {  },
  setup() {

   let theCount = numberDisplay.count;
    console.log('numberDisplay is',numberDisplay);
    console.log('count in observable is',numberDisplay.count)
    console.log('blah is', blah);

    const incrementCount = () => {
       numberDisplay.count++
    }

    const changeName = () => {
      objectObservable.entry.name = "Butthead";
    }

   return { theCount, incrementCount, numberDisplay, objectObservable, changeName };

    

  } //setup

  }




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
