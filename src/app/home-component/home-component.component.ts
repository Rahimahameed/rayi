import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show_div=false
  public varName="Rahi"
  public textname:any
  public stdname:any
  public studentname:Array<any>= [];
  // console.log(this.stdname)



  public myfunction(){
    this.varName = "welcome"
  }

    public Addstudent(){
     
      this.studentname.push(this.stdname)
      console.log(this.studentname)

    }

    public delstudent(){
      this.studentname.pop();
      console.log(this.studentname)

    }


   
  
  

}
