class MyComment {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
        console.log(`Bình luận #${this.id} nhận phản hồi mới từ User #${reply.userId}`);
    }
}
class Post {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
            console.log(`User #${userId} đã thích bài đăng #${this.id}`);
        }
        else {
            console.log(`User #${userId} đã thích bài đăng này trước đó`);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
        console.log(`Bài đăng #${this.id} có bình luận mới từ User #${comment.userId}`);
    }
}
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const postId = this.posts.length + 1;
        const newPost = new Post(postId, this.id, content);
        this.posts.push(newPost);
        console.log(`User #${this.id} đã tạo bài đăng #${postId}`);
    }
    comment(post, commentContent) {
        const commentId = post.comments.length + 1;
        const newComment = new MyComment(commentId, this.id, commentContent);
        post.addComment(newComment);
    }
    follow(user) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
            console.log(`User #${this.id} đang theo dõi User #${user.id}`);
        }
        else {
            console.log(`User #${this.id} đã theo dõi User #${user.id} trước đó`);
        }
    }
    likePost(post) {
        post.addLike(this.id);
    }
    viewFeed() {
        console.log(`\n--- News Feed của User #${this.id} ---`);
        this.followers.forEach((user) => {
            user.posts.forEach((post) => {
                console.log(`Bài đăng #${post.id} của User #${user.id}: "${post.content}"`);
            });
        });
    }
}
// --- TEST ---
const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);
user1.follow(user2);
user1.follow(user3);
user2.createPost("Hôm nay trời đẹp quá!");
user3.createPost("Vừa đọc xong một cuốn sách hay!");
user1.viewFeed();
user1.likePost(user2.posts[0]);
user1.comment(user3.posts[0], "Nghe hay đó, tên sách là gì?");
