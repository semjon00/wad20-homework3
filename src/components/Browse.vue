<template>
    <section>
    <Topbar></Topbar>
    <section class="main-container">
        <div class="profiles" name="profiles">
            <div class="personsprofile" v-for="(person, id) in people" :key="id">
                <div><img :src="person.avatar" alt="Avatar"></div>
                <div>{{person.firstname}} {{person.lastname}}</div>
                <div><button v-on:click="toggleFollow(id)" v-bind:class="{following: person.subscribed }">Follow</button></div>
            </div>
        </div>
    </section>
    </section>
</template>

<script>
    import Topbar from "@/components/Topbar";

    export default {
        name: "Browse",
        components: {Topbar},
        computed: {
            people: function() {
                console.log(this.$store.state.people)
                return this.$store.state.people;
            }
        },
        watch: {
        '$store.state.people': function() {
            this.people = this.$store.state.people;
        }
        },
        methods: {
            toggleFollow : function(id) {
                console.log(id);
                this.$store.commit("toggleSubscribe", id)
            }
        }
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

    .personsprofileg button.following{
        background-color: white;
        color: darkmagenta;
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