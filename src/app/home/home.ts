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

  schedule = {
    friday: [
      { time: '11:00 AM', event: 'Festival Opening Ceremony' },
      { time: '11:30 AM', event: 'Food Vendors Open' },
      { time: '12:00 PM', event: 'Traditional Tinikling Dance' },
      { time: '1:00 PM', event: 'Filipino Cooking Demonstration' },
      { time: '2:00 PM', event: 'Cultural Fashion Show' },
      { time: '3:00 PM', event: 'Live Band Performance' },
      { time: '4:00 PM', event: 'Kids Cultural Activities' },
      { time: '5:00 PM', event: 'Martial Arts Demonstration' },
      { time: '6:00 PM', event: 'Festival Closing' }
    ]
  };

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
  }
}
