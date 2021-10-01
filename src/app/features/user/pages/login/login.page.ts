import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'user-login',
    templateUrl: 'login.page.html'
})

export class LoginPage implements OnInit {
    Loginfrm:FormGroup;
    constructor(public fb: FormBuilder) { }

    ngOnInit() { }

    initform() {
        this.Loginfrm = this.fb.group({
            user: [],
            password: []
        })
    }
}