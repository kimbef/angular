import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html', 
})
export class CreatePostComponent {
  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private authService: AuthService
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.authService.getUser().subscribe(user => {
        if (user) {
          const postData = { ...this.postForm.value, userId: user.uid };
          this.postService.createPost(postData).then(() => {
            this.postForm.reset();
            alert('Post created successfully!');
          });
        }
      });
    }
  }
}
