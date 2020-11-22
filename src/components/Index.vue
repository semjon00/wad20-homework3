<template>
    <section class="main-container">
        <div class="post">
            <div class="post-author">
          <span class="post-author-info">
            <img src="src/assets/avatar.png" alt="Post author">
            <small>John Doe</small>
          </span>
                <small>Sep 18, 2020 15:16</small>
            </div>
            <div class="post-image">
                <img src="src/assets/posts/1.jpg" alt="">
            </div>
            <div class="post-title">
                <h3>I think it's going to rain</h3>
            </div>
            <div class="post-actions">
                <button type="button" name="like" class="like-button">100k</button>
            </div>
        </div>

        <div class="post">
            <div class="post-author">
          <span class="post-author-info">
            <img src="src/assets/avatar.png" alt="Post author">
            <small>John Doe</small>
          </span>
                <small>Sep 18, 2020 15:16</small>
            </div>
            <div class="post-title">
                <h3>Which weighs more, a pound of feathers or a pound of bricks?</h3>
            </div>
            <div class="post-actions">
                <button type="button" name="like" class="like-button">15k</button>
            </div>
        </div>

        <div class="post">
            <div class="post-author">
          <span class="post-author-info">
            <img src="src/assets/avatar.png" alt="Post author">
            <small>John Doe</small>
          </span>
                <small>Sep 18, 2020 17:18</small>
            </div>
            <div class="post-image">
                <img src="src/assets/posts/2.jpg" alt="">
            </div>
            <div class="post-title">
                <h3>Felt cute, might delete later</h3>
            </div>
            <div class="post-actions">
                <button type="button" name="like" class="like-button liked">10k</button>
            </div>
        </div>

    </section>
</template>

<script>
    import Post from "../models/Post";

    export default {
        name: "Index"
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
</style>