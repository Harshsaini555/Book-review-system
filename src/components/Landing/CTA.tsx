const ContactCTA = () => {
    return (
      <section className="relative mx-auto mt-10 w-full h-80 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-15 text-center bg-amber-100 backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Let’s Connect & Collaborate!
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Have questions or ideas? We’re excited to hear from you. Let’s start a conversation and create something meaningful.
        </p>
        <a
          href="/contactUs"
          className="mt-8 inline-block rounded-xl bg-amber-400 px-8 py-3 text-background font-semibold transition hover:scale-105 hover:bg-primary/90"
        >
          Contact Us
        </a>
  
        {/* Decorative Background Shapes */}
        <div className="absolute -top-5 -left-5 h-20 w-20 rounded-full bg-primary/20 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-secondary/20 blur-2xl"></div>
      </section>
    );
  };
  
  export default ContactCTA;
  