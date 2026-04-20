# SteamTalk 🚀

SteamTalk is a modern, real-time community platform that connects people through interactive forums and seamless communication. Built with a focus on user experience, it features high-performance 3D visuals and a robust chat infrastructure.

## ✨ Features

- **Real-time Forums**: Join community discussions powered by Stream Chat with livestream capabilities.
- **Secure Authentication**: User management and authentication handled seamlessly by Clerk.
- **Interactive UI**: A stunning, modern interface featuring:
  - **Interactive 3D Globe**: Visualizing global reach and connections.
  - **Spotlight & Glowing Effects**: Dynamic UI elements for a premium feel.
  - **Tracing Beams & Background Lines**: Elegant animated backgrounds.
- **Dynamic Communities**: Explore various forums (slug-based) with automatic channel creation.
- **Direct Messaging**: Coming soon!

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Authentication**: [Clerk](https://clerk.com/)
- **Chat Infrastructure**: [Stream Chat](https://getstream.io/chat/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Aceternity UI](https://ui.aceternity.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd chatzo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following keys from your Clerk and Stream dashboards:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # Stream Chat
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_SECRET=your_stream_secret
   ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js App Router pages and API routes.
  - `api/stream-token/`: Endpoint for secure Stream Chat token generation.
  - `chat/`: Personal messaging interface (In development).
  - `forum/[slug]/`: Dynamic forum channel pages.
  - `forums/`: Community forum listing.
- `components/`: Reusable UI components from Shadcn and Aceternity.
- `lib/`: Shared utility functions.
- `public/`: Static assets.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and intended for personal/internal use.
