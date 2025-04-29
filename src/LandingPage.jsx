import emailjs from '@emailjs/browser';
import React, {useState} from 'react';
import './LandingPage.css';
import logo from './assets/logo.png';
import heroImage from './assets/hero.jpg';



const LandingPage = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    setFormData({name: '', email: '', message: ''});
                },
                (error) => {
                    alert('Failed to send message. Please try again.');
                    console.error(error)
                }
            )        
    };

    return (
        <div className='landing-container'>
            <header className='hero'>
                <img src={logo} alt="ATM Logo" className='logo' />
                <img src={heroImage} alt="Heavy Equipment" className='hero-image' />
                <div className='hero-text'>
                    <h1>ATM Heavy Equipment Parts Supply & Merchandise</h1>
                    <p>Your One-Stop Source for Reliable Heavy Equipment Parts & Industrial Merchandise</p>
                </div>
            </header>

            <section className='specialization'>
                <h2>We Specialize In:</h2>
                <ul>
                    <li>Genuine & OEM replacement parts for loaders, bulldozers, excavators, and trucks</li>
                    <li>Hydraulic components, filters, undercarriage parts, and engine spares</li>
                    <li>Safety gear, construction tools, and branded workwear merchandise</li>
                </ul>
            </section>

            <section className='why-choose'>
                <h2>Why Choose ATM?</h2>
                <ul>
                    <li><strong>Wide Inventory:</strong> Extensive parts for Caterpillar, Komatsu, Hitachi, and more</li>
                    <li><strong>Expert Support:</strong> Tech assistance from trained specialists</li>
                    <li><strong>Competitive Pricing:</strong> Quality parts at the right price</li>
                </ul>
            </section>

            <section className='contact-form'>
                <h2>📨 Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder='Your Email' value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder='Your Message' value={formData.message} onChange={handleChange} required></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </section>

            <section className='map'>
                <h2>📍 Visit Us</h2>
                <iframe 
                    title='ATM Heavy Equipment Location'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.5176965400288!2d120.53811682972075!3d14.647903892469314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33963fdb179f7fdd%3A0xf5b5449713a18d91!2sHeavy%20Equipment%20Parts%20Supply%20%26%20Merchandise!5e0!3m2!1sen!2sph!4v1745919328096!5m2!1sen!2sph" 
                    width="100%"
                    height="300"
                    style={{ border: 0}}
                    allowFullScreen= ""
                    loading='lazy'
                ></iframe>
            </section>

            <footer>
                <p><strong>Tel: 09212726220 | 09602565396 | 09065884242</strong></p>
                <p>Trusted by contractors</p>
            </footer>
        </div>
    )
}

export default LandingPage