import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RegistrationComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imAngularApp';
  showRegistration = false;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    // Initialize the form within the constructor
    this.form = this.fb.group({
    id: ['', Validators.required],
    code: ['', Validators.required],
    description: ['', Validators.required],
    });
  }
}
