import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trustees',
  templateUrl: './trustees.component.html',
  styleUrls: ['./trustees.component.css']
})
export class TrusteesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trustees = [{"name": "Trustee 1", "description": "Trustee description"},
  {"name": "Trustee 2", "description": "Trustee description"},
  {"name": "Trustee 3", "description": "Trustee description"},
  ]
}
