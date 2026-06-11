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
    // Use Google Calendar URL for better mobile compatibility
    // This will open native calendar apps on mobile devices
    const eventTitle = encodeURIComponent('Rochester Filipino Festival 2026');
    const eventLocation = encodeURIComponent('7272 W Henrietta Road, Rush, NY 14543');
    const eventDetails = encodeURIComponent(
      'A vibrant celebration of Filipino culture, heritage, and community. ' +
      'Featuring cultural performances, authentic Filipino cuisine, karaoke contest ($200 prize), ' +
      'Prince & Princess pageant (ages 3-8), arts, crafts, and family activities. FREE admission!\n\n' +
      'Organized by Filipino American Association of Rochester (FAAR)\n' +
      'For more information: info@filamroc.org'
    );
    
    // Format: YYYYMMDDTHHmmSS/YYYYMMDDTHHmmSS (in UTC or local timezone)
    const startDate = '20260725T110000';
    const endDate = '20260725T180000';
    const dates = `${startDate}/${endDate}`;
    
    // Google Calendar Add Event URL - works on mobile and desktop
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${dates}&details=${eventDetails}&location=${eventLocation}&sf=true&output=xml`;
    
    window.open(calendarUrl, '_blank');
  }

  openGoogleMaps(): void {
    const address = encodeURIComponent(`${this.eventDetails.location}, ${this.eventDetails.address}`);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(mapsUrl, '_blank');
  }

  openEventbrite(): void {
    const eventbriteUrl = 'https://www.eventbrite.com/e/rochester-filipino-festival-tickets-1990107591378?aff=oddtdtcreator&fbclid=IwY2xjawSFUj9leHRuA2FlbQIxMABicmlkETFQYkxiZ1VwcmFMTjVoT1Rac3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHl9kZxu7yiSiAE7N-sKepYiTvEpZRPyJ6Ltii34fvNehMlUQgbVILKzFAZvr_aem_uggQHgBqLUAdpDOvP_LuPQ';
    window.open(eventbriteUrl, '_blank');
  }
}
