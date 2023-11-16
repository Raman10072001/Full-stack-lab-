import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-form',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  adForm: FormGroup;
  imageSrc: string = '';
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.adForm = this.formBuilder.group({
      title: '',
      category: 'electronics',
      description: '',
      price: '',
      phone: '',
      email: '',
      image: ''
    });
  }

  triggerFileUpload() {
    const fileInput = document.getElementById('image');
    fileInput?.dispatchEvent(new MouseEvent('click'));
  }

  showImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.submitted = true;
  }
}
