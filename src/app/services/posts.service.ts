import {Injectable} from '@angular/core';  //make service available to inject for dependency
import {Http} from '@angular/http';  //request data from outside api
import 'rxjs/add/operator/map'; //need to use observable through reactive extention so need map to import 


@Injectable()
export class PostsService{
    constructor(private http: Http){                          //to use imported http add in costructor
        console.log('PostService Initialised');
    }
    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
                     .map(res => res.json());              //return observalble & it will be in json format
    }
}