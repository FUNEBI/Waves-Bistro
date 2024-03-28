import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/AlertService/utilitiesService';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { SnacksService } from '../services/snacks/snacks.service';
import { DrinksService } from '../services/drinks.service';

@Component({
  selector: 'app-wave-homepage',
  templateUrl: './wave-homepage.component.html',
  styleUrl: './wave-homepage.component.css'
})
export class WaveHomepageComponent implements OnInit{

  formGroup!: FormGroup;
  playing:boolean = true
  hotCoffeeDrink:boolean= true
  icedCoffeeDrink:boolean= false
  smoothieDrink:boolean=false
  hotCoffee: any;
  icedCoffee: any;
  smoothies: any;
  homeArea:boolean=true
  AboutPage:boolean= false
  ContactPage:boolean= false
  snacksPage:boolean = false
  snackList: any;

  constructor(
    private DrinksService:DrinksService,
    private AlertService:UtilityService,
    private SnacksService:SnacksService,
    private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.initForm()
    this.getCoffee()
  }

  get f(){
    return this.formGroup.controls;
  }

  initForm() {
    this.formGroup = this.fb.group({
      Name: [
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
      Email: [
        '',
       Validators.compose([
         Validators.required,
         Validators.email
        ])
      ],
      Number:[
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
      Address:[
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
      Message:[
        '',
       Validators.compose([
         Validators.required,
        ])
      ],
    })
  }

  playVideo() {
    this.playing= true
    var myVideo: any = document.getElementById("myVideo");
    if (myVideo.paused) {
      myVideo.play();
    }
  }

  pauseVideo(){
    this.playing= false
    var myVideo: any = document.getElementById("myVideo");
    if(myVideo.play){
      myVideo.pause();
    }
  }

  getCoffee(){
    this.AlertService.ShowSpinner()
    this.DrinksService.getHotCofee().subscribe((data:any)=>{
      console.log(this.hotCoffeeDrink)
      this.hotCoffeeDrink = true
      if(data !== null || data!== undefined && this.hotCoffeeDrink == true){  
        this.smoothieDrink = false
        this.icedCoffeeDrink= false
      }
      this.hotCoffee = data
      this.AlertService.HideSpinner()
      console.log(this.hotCoffeeDrink)
    },  (Error:any) => {
      this.AlertService.HideSpinner()
      this.AlertService.alertError(Error.name + " You are been redirected. Please check your internet connection and try again.")
      
    }
    )
  }
  getIcedCoffee(){
    this.AlertService.ShowSpinner()
    this.DrinksService.getIcedCofee().subscribe((data:any)=>{
      console.log(data)
      this.icedCoffeeDrink= true
      if(data !== null || data!== undefined && this.icedCoffeeDrink == true){
        this.hotCoffeeDrink = false
        this.smoothieDrink = false
      }
      this.icedCoffee = data
      this.AlertService.HideSpinner()
    }, (Error:any) => {
      console.log(Error.name)
      this.AlertService.alertError(Error.name + " You are been redirected. Please check your internet connection and try again.")
      this.AlertService.HideSpinner()
    })
  }

  getSmoothies(){
    this.AlertService.ShowSpinner()
    this.DrinksService.getSmoothies().subscribe((data:any)=>{
      this.smoothieDrink = true
      console.log(data)
      if(data !== null || data!== undefined && this.smoothieDrink == true){
        this.hotCoffeeDrink = false
        this.icedCoffeeDrink= false
      }
      this.smoothies = data.drinks
      this.AlertService.HideSpinner()
    },(Error:any) => {
      console.log(Error.name)
      this.AlertService.alertError(Error.name + " You are been redirected. Please check your internet connection and try again.")
      this.AlertService.HideSpinner()
    })
  }

  getSelectedValue(e:any){
    const id = e.innerText
    if(id === ' Home'){
      this.homeArea = true
      console.log(id)
      this.homeArea = true
      this.AboutPage = false
      this.ContactPage = false
      this.snacksPage = false
    }else if(id === " About" ){
      console.log(this.AboutPage)
      this.homeArea = false
      this.AboutPage = true
      this.snacksPage = false
      console.log(this.AboutPage)
      this.ContactPage = false   
    }else if(id == " Contact"){
      this.ContactPage = true
      console.log(this.ContactPage)
      this.AboutPage = false
      this.homeArea = false
      this.snacksPage = false
    }else if(id == ' Snacks'){
      this.getSnacks()
      this.snacksPage = true
      console.log(this.snacksPage)
      this.AboutPage = false
      this.homeArea = false      
      this.ContactPage = false
      
    }else{
      this.homeArea = true
      this.AboutPage = false
      this.snacksPage = false
      this.ContactPage = false
    }
    
  }

  getSnacks(){
    this.AlertService.ShowSpinner()
    this.SnacksService.getSnacks().subscribe((data:any)=>{
      console.log(data.meals)
      this.snackList = data.meals
      this.AlertService.HideSpinner()
    }, (Error:any) => {
      this.AlertService.alertError(Error.name + " You are been redirected. Please check your internet connection and try again.")
      this.AlertService.HideSpinner()
    })
  }

  Submit(){
    this.AlertService.alertSuccess("Your feedback has been received, we will get back to you shortly.")
  }

}
