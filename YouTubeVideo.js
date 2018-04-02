//Defining the YouTube Video Class
var YouTubeVideo = /** @class */ (function () {
    //constructor for initializing basic details of video
    function YouTubeVideo(title, views, likes, disLikes, channel_name, channel_subscribers) {
        var _this = this;
        this.comments = [];
        //Getters and setters for the class properties
        this.getTitle = function () {
            return _this.title;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.incrementViews = function () {
            _this.views += 1;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.incrementLikes = function () {
            _this.likes += 1;
        };
        this.getdisLikes = function () {
            return _this.disLikes;
        };
        this.incrementdisLikes = function () {
            _this.disLikes++;
        };
        this.getChannelName = function () {
            return _this.channel_name;
        };
        this.getChannelSubscribers = function () {
            return _this.channel_subscribers;
        };
        this.incrementChannelSubscribers = function () {
            _this.channel_subscribers++;
        };
        this.loadSuggestions = function () {
            var videos = ['link1', 'link2', 'link3'];
            return videos;
        };
        this.addComment = function (comment) {
            _this.comments = _this.comments.concat(comment);
        };
        this.showComment = function () {
            return _this.comments;
        };
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.disLikes = disLikes;
        this.channel_name = channel_name;
        this.channel_subscribers = channel_subscribers;
    }
    return YouTubeVideo;
}());
var myVideo = new YouTubeVideo('Song1', 12378, 100, 10, 'Channel1', 500);
console.log("Title:");
console.log(myVideo.getTitle());
console.log("Likes:");
console.log(myVideo.getLikes());
myVideo.incrementLikes();
console.log("Likes After Increment:");
console.log(myVideo.getLikes());
console.log("DisLikes:");
console.log(myVideo.getdisLikes());
myVideo.incrementdisLikes();
console.log("DisLikes After Increment:");
console.log(myVideo.getdisLikes());
console.log("View:");
console.log(myVideo.getViews());
console.log("Channel Name:");
console.log(myVideo.getChannelName());
console.log("Channel Subscriber:");
console.log(myVideo.getChannelSubscribers());
console.log("Load Suggestions:");
console.log(myVideo.loadSuggestions());
console.log("Added Comment : This is First Comment");
myVideo.addComment("This is First Comment");
console.log("Using getComment Method:");
console.log(myVideo.showComment());
