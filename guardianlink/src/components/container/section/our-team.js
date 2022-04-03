import Profile from "components/shared-ui/profile"

const teamMembers =[
{ avatar: 'https://cdn.guardianlink.io/product-hotspot/images/kp.jpg', linkedIn: null, name: 'Keyur Patel', title: 'Co-Founder & Chairman', desc: 'He is one the most dynamic visionaries in the digital realm. He incubated hatched and funded some of the most successful companies including Amazon, Netflix, Twitter, PayPal, Sky+, NDTV, Yahoo! and Fabrik' },
    { avatar: 'https://cdn.guardianlink.io/product-hotspot/images/ram_3.jpg', linkedIn: 'ramkumar-subramaniam', name: 'Ramkumar Subramaniam', title: 'Co-Founder & CEO', desc: 'Having helped create a $3B MarketCap for our partners, Ram, an early crypto-adopter and diehard decentralisation fan, is a Co-Founder of GuardianLink. His vision is to make sure 1 Million Artists make $1 Million each on GuardianLink.' },
    { avatar: 'https://cdn.guardianlink.io/product-hotspot/images/arjun.jpg', linkedIn: 'arjun-reddy-2197171b7', name: 'Arjun Reddy', title: 'Co-Founder & CTO', desc: 'Arjun fancies a role like Prometheus, who brings the Fire from Gods to mortals, he makes technology that only Billion dollar conglomerates take advantage of, to the realm of startups. He has helped more than 100+ startups, ranging from gaming to finance, to create their vision and become market leaders.' },
    { avatar: 'https://cdn.guardianlink.io/product-hotspot/images/kamesh.jpg', linkedIn: 'kameshwarane', name: 'Kameshwaran Elangovan', title: 'Co-Founder & COO', desc: 'Coming from the traditional IT startup world, Kamesh founded a company during his college years and grew it up to be 350+ strong. He has executed 50+ of the most complex crypto project launches for our R&D partners so that their communities had reason to trust their roadmaps.' },
    { avatar: 'https://cdn.guardianlink.io/product-hotspot/images/sandrina.jpg', linkedIn: 'sandrinapaula', name: 'Sandrina Paula', title: 'Vice President', desc: 'Sandrina is the new age millennial, fashion trendsetter who is a crypto geek herself. She has worked on some of the most interesting brands such as Fedex, HCL, Four Seasons, Sky+ for Business Development & as a Human Resource Strategist. At GuardianLink she is focussed on International Brand Partnerships.' }
]

export const Ourteam = () => { 
    return (
        <section className="section our-team pb-0">
            <div className='section__heading'>
                <h2>Our <span className='roun_icon'></span> Team.</h2>
            </div>
            <div className="our-team__wrap">
                {
                    teamMembers && teamMembers.map(({avatar, linkedIn, name,title,desc},index) =>
                        <Profile key={index} avatar={avatar} linkedIn={ linkedIn } name={ name } title={ title } desc={ desc}/>
                    )
                }
            </div>
        </section>
    )
}