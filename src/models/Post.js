export default class Post{
    constructor() {
        this.id = 0;
        this.author = {firstname: "", lastname: ""};
        this.avatar = ""; // Link
        this.createTime = ""; // String
        this.text = "";
        this.media = {type: "" /* video or image */, url: ""};
        this.likes = "";
    }
}