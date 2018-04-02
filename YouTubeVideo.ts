//Defining the YouTube Video Class
class YouTubeVideo{

    //defining the properties and fileds of class.
    private title:string;
    private views:number;
    private likes:number;
    private disLikes:number;
    private channel_name:string;
    private channel_subscribers:number;
    private comments:string[]=[];

    //constructor for initializing basic details of video
    constructor(title:string, views:number, likes:number, disLikes:number, channel_name:string, channel_subscribers:number){
        this.title=title;
        this.views=views;
        this.likes=likes;
        this.disLikes=disLikes;
        this.channel_name=channel_name;
        this.channel_subscribers=channel_subscribers;
    }

    //Getters and setters for the class properties
    getTitle=() =>{ //Title Cannot be changed so only get method.
        return this.title;
    }
    getViews=() =>{//Views changes a lot every time a video is being watched.
        return this.views;
    }
    incrementViews=() =>{//to increment views by one every time its being watched.
        this.views += 1 ;
    }
    getLikes=() =>{
        return this.likes;
    }
    incrementLikes=() =>{//To increase the likes of video.
        this.likes += 1;
    }
    getdisLikes=() =>{
        return this.disLikes;
    }
    incrementdisLikes=() =>{//To increase the disLikes of video.
        this.disLikes ++;
    }
    getChannelName=() =>{// To display the channel when called.
        return this.channel_name;
    }
    getChannelSubscribers=() =>{//To get the channel Subscribers.
        return this.channel_subscribers;
    }
    incrementChannelSubscribers=() =>{//To increase the channel Subscribers.
        this.channel_subscribers ++;
    }

    loadSuggestions=() => {
        let videos:any[]=['link1','link2','link3'];
        return videos;
    }

    addComment=(comment:string)=>{
        this.comments= this.comments.concat(comment);
    }

    showComment=() =>{
        return this.comments;
    }

}

let myVideo= new YouTubeVideo('Song1',12378,100,10,'Channel1',500);

console.log("Title:");
console.log(myVideo.getTitle());

console.log("Likes:");
console.log(myVideo.getLikes());

myVideo.incrementLikes()
console.log("Likes After Increment:");
console.log(myVideo.getLikes());


console.log("DisLikes:");
console.log(myVideo.getdisLikes());

myVideo.incrementdisLikes()
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