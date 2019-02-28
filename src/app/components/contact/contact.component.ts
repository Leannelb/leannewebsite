import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Material } from '../../app-material'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  emailformControl = new FormControl('',[
    Validators.required,
    Validators.email,
  ])

  nameFormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])


}
