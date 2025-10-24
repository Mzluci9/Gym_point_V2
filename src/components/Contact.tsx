/* COMPONENT: Contact Form
 * Contact form with trainer selection
 * PLACEHOLDER: Form submits to /api/contact (needs backend hook)
 */

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import trainersData from "@/data/trainers.json";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        message: formData.get('message') as string,
        trainer: formData.get('trainer') as string,
      };

      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your fitness journey? Let's talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required placeholder="Michael Zewdu" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="+251 932519982" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" required placeholder="gympoint@example.com" />
          </div>

          <div>
            <Label htmlFor="trainer">Preferred Trainer (Optional)</Label>
            <Select name="trainer">
              <SelectTrigger>
                <SelectValue placeholder="Select a trainer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">No Preference</SelectItem>
                {trainersData.map((trainer) => (
                  <SelectItem key={trainer.id} value={trainer.id}>
                    {trainer.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell us about your fitness goals..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-primary text-secondary hover:bg-primary/90"
          >
            <Send className="mr-2" size={20} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
