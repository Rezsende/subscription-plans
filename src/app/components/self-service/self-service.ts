import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-self-service',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './self-service.html',
  styleUrl: './self-service.css'
})
export class SelfService {
  opcoes = [
    { titulo: '2ª via de Fatura', descricao: 'Baixe sua fatura digital', icon: 'request_quote' },
    { titulo: 'Ative a Fatura Digital', descricao: 'Receba por e-mail', icon: 'price_check' },
    { titulo: 'App Cliente', descricao: 'Gerencie sua conta', icon: 'devices' },
    { titulo: 'Ative o débito automático', descricao: 'Facilidade no pagamento', icon: 'payment_arrow_down' },
    { titulo: 'Pague a fatura com cartão', descricao: 'Rápido e seguro', icon: 'credit_card' },
    { titulo: 'Devolução de equipamento', descricao: 'Agende devolução', icon: 'cloud_sync' },
    { titulo: 'Conheça o Clube Fidelidade', descricao: 'Ganhe benefícios', icon: 'golf_course' },
  ];

}
