<template>
    <section>
    <Topbar></Topbar>
    <section class="main-container">
        <div class="profiles" name="profiles">

        </div>
    </section>
    </section>
</template>

<script>
    import Topbar from "@/components/Topbar";

    export default {
        name: "Browse",
        components: {Topbar}
    }
</script>

<style scoped>
    .profiles {
        max-width: 1100px;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .personsprofile {
        width: 300px;
        min-width: 200px;
        margin: 10px 10px;
        padding: 10px;
        box-shadow: 0 0 5px rgba(38, 50, 56, 0.33);
        border-radius: 2px;
    }

    .personsprofile > * {
        text-align: center;
        margin: 3px;
    }

    .personsprofile button{
        background-color: darkmagenta;
        color: white;

        border: solid;
        border-radius: 4px;
        border-color: darkmagenta;
    }

    .personsprofile img{
        object-position: top;
        border-radius: 50%;
        width:120px;
        height:120px;
        overflow:hidden;
        object-fit: cover;
    }
</style>