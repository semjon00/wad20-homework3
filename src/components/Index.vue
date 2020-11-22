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
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>