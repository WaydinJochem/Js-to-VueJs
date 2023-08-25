<template>
  <div>
    <div>
      <!--
      <input type="search">
      <button><select name="" id="">
        <option value="">Ascending</option>
        <option value="">Descending</option>
      </select></button>
    </div>
    <div> -->

      <!-- sorting -->
      <input type="search" >
    </div>
    <CardComp />
  </div>
</template>
<script>
import CardComp from '@/components/Card.vue'
import { reactive, ref } from 'vue'
export default {
  components:
  {
    CardComp,
    // filters: {
    //   capitalize: function (value) {
    //     if (!value) return ''
    //     value = value.toString()
    //     return value.charAt(0).toUpperCase() + value.slice(1)
    //   }
    // }
  }, 
  computed: {
    sortedArray() {
      let sortedProducts = this.products;

      sortedProducts = sortedProducts.sort((a,b)=>{
        let fa = a.title.lowerCase(), fb = b.title.toLowerCase();
        if(fa < fb) {
          return -1
        }
        if(fa > fb) {
          return 1
        }
        return 0 
      })
    }
  },
 
}
</script>