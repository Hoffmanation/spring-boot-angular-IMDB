import { Component} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-rating-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{_modelTopic}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div style="display: grid;" class="modal-body">
      <p>{{_modelBody}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdRatingModalContent {

  public _modelTopic: string = "This is the topic";
  public _modelBody: string = "This is the body";

  constructor(public activeModal: NgbActiveModal) { }

  public get ModelTopic(): string {
    return this._modelTopic;
  }

  public set ModelTopic(newTopic: string) {
    this._modelTopic = newTopic;
  }

}