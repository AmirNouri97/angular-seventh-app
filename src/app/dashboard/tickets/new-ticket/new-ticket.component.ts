import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  onSubmit(
    // titleElement: HTMLInputElement,
    // textAreaElement: HTMLTextAreaElement
    title: string,
    ticketText: string
  ) {
    // const enteredTitle = titleElement.value;
    // const enteredRequest = textAreaElement.value;
    // throw new Error('Method not implemented.');
    console.log('submitted');
    console.log(title);
    console.log(ticketText);
  }
}
