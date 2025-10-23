/* COMPONENT: Trainers Section
 * Grid of trainer cards with modal details
 * PLACEHOLDER: Trainer data loaded from src/data/trainers.json
 */

import { useState } from "react";
import TrainerCard, { type Trainer } from "./trainers/TrainerCard";
import TrainerModal from "./trainers/TrainerModal";
import trainersData from "@/data/trainers.json";

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const trainers = trainersData as Trainer[];

  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Trainers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert coaches dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              onClick={() => setSelectedTrainer(trainer)}
            />
          ))}
        </div>

        <TrainerModal
          trainer={selectedTrainer}
          open={!!selectedTrainer}
          onClose={() => setSelectedTrainer(null)}
        />
      </div>
    </section>
  );
};

export default Trainers;
