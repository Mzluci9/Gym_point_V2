/* COMPONENT: Trainer Card
 * Individual trainer card with click to view details
 * Props: trainer (Trainer object)
 */

import { Mail, Phone, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Trainer {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  phone: string;
  email: string;
  image: string;
  backgroundImage?: string;
  instagram: string;
  availability: string;
}

interface TrainerCardProps {
  trainer: Trainer;
  onClick: () => void;
}

const TrainerCard = ({ trainer, onClick }: TrainerCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary overflow-hidden"
    >
      {/* Trainer image or initials with background image */}
      <div
        className="relative h-64 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: trainer.backgroundImage ? `url(${trainer.backgroundImage})` : 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center p-6 z-10">
          {trainer.image && trainer.image !== '' && trainer.image !== undefined && trainer.image !== null && !trainer.image.startsWith('PLACEHOLDER_TRAINER_IMAGE') ? (
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-32 h-32 mx-auto bg-primary/30 rounded-full flex items-center justify-center mb-4 text-4xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {trainer.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <CardHeader>
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{trainer.name}</h3>
        <p className="text-muted-foreground">{trainer.title}</p>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {trainer.specialties.slice(0, 3).map((specialty, idx) => (
            <Badge key={idx} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <a
            href={`tel:${trainer.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone size={16} />
            <span>{trainer.phone}</span>
          </a>
          <a
            href={`mailto:${trainer.email}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={16} />
            <span>{trainer.email}</span>
          </a>
          <a
            href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Instagram size={16} />
            <span>{trainer.instagram}</span>
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-4 pt-4 border-t">
          <strong>Available:</strong> {trainer.availability}
        </p>
      </CardContent>
    </Card>
  );
};

export default TrainerCard;
export type { Trainer };
