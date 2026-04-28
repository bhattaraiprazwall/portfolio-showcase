import { Code2, Palette, Zap, Globe } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Flutter","React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend",
    icon: <Code2 className="w-6 h-6" />,
    items: ["ExpressJS","NodeJs","JavaScript","Firebase"],
  },
  {
    category: "Styling",
    icon: <Palette className="w-6 h-6" />,
    items: ["Tailwind CSS", "CSS3", "Responsive Design", "UI/UX"],
  },
  {
    category: "Tools",
    icon: <Zap className="w-6 h-6" />,
    items: ["Git", "VS Code", "Figma", "npm/yarn"],
  },
  {
    category: "Other",
    icon: <Globe className="w-6 h-6" />,
    items: ["REST APIs", "SEO", "Performance", "Accessibility"],
  },
];

const techStack = [
  { name: "Flutter", color: "from-cyan-400 to-blue-500" },
  { name: "NodeJS", color: "from-cyan-400 to-blue-500" },
  { name: "ExpressJs", color: "from-cyan-400 to-blue-500" },
  { name: "ReactJs", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", color: "from-gray-400 to-gray-600" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Skills & Technologies
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
          </div>

          {/* Main Tech Stack */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative text-center">
                  <span className="font-display text-xl font-semibold text-foreground">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
