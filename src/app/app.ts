import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { AboutUs } from './components/about-us/about-us';
import { Statements } from './components/statements/statements';
import { SelfService } from './components/self-service/self-service';
import { Footer } from './components/footer/footer';

interface Plano {
  id: string;
  nome: string;
  preco: number;
  velocidade: string;
  descricao: string[];
  destaque?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, AboutUs, Statements, SelfService, Footer],   
  templateUrl: './app.html',
  styleUrls: ['./app.css']  
})
export class App {
  planos: Plano[] = [
    {
      id: 'basico',
      nome: 'Essencial',
      preco: 99.00,
      velocidade: '100 Mbps',
      descricao: ['Fibra óptica 100% dedicada', 'Instalação grátis', 'Suporte 24/7']
    },
    {
      id: 'intermediario',
      nome: 'Avançado',
      preco: 149.99,
      velocidade: '300 Mbps',
      descricao: ['Fibra óptica 100% dedicada', 'Roteador incluso', 'Suporte prioritário'],
      destaque: true
    },
    {
      id: 'premium',
      nome: 'Premium',
      preco: 250.00,
      velocidade: '1 Gbps',
      descricao: ['Fibra óptica 100% dedicada', 'Roteador premium', 'SLA comercial']
    }
  ];

  selecionado: string | null = null;

  selecionarPlano(plano: Plano) {
    this.selecionado = plano.id;
    console.log('Plano selecionado:', plano);
  }

  formatarPreco(valor: number) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
