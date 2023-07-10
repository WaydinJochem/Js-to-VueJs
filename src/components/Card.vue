<template>
    <div v-if="products" id="display" class="mt-4 container-fluid mx-auto">
        <div v-for="products in products" :key="products.id" :products="products">
            <div class="card">
                <img :src="products.img" :alt="products.title" class="card-img">
                <div class="card-title">{{products.title}}</div>
                <div class="card-text">
                    <p>{{products.price}}</p><br>
                    <p>{{products.desc}}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="text-center">Waiting To show...</div>
</template>
<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch("fetchProducts");
    },
}
</script>
<style></style>