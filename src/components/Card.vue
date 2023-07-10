<template>
    <div v-if="projects" id="display" class="mt-4 container-fluid mx-auto">
        <div v-for="projects in projects" :key="projects.id" :projects="projects">
            <div class="card">
                <img :src="products.img" alt="" :id="products.id" class="card-img">
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
        projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch("fetchProjects");
    },
}
</script>
<style></style>