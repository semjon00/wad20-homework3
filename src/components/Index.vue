<template>
    <section>
        <Topbar></Topbar>
        <section class="main-container">
            <div class="post" v-for="(post, index) of posts" :key="post.id">
                <div class="post-author">
                    <span class="post-author-info">
                        <img :src="post.author.avatar" alt="Post author">
                        <small>{{post.author.firstname}} {{post.author.lastname}}</small>
                    </span>
                    <small>{{post.createTime}}</small>
                </div>

                <div v-if="post.media == null">
                </div>
                <div v-else-if="post.media.type === 'image'">
                    <div class="post-image">
                        <img :src="post.media.url" alt="">
                    </div>
                </div>
                <div v-else>
                    <video controls>
                        <source :src="post.media.url" type="video/mp4">
                    </video>
                </div>

                <div class="post-title">
                    <h3>{{post.text}}</h3>
                </div>
                <div class="post-actions">
                    <button type="button" name="like" class="like-button" 
                        v-bind:class="{liked: post.liked}"
                        @click="toggleLike(index)"
                        >
                        {{post.likes}}
                    </button>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    import Topbar from "@/components/Topbar";

    export default {
        name: "Index",
        components: {Topbar},
        computed: {
            posts: function () {
                console.log(this.$store.state.posts)
                return this.$store.state.posts;
            }
        },
        methods: {
            toggleLike: function(index) {
                this.$store.commit('toggleLike', index);
            }
        }
    }
</script>

<style scoped>
    .post {
        width: 80%;
        margin: 15px auto;
        box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
        border-radius: 5px;
    }

    .post .post-author {
        padding: 10px;
    }

    .post .post-author::after {
        content: "";
        display: block;
        clear: both;
    }

    .post .post-author .post-author-info {
        float: left;
        position: relative;
        width: 50%;
    }

    .post .post-author .post-author-info img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
        margin: 5px;
    }

    .post .post-author .post-author-info small {
        position: absolute;
        top: 10px;
        left: 35px;
    }

    .post .post-author .post-author-info + small {
        float: right;
        color: grey;
        padding: 10px;
    }

    .post .post-image img, video {
        width: 100%;
        min-height: 150px;
        max-height: 350px;
        object-fit: cover;
        object-position: top center;
    }

    .post .post-title {
        padding: 10px;
    }

    .post .post-title h3 {
        display: inline;
    }

    .post .post-title ~ .post-actions {
        padding: 10px;
    }

    .like-button {
        background-image: url("/src/assets/like.png");
        background-size: 15px;
        background-repeat: no-repeat;
        background-position: 5px center;
        background-color: #8a8a8a;
        width: 60px;
        height: 25px;
        padding-left: 23px;
        line-height: 10px;
        text-align: left;
        border: none;
    }

    .like-button.liked {
        background-color: #01579b;
    }

    .post-author-info small {
        margin-left: 10px;
    }
</style>