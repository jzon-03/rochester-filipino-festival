import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  currentYear = new Date().getFullYear();
  navActive = false;
  
  eventDetails = {
    date: 'July 25, 2026',
    time: 'Friday 11 AM - 6 PM',
    location: '7272 W Henrietta Road',
    address: 'Rush, NY 14543'
  };

  highlights = [
    {
      icon: '🎭',
      title: 'Cultural Performances',
      description: 'Traditional Filipino dances, music, and live entertainment'
    },
    {
      icon: '🍜',
      title: 'Authentic Cuisine',
      description: 'Delicious Filipino food, desserts, and refreshments'
    },
    {
      icon: '🎨',
      title: 'Arts & Crafts',
      description: 'Local artisans showcasing Filipino culture and heritage'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Activities',
      description: 'Kids zone, games, and activities for all ages'
    }
  ];

  foods = [
    'Lumpia (Spring Rolls)',
    'Pancit (Noodles)',
    'Adobo (Chicken/Pork)',
    'Lechon (Roasted Pig)',
    'Halo-Halo (Dessert)',
    'Sinigang (Sour Soup)',
    'Kare-Kare (Peanut Stew)',
    'Bibingka (Rice Cake)',
    'Filipino BBQ',
    'Turon (Banana Rolls)'
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile nav after clicking
    this.navActive = false;
  }

  toggleNav(): void {
    this.navActive = !this.navActive;
  }
}
