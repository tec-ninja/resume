import React from 'react';

function Contact(props) {

   const { name, phone, email, contactmessage, address: { street, city, state, zip } } = props.data;
   
   const handleChange = () => {};

   return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
               <p className="lead">{contactmessage}</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <form action="" method="post" id="contactForm" name="contactForm">
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={handleChange}/>
                     </div>
                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={handleChange}/>
                     </div>
                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleChange}/>
                     </div>
                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                     </div>
                     <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
				   </form>
               <div id="message-warning"> Error boy</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div>
            </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
                  <h4>Address</h4>
                  <p className="address">
                     {name}<br />
                     {street} <br />
                     {city}, {state} {zip}<br />
                  </p>
               </div>
               <div className="widget widget_contact">
                  <h4>Phone</h4>
                  <p className="address">
                     {phone}<br />
                  </p>
               </div>
               <div className="widget widget_contact">
                  <h4>Email</h4>
                  <p className="address">
                     {email}<br />
                  </p>
               </div>
            </aside>
         </div>
   </section>
   );
}

export default Contact;
