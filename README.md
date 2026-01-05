# Jon Marneil Cabahug - Portfolio v3.0

A modern, high-performance portfolio website built with **Next.js 16**, **Tailwind CSS**, and **GSAP**. This project showcases my skills as a Full Stack Developer, featuring a custom boot sequence animation, a responsive design, and a smooth user experience.

##  Features

*   **Modern Tech Stack:** Built with Next.js (App Router), React, and TypeScript.
*   **Advanced Animations:** Powered by GSAP (GreenSock Animation Platform) for smooth scroll-triggered reveals and a unique boot sequence.
*   **Responsive Design:** Fully responsive layout using Tailwind CSS and DaisyUI.
*   **Optimized Performance:** Fast loading times and smooth transitions.
*   **Contact Integration:** Functional contact form with email capabilities.

##  Technical Stack

### Frontend
*   **Framework:** [Next.js 16](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
*   **Animations:** [GSAP](https://greensock.com/gsap/) & ScrollTrigger
*   **Icons:** Font Awesome

### Backend & Tools
*   **Runtime:** Node.js
*   **Deployment:** Vercel (Recommended) or Netlify
*   **Package Manager:** npm

##  Project Structure

```
├── app/
│   ├── components/      # UI Components (Hero, Navbar, Projects, etc.)
│   ├── hooks/           # Custom React Hooks (useAnimationController)
│   ├── lib/             # Utility libraries (GSAP configuration)
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout with fonts and metadata
│   └── page.tsx         # Main page orchestrating the boot sequence
├── public/              # Static assets (images, icons)
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

##  Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/themarneilx/portfolio-v3.git
    cd portfolio-v3
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **SMTP Configuration (for Contact Form):**
    The contact form requires SMTP credentials to send emails. Create a `.env.local` file in the root of the project and add the following environment variables:

    ```
    SMTP_HOST=your_smtp_host_address
    SMTP_PORT=your_smtp_port (e.g., 587 for TLS, 465 for SSL)
    SMTP_USER=your_smtp_username
    SMTP_PASS=your_smtp_password
    SMTP_SECURE=true_or_false (true for SSL/465, false for TLS/587)
    ```
    Replace the placeholder values with your actual SMTP server details.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

##  License

This project is open-source and available under the [MIT License](LICENSE).

---

© 2025 Jon Marneil Cabahug. All rights reserved.
