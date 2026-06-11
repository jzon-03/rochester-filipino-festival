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

  downloadCalendar(): void {
    const eventStart = '20260725T110000'; // July 25, 2026, 11:00 AM
    const eventEnd = '20260725T180000';   // July 25, 2026, 6:00 PM
    const timestamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Rochester Filipino Festival//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'X-WR-CALNAME:Rochester Filipino Festival',
      'X-WR-TIMEZONE:America/New_York',
      'BEGIN:VEVENT',
      `DTSTART:${eventStart}`,
      `DTEND:${eventEnd}`,
      `DTSTAMP:${timestamp}`,
      'UID:rochester-filipino-festival-2026@upstatepinoy.com',
      'SUMMARY:Rochester Filipino Festival 2026',
      'DESCRIPTION:A vibrant celebration of Filipino culture\\, heritage\\, and community. Featuring cultural performances\\, authentic Filipino cuisine\\, karaoke contest ($200 prize)\\, Prince & Princess pageant (ages 3-8)\\, arts\\, crafts\\, and family activities. FREE admission!\\n\\nOrganized by Filipino American Association of Rochester (FAAR)\\n\\nFor more information: info@filamroc.org',
      'LOCATION:7272 W Henrietta Road\\, Rush\\, NY 14543',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder: Rochester Filipino Festival tomorrow!',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    // Create blob and download
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'rochester-filipino-festival-2026.ics';
    link.click();
    window.URL.revokeObjectURL(link.href);
  }

  openGoogleMaps(): void {
    const address = encodeURIComponent(`${this.eventDetails.location}, ${this.eventDetails.address}`);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(mapsUrl, '_blank');
  }
}
