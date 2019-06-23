import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ProcessingService } from 'src/app/services/processing.service';
import { DomSanitizer } from '@angular/platform-browser';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  private possibleActions = 
  [
    {label: 'Super Resolution', value: 'superResolution'},
    {label: 'Deblur', value: 'deblur'},
    {label: 'Colorize', value: 'colorize'},
    {label: 'Denoise', value: 'denoise'},
    {label: 'Style Transfer', value: 'styleTransfer'}
  ]

  private selectedAction: {label: string, value: any} = {label: 'Super Resolution', value: 'superResolution'};
  private new_heigth = "None";
  private new_width = "None";
  private factor = "None";
  private file: any;
  private image: any;
  private imageToShow: any;
  private isImageLoading = false;
  private isSRSelected = true;

  
  constructor(
    private _sanitizer: DomSanitizer,
    private userService: UserService,
    private processingService: ProcessingService
    
  ) { }

  ngOnInit() {
    this.imageToShow = "../../../assets/white.png"
  }



  private getUsername(): string {
    let user = this.userService.getUser();

    return user.username;
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }
  private logout() {
    const user: any = this.getUser();
    if (user) {
      localStorage.removeItem('user');
    }
  }

  onChange(){
    
    console.log(this.selectedAction)

    if (this.selectedAction["value"] == 'superResolution') this.isSRSelected = true

    else if (stringify(this.selectedAction) == "superResolution"){
      // console.log("True")
      this.isSRSelected = true
    } 
    else{
      // console.log("False")
      this.isSRSelected = false
    } 
  }

  onFileChanged(event) {
    this.file = event.target.files[0]
  }

  createImageFromBlob(image: Blob) {
     let reader = new FileReader();
     reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
     }, false);
  
     if (image) {
        reader.readAsDataURL(image);
     }
  }

  private onProceed() {
    this.isImageLoading  = true;

    //CHECK IF FILE WAS SELECTED AND WARN USER OF STUFF

    if (stringify(this.selectedAction) == "superResolution"){
      console.log("Super Resolution")
      try {
        if (this.new_heigth == "None") parseInt(this.new_heigth)
        if (this.new_width == "None") parseInt(this.new_width)
        if (this.factor == "None") parseInt(this.factor)
      } catch (error) {
        console.log("Must be 'None' or number")
        return
      }
      this.processingService.super_resolution_one(this.getUsername(), this.file, this.new_heigth, this.new_width, this.factor).subscribe(data => {
        this.createImageFromBlob(data)
        this.isImageLoading = false;
      }, error =>{
          this.isImageLoading = false;
          console.log(error);
      })
    }else if (stringify(this.selectedAction) == "deblur"){
        console.log("Debluring")
        this.processingService.deblur(this.getUsername(), this.file).subscribe(data => {
          this.createImageFromBlob(data)
          this.isImageLoading = false;
        }, error =>{
            this.isImageLoading = false;
            console.log(error);
        })

    }
  }

}
