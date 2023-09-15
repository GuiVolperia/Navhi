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
    this.titleService.setTitle('Navhi - Contato');
    this.metaService.addTag({ name: 'description', content: 'Navhi - Contato | Entre em contato conosco e peça seu chopp.' });
  }

  onSubmit() {

    Swal.showLoading();


    this.http.post('https://quiet-gorge-71000-b9dce4d92a29.herokuapp.com/send-email', this.contact)
      .subscribe(
        response => {
          Swal.close(); 
          Swal.fire({
            title: 'Sucesso!',
            text: 'E-mail enviado para a Navhi!',
            icon: 'success',
            confirmButtonColor: 'rgb(33, 0, 45)',
            confirmButtonText: 'OK'
          });
        },
        error => {
          Swal.close(); 
          Swal.fire({
            title: 'Erro!',
            text: 'Ocorreu um erro ao tentar enviar a mensagem, tente novamente mais tarde.',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Entendido'
          });
        }
      );

    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}
