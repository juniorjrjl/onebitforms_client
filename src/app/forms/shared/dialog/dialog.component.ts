import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
    title: string;
    message: string;
}

@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.component.html',
  })
  export class DialogComponent {

    constructor(public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onConfirm(): void{
        this.dialogRef.close(true);
    }

    onDismiss(): void{
        this.dialogRef.close(false);
    }


  }