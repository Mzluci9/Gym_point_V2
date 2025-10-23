/* COMPONENT: Trainer Detail Modal
 * Shows full trainer profile in a modal
 * Props: trainer, open, onClose
 */

import { X, Mail, Phone, Instagram, Award, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Trainer } from "./TrainerCard";

interface TrainerModalProps {
  trainer: Trainer | null;
  open: boolean;
  onClose: () => void;
}

const TrainerModal = ({ trainer, open, onClose }: TrainerModalProps) => {
  if (!trainer) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{trainer.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Trainer Image or Initials with background image */}
          <div
            className="relative h-64 rounded-lg flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: trainer.backgroundImage ? `url(${trainer.backgroundImage})` : 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="text-center p-6">
              {trainer.image && trainer.image !== '' && trainer.image !== undefined && trainer.image !== null && !trainer.image.startsWith('PLACEHOLDER_TRAINER_IMAGE') ? (
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 mx-auto bg-primary/30 rounded-full flex items-center justify-center mb-4 text-4xl font-bold text-white">
                  {trainer.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">{trainer.title}</h3>
            <p className="text-muted-foreground">{trainer.bio}</p>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Award size={20} className="text-primary" />
              Specialties
            </h4>
            <div className="flex flex-wrap gap-2">
              {trainer.specialties.map((specialty, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm py-1">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Award size={20} className="text-primary" />
              Certifications
            </h4>
            <div className="flex flex-wrap gap-2">
              {trainer.certifications.map((cert, idx) => (
                <Badge key={idx} className="bg-primary text-secondary">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Calendar size={20} className="text-primary" />
              Availability
            </h4>
            <p className="text-muted-foreground">{trainer.availability}</p>
          </div>

          {/* Contact Actions */}
          <div className="pt-4 border-t flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1 bg-primary text-secondary hover:bg-primary/90">
              <a href={`tel:${trainer.phone}`}>
                <Phone size={18} className="mr-2" />
                Call {trainer.name.split(' ')[0]}
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={`mailto:${trainer.email}`}>
                <Mail size={18} className="mr-2" />
                Send Email
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a
                href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} className="mr-2" />
                Follow
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrainerModal;
