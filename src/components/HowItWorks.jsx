import { GiNotebook } from 'react-icons/gi'
export default function HowItWorks() {
    return (
        <section className='howitworks__container'>
            <div className="left__section">
                <h2>You can book way ahead of time, or book impromptu and we will come through.</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Q9tDxB-Pfn1Ezq9LZeJVALJIHFXAVYVdwOIaIxycJkr5fxZZf12sOCJ1Ai-WwuGOqbI&usqp=CAU" alt="" />
            </div>
            <div className="right">
                <h2>Our quality of food and delivery are our greatest asset. No delay on your special event(s)</h2>
                <div className="right__steps">
                    <div className="step">
                        <GiNotebook />
                        <div className="step__text">
                            <h3>Whether you order long before your special occassion or it's an impromptu occassion, We've got you covered.
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, placeat officia! Possimus aperiam voluptatibus adipisci.</p>
                        </div>
                    </div>
                    <div className="step">
                        <GiNotebook />
                        <div className="step__text">
                            <h3>Whether you order long before your special occassion or it's an impromptu occassion, We've got you covered.
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, placeat officia! Possimus aperiam voluptatibus adipisci.</p>
                        </div>
                    </div>
                    <div className="step">
                        <GiNotebook />
                        <div className="step__text">
                            <h3>Whether you order long before your special occassion or it's an impromptu occassion, We've got you covered.
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, placeat officia! Possimus aperiam voluptatibus adipisci.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
