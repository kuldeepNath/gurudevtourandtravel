import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
    selector: 'app-share-details',
    templateUrl: './share-details.component.html',
    styleUrls: ['./share-details.component.scss'],
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ShareDetailsComponent implements OnInit {
    name = new FormControl('', Validators.required);
    mobile = new FormControl('', Validators.required);
    email = new FormControl('', Validators.required);
    desciption = new FormControl('', Validators.required);
    ngOnInit() { 
        
    }
    sentToWhatsapp() {
        debugger
        let content="Name : "+this.name.value+" \n "+"Mobile No : "+this.mobile.value+"\n "+"EmailId : "+this.email.value
        +" \n "+"Trip Details : "+this.desciption.value;
        let html = document.createElement('div');
        html.innerHTML = content;       
        let link = "https://api.whatsapp.com/send?phone="+this.mobile.value+"&text="+html.innerHTML;
        window.open(link, "_blank");
    }
}





