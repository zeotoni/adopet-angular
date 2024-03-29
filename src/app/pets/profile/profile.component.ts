import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

import { UserService } from 'src/app/shared/services/user-service/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  profileForm!: FormGroup;
  msgSuccess: string = '';
  image!: File;
  preview: any;
  userId!: string;

  constructor(
    private builder: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {

    this.userId = this.userService.getUserId();
    this.getProfileData(this.userId);

    this.profileForm = this.builder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/)]],
      city: ['', [Validators.required]],
      about: ['', [Validators.required]],
      image: [this.preview]
    })
  }


  sendProfileData() {

    const data = {
      name: this.profileForm.get('name')?.value,
      phone: this.profileForm.get('phone')?.value,
      city: this.profileForm.get('city')?.value,
      about: this.profileForm.get('about')?.value,
      image: this.preview
    }

    this.userService.updateUser(this.userId, data).subscribe(
      () => {},err => console.log(err))

    this.msgSuccess = 'Dados salvos com sucesso!';
  }

  getProfileData(id: string) {

    this.userService.getProfileUser(id).subscribe(
      (res) => {

        this.preview = res.image;

        this.profileForm.setValue({
          name: res.name ?? '',
          phone: res.phone ?? '',
          city: res.city ?? '',
          about: res.about ?? '',
          image: ''
        })

      },
      (error: any) => console.log(error))
  }

  handleFile(file:any) {

    this.convertImg(file);
  }

  convertImg(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    })
    observable.subscribe((d) => {
      this.preview = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }
}
