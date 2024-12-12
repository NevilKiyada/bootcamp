const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    document.querySelector('.quote').textContent = `"${quote.text}"`;
    document.querySelector('.author').textContent = `- ${quote.author}`;
}
