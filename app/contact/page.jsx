const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pt-48 p-2 text-center text-white ">
      <section>
      <h1 className="text-center text-4xl mb-4" >Contact Us</h1>
      <p className="text-lg mb-4">
      Have questions or feedback? Reach out to us using the contact
          information below.
      </p>
      <p className="text-lg mb-4">
      Austurstræti 3, 101 Reykjavík, Iceland
      </p>
      <p className="text-lg mb-4">
       101b@101bistro
      </p>
      <p className="text-lg mb-4">
        +3545880015
      </p>
      </section>
      <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.0911400639104!2d-21.941577021860553!3d64.14786651232043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d60b2d1069c5e7%3A0x31dd32bcbb166ad4!2sAusturstr%C3%A6ti%203%2C%20101%20Reykjav%C3%ADk!5e0!3m2!1sen!2sis!4v1697335022410!5m2!1sen!2sis" width="390" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <section className="mt-10">
      <h1 className="text-center text-2xl mb-4" >Opening Hours</h1>
      <p className="text-xl text-center font-cursive italic mx-4">Come Visit</p>
      <p className="text-lg mb-4 mt-4">
      Mon - Fri: 11:00am - 10:30pm
      </p>
      </section>
    </div>
  );
};

export default Contact;
