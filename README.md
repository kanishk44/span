# Span Industries - Professional Defence Manufacturing Website

A modern, professional website for Span Industries, a premier defence manufacturing company founded in 1994 by Mr. Jitendra J Dalvi.

## 🚀 Features

- **Modern Design**: Clean, professional design suitable for defence industry
- **Responsive Layout**: Works perfectly on all devices (desktop, tablet, mobile)
- **SEO Optimized**: Proper meta tags, structured data, and search engine optimization
- **Fast Performance**: Built with Next.js 15+ and optimized for speed
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Contact Form**: Interactive contact form with validation
- **Professional Branding**: Corporate color scheme and typography

## 📋 Pages & Sections

### 1. Homepage (`/`)

- Hero section with company overview
- Key highlights and achievements
- About section with company background
- Project categories showcase
- Government registrations display
- Call-to-action sections

### 2. About Us (`/about`)

- Company history and founder information
- Timeline of achievements
- Company values and principles
- Founder's background and expertise

### 3. Facilities (`/facilities`)

- Manufacturing facility details
- Infrastructure capabilities
- Location and address information
- Quality certifications
- Manufacturing capabilities

### 4. Projects (`/projects`)

- Major project categories
- Key achievements and statistics
- Project highlights and details
- Government registrations
- Quality assurance information

### 5. Certifications (`/certifications`)

- Government registrations and approvals
- Quality standards and compliance
- Benefits of certifications
- Defence establishment partnerships

### 6. Partners (`/partners`)

- International partnerships
- Technology transfer capabilities
- Global network overview
- Partnership benefits

### 7. Contact (`/contact`)

- Interactive contact form
- Company contact information
- Location details
- Service offerings

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (React)
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 🏭 Company Information

### About Span Industries

- **Founded**: 1994 by Mr. Jitendra J Dalvi
- **Location**: Plot no 2421A, Gat no 255 A, Talawade, Pune – 412109
- **Facility**: 100,000 sq ft manufacturing facility
- **Capacity**: Up to 100 tons single job
- **Email**: dalvi.jitendra@gmail.com

### Major Projects

- **Missile Programmes**: AGNI 1, 2, 3, 5 and Prithvi Missile systems
- **Bridging Systems**: Modular Bridge, Short Span Bridge, Mountain Foot Bridge
- **Special Trailers**: MRSAM, BO5, SIDDHI and other defence trailers
- **Defence Components**: Jet Deflectors, Launcher Beams, Special Covering Hoods

### Government Registrations

- MoD (Ministry of Defence)
- DRDO (Defence Research and Development Organisation)
- VRDE (Vehicle Research and Development Establishment)
- R&DE (E) (Research & Development Establishment Engineers)
- HEMRL (High Energy Materials Research Laboratory)
- ARDE (Armament Research and Development Establishment)
- AFK
- Other Defence Establishments

### International Partners

- **M/s Palfinger Co. AG** – Austria (Hydraulic systems)
- **Automated Car Parking** – Korea (Parking solutions)
- **Under Vehicle Scanner** – Singapore (Security equipment)
- **Radar System** – Israel (Detection systems)
- **M/s SOPOT** – Russia (Fire fighting equipment)
- **M/s CHTZ** – Russia (Heavy machinery)
- **M/s SOPOL** – Russia (Surveillance systems)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd span
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
span/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── facilities/
│   │   │   └── page.js
│   │   ├── projects/
│   │   │   └── page.js
│   │   ├── certifications/
│   │   │   └── page.js
│   │   ├── partners/
│   │   │   └── page.js
│   │   ├── contact/
│   │   │   ├── layout.js
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── Header.js
│       └── Footer.js
├── public/
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

## 🎨 Design Features

- **Color Scheme**: Professional blues and grays suitable for defence industry
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Modern grid-based responsive design
- **Animations**: Subtle hover effects and transitions
- **Icons**: Emoji-based icons for visual appeal
- **Navigation**: Sticky header with mobile-responsive menu

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1200px+ (full layout with sidebars)
- **Tablet**: 768px - 1199px (adjusted grid layouts)
- **Mobile**: < 768px (stacked layouts, mobile menu)

## 🔧 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  blue: {
    600: '#2563eb', // Primary blue
    700: '#1d4ed8', // Darker blue
    900: '#1e3a8a', // Dark blue
  }
}
```

### Content

All content is easily editable in the respective page files:

- Company information in `src/app/page.js`
- Project details in `src/app/projects/page.js`
- Contact information in `src/app/contact/page.js`

### Images

Replace placeholder images in the `public/` directory with actual company photos.

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and titles
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema markup for better search results
- **Sitemap**: Auto-generated sitemap (can be added)
- **Robots.txt**: Search engine crawling instructions

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms

- **Netlify**: Drag and drop deployment
- **AWS Amplify**: AWS hosting solution
- **DigitalOcean App Platform**: Cloud hosting
- **Traditional hosting**: Build and upload static files

## 📞 Support

For technical support or customization requests:

- **Email**: dalvi.jitendra@gmail.com
- **Company**: Span Industries
- **Location**: Pune, Maharashtra, India

## 📄 License

This project is proprietary to Span Industries. All rights reserved.

---

**Built with ❤️ for Span Industries - Leading Defence Manufacturing Solutions Since 1994**
