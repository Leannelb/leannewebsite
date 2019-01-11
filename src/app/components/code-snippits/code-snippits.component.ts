import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeService } from 'src/app/services/code.service';

@Component({
  selector: 'app-code',
  templateUrl: './code-snippits.component.html',
  styleUrls: ['./code-snippits.component.css']
})
export class CodeSnippitsComponent implements OnInit {
  private sub: any;
  private code: any;

  constructor(private codeService: CodeService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.code = this.codeService.getCode(this.route.snapshot.params.slug);
  }
}

