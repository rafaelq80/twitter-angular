import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  tweetMessage: string = "";
  tweetMaxLenght: number = 240;
  tweetRemain: number = this.tweetMaxLenght;

  constructor(private service:MessagesService) {

  }

  changeTweet(){
    this.tweetRemain = this.tweetMaxLenght - this.tweetMessage.length;
  }

  sendTweet(){
    this.service.add(this.tweetMessage);
    this.tweetMessage = "";
    this.tweetRemain = this.tweetMaxLenght;
    
  }
}
