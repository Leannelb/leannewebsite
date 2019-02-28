import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Material } from '../../app-material'
import { HttpService } from "../../shared/http.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  image =
    "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
  name1;
  age;
  loading = false;
  buttonText = "Submit";
  name: string;
  email: string;
  message: string;

  constructor(public http: HttpService) { }

  ngOnInit() {
    console.log(this.http.test);
  }

  emailformControl = new FormControl('',[
    Validators.required,
    Validators.email,
  ])

  nameFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])

  register () {
    this.loading = true;
    this.buttonText = "Submitting.."
    let user = {
      name: this.nameFormControl.value,
      email: this.emailformControl.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe ( 
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttonText = "Submit";
      },() => {
        this.loading = false;
        this.buttonText = "Submit";
      }
    )
  }


}
