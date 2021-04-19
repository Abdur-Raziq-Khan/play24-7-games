import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})

export class LeftSidebarComponent implements OnInit {
  private _opened: boolean = true;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  closeLeftNav() {
    document.getElementById('menu').style.display = 'block';
    // document.getElementById('checkL').style.zIndex= 'unset'
    document.getElementById('leftSidenav').style.width = '0';
  }

      // login modal
      openLoginModal(content) {
        this.modalService.dismissAll();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }

      // close modal
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }

}
