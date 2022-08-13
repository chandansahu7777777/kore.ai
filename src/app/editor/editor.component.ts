import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  image:any;
  textDiv:any =  [];
  constructor() { }

  ngOnInit() {
  }
  filechooser(){
    document.getElementById('image_choose')?.click();

  }
  handleFile(event:any){
    console.log(event);
    let file:any = (event.target.files as FileList);
    console.log(file)
    let reader = new FileReader();
    reader.onload = _event => {
      this.image = reader.result;
    }
    reader.readAsDataURL(file[0]);

  }
  drag(event:any, type:any){
    event.dataTransfer.setData('type', type);
  }
  dragInput(event:any, type:any){
    // event.dataTransfer.setData('type', type);
    this.registerInput(type)
    console.log(type);
  }
  drop($event:any){
    // event.dataTransfer.setData('type', type);
    this.textDiv.push({text:'Add your text'});
    setTimeout(() => {
    this.registerInput('box'+(this.textDiv.length- 1))
    }, 1000); 

  }
  registerInput(type:any){
    const elmnt:any = document.getElementById(type);
    console.log(elmnt);
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e:any) => {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e:any) => {
      console.log(e);
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
    };

    const closeDragElement = () => {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    };
  }

}
