import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, ArrowRight, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        "service_shariff",      // 🔹 service_id
        "template_shariff",     // 🔹 template_id
        templateParams,
        "5_jhMGMxLRokRT_YK"       // 🔹 Public_ID
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's work <br /> together.
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Have a project in mind? I'm always open to discussing new opportunities.
          </p>

          <div className="space-y-6">
            <a href="mailto:shariffumar2003@gmail.com" className="flex items-center gap-4">
              <Mail /> shariffumar2003@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/umarshariff24/" target="_blank" className="flex items-center gap-4">
              <Linkedin /> Umar Shariff
            </a>
            <a href="https://www.instagram.com/umarshariff.24" target="_blank" className="flex items-center gap-4">
              <Instagram /> @umarshariff.24
            </a>
            <div className="flex items-center gap-4">
              <Phone /> +91 63618 74057
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-2xl border"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-primary text-white font-bold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
