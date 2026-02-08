# Decentralizer Notes

A personal blog and learning log for documenting my journey learning Solidity and Web3 development.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **MDX** for blog posts
- **Vercel** for deployment

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📝 Adding Blog Posts

1. Create a new `.md` file in `/content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2025-02-08"
description: "Brief description of your post"
tags: ["solidity", "web3"]
readingTime: "5 min read"
---

## Your content here...
```

3. The post will automatically appear on the blog page

## 🎨 Design

This site features a terminal/hacker-inspired aesthetic with:
- Matrix-style green on black color scheme
- Monospace fonts (JetBrains Mono & Space Mono)
- Terminal-like UI elements
- Scanline and grid effects
- Glitch animations on hover

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Your site will be live at `your-project.vercel.app`

### Custom Domain (Optional)

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In Vercel dashboard, go to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## 📁 Project Structure

```
decentralizer-notes/
├── app/
│   ├── layout.js          # Root layout with design
│   ├── page.js            # Homepage
│   ├── globals.css        # Global styles
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects page
│   ├── learning-log/      # Learning log page
│   └── about/             # About page
├── components/
│   └── Navigation.js      # Navigation component
├── content/
│   └── blog/              # Blog posts (markdown)
├── lib/
│   └── posts.js           # Blog post utilities
└── public/                # Static files
```

## 🎯 Roadmap

- [x] Basic site structure
- [x] Blog with MDX
- [x] Terminal aesthetic design
- [ ] Add syntax highlighting for code blocks
- [ ] Add reading progress indicator
- [ ] Add RSS feed
- [ ] Add search functionality
- [ ] Add comments (giscus)

## 📄 License

MIT - Feel free to use this as a template for your own site!

## 🤝 Contributing

This is a personal learning project, but suggestions are welcome! Open an issue or reach out.

---

Built with 💚 while learning Web3
