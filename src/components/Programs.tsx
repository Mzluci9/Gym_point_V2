/* COMPONENT: Programs Section
 * Showcases gym programs/offerings
 * PLACEHOLDER: Modify programs array to change offerings
 */

import { Dumbbell, Heart, Users, Laptop } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  // PLACEHOLDER: Edit programs here
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle, increase power, and transform your physique with progressive overload and expert guidance.",
    },
    {
      icon: Heart,
      title: "Cardio & Conditioning",
      description: "Boost endurance, burn fat, and improve heart health with HIIT, boxing, and functional training.",
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Join energizing group sessions including yoga, spin, CrossFit-style workouts, and more.",
    },
    {
      icon: Laptop,
      title: "Online Coaching",
      description: "Get personalized training programs and nutrition guidance accessible anywhere, anytime.",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whatever your fitness goals, we have the perfect program to get you there
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="text-primary group-hover:text-secondary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
