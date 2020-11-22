export default class Post{
    constructor(author, createTime, media, text, likes) {
        this.author = author;
        this.createTime = createTime;
        this.media = media;
        this.text = text;
        this.likes = likes;
        this.liked = false;
    }
}