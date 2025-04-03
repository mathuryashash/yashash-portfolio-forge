
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { SocialIcons } from '@/components/SocialIcons';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">Get in Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-royal-100 dark:bg-royal-900 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-royal-600 dark:text-royal-400" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">yashashmathur2005@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-royal-100 dark:bg-royal-900 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-royal-600 dark:text-royal-400" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Bangalore, Karnataka</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-royal-100 dark:bg-royal-900 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-royal-600 dark:text-royal-400" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 6366728955</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Connect with me</h4>
              <SocialIcons iconSize={24} />
            </div>
          </div>
          
          <Card className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Your email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5} 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={loading} 
                className="w-full bg-royal-600 hover:bg-royal-700 text-white"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
