import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from  '@angular/forms';
import { UploadService } from  '../upload.service';
import { BackendApiService } from '../backend-api.service';


@Component({
  selector: 'app-add-tourist',
  templateUrl: './add-tourist.component.html',
  styleUrls: ['./add-tourist.component.scss']
})
export class AddTouristComponent implements OnInit {

  form: FormGroup;
  uploadResponse: any;

  // New tourist

  tourist = {
	'name': '',
  'surName': '',
  'middleName': '',
	'phone': '',
	'email': '',
	'hint': '',
  'birthday' : '',
	'image': '',
  'addedBy' : -1
  }

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService, private apiService: BackendApiService) { }

   onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
      const submitButton = document.getElementById('uploadAvatar');
      submitButton.click();
    }
  }

  simulateUpload() {
  	const input = document.getElementById('avatar-input');
  	input.click();
  }

  submitForm() {
    this.apiService.getCurrentUser().then(user => {
      this.tourist.addedBy = user.id;
      this.apiService.addTourist(this.tourist).subscribe((policy: any)=>{
         // if complete;
       });
      this.clearForm();
    });
  }

  clearForm() {
  	Object.keys(this.tourist).forEach((key) => {
  		this.tourist[key] = '';
  	});
  }

   onSubmit() {
    const formData = new FormData();
    formData.append('avatar', this.form.get('avatar').value);

    this.uploadService.uploadFile(formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        this.tourist.image = res.url;
      },
      (err) => {  
        console.log(err);
      }
    )
  }

  ngOnInit() {
  	this.form = this.formBuilder.group({
      avatar: ['']
    });
  }

}
