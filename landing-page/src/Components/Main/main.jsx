
import '../Main/main.css';

import Image1 from '../Assets/image1.jpg';
import Image2 from '../Assets/image2.jpg';
import Image3 from '../Assets/image3.jpg';
import Image4 from '../Assets/image4.jpg';
import Image5 from '../Assets/image3.jpg';
import Image6 from '../Assets/image3.jpg';
// import Video0 from '../Assets/video-0.mp4';
import Video2 from '../Assets/video-2.mp4';




function Main() {
    return (
        <>
        <main>
        <section>
        <section className="main-1">
            <div className='container-2'>
            <video src={Video2} autoPlay loop muted />
            <h6 className='upper-text'>START PLANNING YOUR NEXT EXTRAORDINARY ESCAPE </h6></div>
        </section>
        <section className='main-2'>
            <article>
                <h4 className="h4">INTRODUCING:</h4>
                <h3 className="h3">Mlinari Travel, Your Full-Service Concierge Travel Agency</h3>
                <i className="main2-paragraph-0">IMAGINE, FOR A MOMENT</i>

                <div className="main2-container">
                    <div className="main2-sub-container">
                        <img src={Image1} alt="Molinaro Travel imm" className='main2-img1'  />
                        <p className="main2-paragraph-1">
                        Rumbling right up to a pride of lions on a South African safari, so close to the lolling big cats you don’t even have to zoom your camera in to capture the unforgettable scene…
                        </p>
                    </div>
                    <div className="main2-sub2-container">
                        <img src={Image2} alt="Molinari Travel imm" className='main2-img2' />
                        <p className="main2-paragraph-2">
                        Slipping into the cane-backed chairs of a quayside bistro in Paris—the best seats in the house—to enjoy an aperitif right as the setting sun casts a warm glow over the Seine…
                        </p>
                    </div>
                    <div className="main2-sub3-container">
                        <img src={Image3} alt="Molinari Travel" className='main2-img3' />
                        <p className="main2-paragraph-3">
                Sailing along the coral reef-strewn islands of the Maldives on your own private charter, then diving right off the stern and slicing into the cool water below…
                        </p>
                    </div>
                </div>
            </article>
        </section>
        <section className="main-3">
            <article className='main3-article' >
                <img  src={Image4} className='main3-artucle-img4' height={200} width={250} alt="" />
                <div className="main3-container">
                <p className='main3-container-Head1'>
                    Hi, I'm Leah Molinari, your personal travel advisor.
                </p> <br />
                <p className='main3-container-sub-Head1'>
                I make moments like these happen for my clients. Remarkable moments that feel serendipitous, but actually come together through meticulous planning and a highly personalized approach. <br />
                <br />
                In other words, <strong>I’ll make sure you’re in the right place at the right time to experience truly extraordinary travel.</strong> Through my exclusive contacts with the best private guides, service-oriented properties, and boutique tour outfitters, I craft custom itineraries that get you closer to extraordinary than you ever thought possible.
                </p> <br />
                <p className='main3-container-sub-Head2'>
                Discover how I can make your next vacation effortlessly extraordinary…
                </p>
                <button className='main3-btn-1'>
                    My PLANNING PROCESS 
                </button>
                </div>
            </article>
        </section>
        {/* fourth main section start  */}
        <section className='main-4'>
            <div className="main4-container-1"> 
            <video src={Video2} className='main4-video' autoPlay loop muted/>
            <p className='main4-head1' >SPECIALIZING IN</p>
            <p className='main4-sub-head1' >UNIQUE LUXURY TRAVEL EXPERIENCES</p>
            <button className='main4-btn-1'>SERVICES</button>
            </div>
        </section>
        {/* Fifth main scetion start  */}
        <section className='main-5'>
                <img src={Image5} alt="" className='main5-img-7' />
                <div className="main5-container-1">
                <h3 className='main5-head1'>
                    Meet Your Travel Advisor</h3>
                <h5 className="main5-sub-head1">
                    I'm your South Africa-obsessed, boutique hotel-loving personal travel advisor--and i'm here to make each and every moment count on your next vacation.
                </h5>
                <p className='main5-paragraph-7'>Learn why i take even the tiniest details seriously...</p>
                <button className='main5-btn-1'>MEEt LEAH</button>
                </div>
        </section>
        {/* sixth section start  */}
        <section className='main-6'>
            <form className='main6-container'>
                <p className='main6-head1'>Don't Miss Out!</p>
                <p className='main6-head2'>Subscribe to the newsletter for exclusive access to travel updates, destination inspiration, and expert tips!</p>
                <div className="main6-contain1">
                <input type="text" name='' id='main6-input1' placeholder='Your_Name' />
                <input type="email" name='' id='main6-input2'  placeholder='Email_addres'/>
                <button className='main6-btn-1'>Subscribe</button>
                </div>
            </form>
        </section>
        {/* <section className='main-7'>
       <article>
            <p className='main7-head1'>An independent affiliate of <i>GiftedLog</i> a <i>VirtousLog</i> Agency. </p>
            <p className='main7-head2'>gifted</p> <p className='main7-subhead2'>travel network</p>
            <h5  className='main7-head3'>A PROUD MEMBER OF:</h5>
            <div className="main7-contain1">
                <div>
                <p  className='main7-head4'>COUTURE</p><p className='main7-subhead4'>BYLANGHAM</p></div> 
                <br />
            <div><p  className='main7-head5'>BELOND</p> <p className='main7-subhead5'>BELLINICLUB</p></div> 
            <br />
            <div className='main7-head6-div'><p  className='main7-head6'>JUMEIRAH</p><hr className='hr' /> <b className='main7-subhead6'>PASSPORTTOLUXURY</b>
            </div> <br />
            <div><p className='main7-head7'>ROSEWOOD </p><p className='main7-subhead7'>ELITE</p> </div>
            <br />
            <div className='contin8'><p  className='main7-head8'>STEP </p> <p className='main7-subhead8'>ACCOR</p></div> 
            <br />
            <div className='contin9'><p  className='main7-head9'>HYATT </p> <p >PRIVE</p></div> 
            <br />
            <div><p  className='main7-head10'>impresario</p></div> 
            <br />
            <div><p  className='main7-head11'>SHANGRI_LAGROUP <hr className='hr1' /></p> <p className='main7-subhead11'>THELUXURYCIRCLE</p> </div>
            <br />
           <div> <p  className='main7-head12'>IHG </p> <p className='main7-subhead12'>Luxury &Lifestyle</p></div> <br />
            <div>
                   <p className='main7-head13'> STARS&LUMINOUS</p>
            </div>
            <div className='main7-contain2'>
                   <p className='main7-head14'>FOURSEASONS</p> <p className='main7-subhead14'>PREFRREDPARTNER</p>
            </div>
            </div>
            <div className='main7-contain3'>
                <p className='main7-head15'>
                    AmericanSocietyof
                </p>
                <p className='main7-subhead15'>Travel Advisors</p>
            </div> 
        </article> 
        </section>
*/}
        {/* Eigth section start  */}
        <section className='main-8'>
            <img className='main8-img-6' src={Image6} alt="" />
            <p className='main8-paragraph-6' >
            "Working with Leah was the best decision we could have made. Starting from the first time we met
            together to discuss our ideas and goals for our vacation, we could tell that Leah was just as
            invested as we were in making this the trip of a lifetime and she absolutely delivered. Leah had a
            wide range of ideas and options for us to start looking into immediately, but she was also always
            willing to hear our thoughts and our perspectives. She was very flexible with her timing and
            always got back to us immediately with answers to our questions. <br /> 
            <br />
            Leah demonstrated a wealth of knowledge when it comes to island getaways, both domestic and
            international. At the end of the day, Leah provided us with a wonderful itinerary at a world-class
            resort. Best of all, she checked in on us during our vacation to ensure that everything was going
            well and that our trip was meeting all of our expectations. <br />
            <br />
            We have found a life-long luxury travel advisor that we know we can count on and we can't wait
            to start planning our next adventure with Molinari Travel." <br /> <br />
            - LAUREN A.
            </p>
        </section>
    </section>
    </main>
        </>
    )
}

export default Main;