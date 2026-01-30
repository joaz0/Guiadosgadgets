import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Review {
  id: number;
  title: string;
  category: string;
  image: string;
  rating: number;
  summary: string;
  badge?: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class ReviewsComponent {
  featuredReview: Review = {
    id: 1,
    title: 'Top 10 Notebooks por Custo x Beneficio no Brasil (Jan 2026)',
    category: 'Computadores',
    image: 'assets/images/LenovoLOQ.png',
    rating: 9.8,
    summary: 'Ranking por faixa de preco usando o indice de valor (IV) e disponibilidade no Brasil.',
    badge: 'Guia Definitivo',
    date: '29 Jan 2026',
    link: '/reviews/top-10-notebooks-2026'
  };

  reviews: Review[] = [
    {
      id: 6,
      title: 'Top 10 Celulares por Custo x Beneficio (Jan 2026)',
      category: 'Smartphones',
      image: 'assets/images/smartphones-2026.jpg',
      rating: 9.6,
      summary:
        'Ranking por faixa de preco usando o indice de valor (IV) e regra do timing.',
      badge: 'Guia Atualizado',
      date: '02 Feb 2026',
      link: '/reviews/top-10-celulares-2026'
    }
  ];

  trackById(index: number, review: Review): number {
    return review.id;
  }
}
