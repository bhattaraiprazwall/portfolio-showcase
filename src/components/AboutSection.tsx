const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">
              Passionate about creating
              <span className="gradient-text"> digital experiences</span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Image/Avatar Area */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden glow">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-xl -z-10 blur-xl" />
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Frontend Developer with a keen eye for design and a love for 
                creating seamless user experiences. Currently pursuing my Bachelor's degree, 
                I'm constantly learning and exploring new technologies to stay at the forefront 
                of web development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in web development started with curiosity and has evolved into a 
                deep passion for crafting clean, efficient, and visually appealing web applications. 
                I specialize in modern frontend technologies and enjoy turning complex problems 
                into simple, beautiful solutions.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-3xl font-display font-bold gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground">Years Learning</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
