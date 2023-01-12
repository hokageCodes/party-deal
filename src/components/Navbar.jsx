import { BiPhoneCall } from 'react-icons/bi'

export default function Navbar() {
    return (
        <>
        {/* Navigation */}
            <nav className="nav__container">
                <div className="logo">
                    <h2>Party <span>Deal</span></h2>
                </div>
                <div className="nav__links__container">
                    <ul className="nav__links">
                        <li>Our Services</li>
                        <li>About Us</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="inquiry__button">
                    <BiPhoneCall />
                    <p>+234 80 230 229 36</p>
                </div>
            </nav>

            {/* Hero Section */}
            <section className='hero__section'>
                <h1><span>Unique, </span><br />Full Catering Service  in Lagos</h1>
                <p>We specialize in weddings and special events’ on and off site catering. We also provide office food deliveries and rental services</p>
            </section>

            {/* Service Bookings */}
            <div className="bookings"></div>
        </>
    )
}
