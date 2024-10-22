import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            <h1>Contact Me</h1>
            <nav>
                <a href="app.js">Home</a>
                <a href="about.js">About Me</a>
                <a href="contact.js">Contact Me</a>
            </nav>
        </header>
        <main>
            <h2>Get in Touch</h2>
            <form action="#" method="post">
                
                <input type="text" id="name" placeholder="Name" name="name" required/><br/><br/>
                
                <input type="email" id="email" placeholder="Email" name="email" required/><br/><br/>
                
                <textarea id="message" name="message" placeholder="Message" required></textarea><br/><br/>
                <button type="submit">Send Message</button>
            </form>
        </main>
        <footer>
            <p>&copy; 2024 Your Website. All rights reserved.</p>
        </footer>
    </div>
  );
}

export default App;

