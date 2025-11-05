/* COMPONENT: About Section
 * Brief gym story and mission
 * PLACEHOLDER: Edit text content directly below
 */

import { Award, Target, Users } from "lucide-react";

const About = () => {
  // PLACEHOLDER: Modify about content here
  const stats = [
    { icon: Users, label: "Active Members", value: "2,000+" },
    { icon: Award, label: "Certified Trainers", value: "10+" },
    { icon: Target, label: "Success Stories", value: "5000+" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Gym Point?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {/* PLACEHOLDER: Edit mission statement */}
           Founded in 2016, Gym Point has become a leading fitness hub for thousands of members committed to personal transformation. We offer top-tier facilities, professional coaching, and a motivating community designed to help you achieve lasting results.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {/* PLACEHOLDER: Edit value proposition */}
            Whether you’re starting your fitness journey or striving to reach new performance levels, our team delivers the guidance, accountability, and motivation you need. Your goals are our mission.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 bg-muted rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
