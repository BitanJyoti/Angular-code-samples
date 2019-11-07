import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SampleService {
    company = 'capgemini'

 printSample(){
    console.log("app component is running from sample")
}
}