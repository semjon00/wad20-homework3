<template>
    <header>
        <nav> <!-- Now we have vue.js here! Cool -->
            <div class="logo-container">
                <img src="@/assets/logo.png" alt="PostIt"/>
            </div>
            <div class="search-container">
                <label>
                    <input type="text" name="search" id="search">
                </label>
                <button type="button">Search</button>
            </div>
            <div class="dropdown">
                <img src="@/assets/avatar.png" class="dropbtn" id="this-user-avatar" alt="Me">
                <div class="dropdown-content">
                    <a id="userinfo"> {{this.$store.getters.getProfile.firstname}} {{this.$store.getters.getProfile.lastname}} <br> {{this.$store.getters.getProfile.email}} <br></a>
                    <router-link to="/browse" tag="a">Browse</router-link>
                    <router-link to="/login" tag="a">Log Out</router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Topbar"
    }
</script>

<style scoped>

    header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1;
    }

    header:hover {
        box-shadow: 0 -20px 30px #4d4d4d;
    }

    nav {
        display: flex;
        background-color: #ffffff;
        align-items: center;
    }

    nav > div {
        height: 30px;
        flex-grow: 4;
        padding: 10px;
    }

    nav div img {
        height: 100%;
        width: 30px;
        margin-left: 15px;
        /* border-radius: 100%; */
        object-fit: cover;
        object-position: top center;
    }

    #search {
        box-sizing: border-box;
        height: 30px;
        width: 80%;
        margin: 0;
        padding: 5px;
        border: 1px solid #e0e0e0;
    }

    nav div.search-container > button {
        height: 30px;
        width: 20%;
        margin: 0;
        padding: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        min-width: 160px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        background-color: #f9f9f9;

    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content a:hover {
        background-color: #eaeaea;}

</style>