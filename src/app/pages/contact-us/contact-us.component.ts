import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {


  
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private titleService: Title, private http: HttpClient, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Navhi Interstellar Beer - Contato');
    this.metaService.addTag({ name: 'description', content: 'Navhi Interstellar Beer - Contato | Sugestões para melhoria da Cervejaria, Dúvidas ou Reclamações' });
  }

  onSubmit() {
    const encodedNumber = encodeURIComponent('+5519983672710')
    const encodedName = encodeURIComponent(this.contact.name);
    const encodedEmail = encodeURIComponent(this.contact.email);
    const encodedMessage = encodeURIComponent(this.contact.message);

    const url = `https://wa.me/${encodedNumber}?text=Nome:%20${encodedName}%0AEmail:%20${encodedEmail}%0AMensagem:%20${encodedMessage}`;
    
    window.open(url, '_blank');

    // Swal.showLoading();


    // this.http.post('https://quiet-gorge-71000-b9dce4d92a29.herokuapp.com/send-email', this.contact)
    //   .subscribe(
    //     response => {
    //       Swal.close(); 
    //       Swal.fire({
    //         title: 'Sucesso!',
    //         text: 'E-mail enviado para a Navhi!',
    //         icon: 'success',
    //         confirmButtonColor: 'rgb(33, 0, 45)',
    //         confirmButtonText: 'OK'
    //       });
    //     },
    //     error => {
    //       Swal.close(); 
    //       Swal.fire({
    //         title: 'Erro!',
    //         text: 'Ocorreu um erro ao tentar enviar a mensagem, tente novamente mais tarde.',
    //         icon: 'error',
    //         confirmButtonColor: '#d33',
    //         confirmButtonText: 'Entendido'
    //       });
    //     }
    //   );

    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
