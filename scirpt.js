const blogs = [
    {
        title: "Designing for the Future: Embracing Accessibility in Web Development",
        category: "Tech",
        author: "Jenny Wilson",
        date: "10 Apr 2024",
        content: "Explore the crucial role of accessibility in web design, highlighting the latest tools and techniques...",
        image: "Images/1.jpg"
    },
    {
        title: "The Evolution of User Interface: From Text to Voice",
        category: "Travel",
        author: "Eleanor Pena",
        date: "12 Apr 2024",
        content: "Dive into the transformation of user interfaces and the rise of voice-driven experiences...",
        image: "Images/2.jpg"
    },
    {
        title: "Minimalist Magic: The Power of Less in Web Design",
        category: "News",
        author: "Kathryn Murphy",
        date: "14 Apr 2024",
        content: "Discover why minimalist design remains a powerful trend in the digital world...",
        image: "Images/3.jpg"
    },
    {
        title: "Boost Your Website Speed: Best Practices for Faster Loading",
        category: "Career",
        author: "Kathryn Murphy",
        date: "14 Apr 2024",
        content: "Learn the techniques to optimize loading speed across devices...",
        image: "Images/4.jpg"
    },
    {
        title: "Responsive Design Decoded: Flexible Websites for Every Device",
        category: "Career",
        author: "Kathryn Murphy",
        date: "14 Apr 2024",
        content: "A guide to responsive design and mobile-friendly development...",
        image: "Images/5.jpg"
    },
    {
        title: "Beyond Colors: The Psychology of Web Design",
        category: "Career",
        author: "Kathryn Murphy",
        date: "14 Apr 2024",
        content: "Explore how color choices affect user emotions and behavior...",
        image: "Images/6.jpg"
    }
];

function renderBlogs() {
    const container = document.getElementById("blogContainer");
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;

    container.innerHTML = "";

    blogs
        .filter(b => b.title.toLowerCase().includes(search))
        .filter(b => category === "All" ? true : b.category === category)
        .forEach(blog => {

            const card = document.createElement("div");
            card.classList.add("blog-card");

            card.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}">
                <h2>${blog.title}</h2>
                <div class="meta">${blog.category}  ${blog.author}  ${blog.date}</div>
                <p>${blog.content}</p>
            `;

            container.appendChild(card);
        });
}

document.getElementById("searchInput").addEventListener("input", renderBlogs);
document.getElementById("categoryFilter").addEventListener("change", renderBlogs);

renderBlogs();
