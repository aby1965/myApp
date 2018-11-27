import { PeopleProvider } from './../../providers/people/people';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailContactPage} from '../../pages/detail-contact/detail-contact';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
//public people = this.service.getPeople()
public people = [];
public errorMessage : string;
public reloadData = false;
constructor(public navCtrl: NavController, public service:PeopleProvider,) {
   this.service.getPeopleFromApi()
   .subscribe (
     (response)=> {
       console.log(response);
       this.people = response["results"]
     },
     (error) => console.log(error)
     )
    }
    toggleReloadData() {
      this.reloadData = !this.reloadData
    }
    doRefresh (e) {
      this.service.getPeopleFromApi()
      .subscribe(
        (response) => {
        console.log (response);
        this.people=response["results"]
        e.complete()
    },
      (error)=>{
        console.log(error)
        e.complete()
      }
      )
    }
    doInfinite(e){
      this.service.getPeopleFromApi()
      .subscribe(
        data=>this.people.push(...data["results"]),
        err=> console.log(err),
        ()=>e.complete()
      )
    }
    pushPerson(user){
      this.navCtrl.push(DetailContactPage,user)
    }
 } 
  