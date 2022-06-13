import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.scss']
})
export class ConfirmationMessageComponent implements OnInit {

mensaje:string;
btn = 'aceptar';

  constructor(public dialogRef: MatDialogRef<ConfirmationMessageComponent>, 
       @Inject(MAT_DIALOG_DATA) public data: any) {
      this.mensaje = data.mensaje;
     }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
