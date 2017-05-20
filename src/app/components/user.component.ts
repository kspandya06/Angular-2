import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';


@Component({
    moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
          })
   
  /* [()]bcz binding to model & its two way binding.Import the FormsModule in app.module.ts*
   In ngModel form has name and value of ngModel must be same*/
    
    
 

export class UserComponent  { 
    name: string;
    contact:string;
    email:string;
   address: address;
    hobbies: string[];
    hobby: string ;
    i:number;
    showHobbies: boolean;
    posts: Post[];              //create interface


constructor(private postsService: PostsService){
    this. name = 'Angular'; 
    this.contact='By mails only',
    this.email = 'angular@gmail.com';
    this.address = {
            street: '11 Giles Avenue',
            city: 'Cary',
            state: 'New Jersey'
        }

        this.hobbies = ['music', 'dance', 'movies', 'sports'];
        this.showHobbies = true;

        this.postsService.getPosts().subscribe(posts =>{    //bcz return is observable so need to subscribe it
                    this.posts = posts;
     });
            }

        toggleHobbies(){
            if(this.showHobbies == true){
                    this.showHobbies = false;
            }else
            this.showHobbies = true;
          
            };
        

 /* addHobby(hobby) {
           this.hobbies.push(hobby)
         }

   deleteHobby(i){
            this.hobbies.splice(i, 1)
        }*/
  
}

interface address{
    street:string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}
