<template>
    
</template>

<script>
    export default {
        name: "Person"
    }
</script>

<style scoped>
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