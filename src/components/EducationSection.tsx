import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    level: "Bachelor's Degree",
    institution: "Patan Multiple Campus",
    status: "Currently Pursuing",
    period: "Present",
    description: "Pursuing higher education while continuously developing frontend development skills.",
    isCurrent: true,
  },
  {
    level: "Grade 12 (+2)",
    institution: "Glacier International School",
    status: "Completed",
    period: "Completed",
    description: "Completed higher secondary education with focus on science and technology.",
    isCurrent: false,
  },
  {
    level: "Grade 10 (SEE)",
    institution: "Himalaya Higher Secondary School",
    status: "Completed",
    period: "Completed",
    description: "Completed Secondary Education Examination, building the foundation for further studies.",
    isCurrent: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Education
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              Academic <span className="gradient-text">Journey</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-px" />

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.level}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 md:mt-8 ring-4 ring-background">
                    {edu.isCurrent && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${edu.isCurrent ? "glow" : ""}`}>
                      {/* Status Badge */}
                      {edu.isCurrent && (
                        <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                          Currently Pursuing
                        </span>
                      )}

                      {/* Level */}
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {edu.level}
                        </h3>
                      </div>

                      {/* Institution */}
                      <p className="text-lg font-medium text-foreground/80 mb-2">
                        {edu.institution}
                      </p>

                      {/* Period */}
                      <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
