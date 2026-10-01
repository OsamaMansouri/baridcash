import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  civility: z.enum(["Mme", "Mr"], {
    required_error: "Veuillez sélectionner une civilité"
  }),
  nom: z.string().min(1, {
    message: "Le nom est obligatoire"
  }),
  prenom: z.string().min(1, {
    message: "Le prénom est obligatoire"
  }),
  email: z.string().email({
    message: "Adresse mail invalide"
  }).min(1, {
    message: "L'adresse mail est obligatoire"
  }),
  telephone: z.string().min(1, {
    message: "Le numéro de téléphone est obligatoire"
  }),
  message: z.string().min(1, {
    message: "Le message est obligatoire"
  }),
  termsAccepted: z.literal(true, {
    invalid_type_error: "Vous devez accepter les conditions générales"
  })
});

const EntrepriseContactForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const fieldsRef = useRef<(HTMLDivElement | null)[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      civility: "Mme",
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      message: "",
      termsAccepted: false as unknown as true
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    fieldsRef.current.forEach((field) => {
      if (field) observer.observe(field);
    });

    return () => observer.disconnect();
  }, []);
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }
  
  return (
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Section Title */}
        <div className="w-full text-left mb-6">
          <h2 className="text-barid-brown text-4xl font-bold">Formulaire</h2>
          <div className="flex justify-start mt-2">
            <Separator className="w-20 bg-barid-brown h-1" />
          </div>
        </div>
        
        {/* Form */}
        <div className="rounded-[1.5rem] bg-barid-brown p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px]" ref={formRef}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Civility Radio Group */}
              <div ref={(el) => fieldsRef.current[0] = el} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <FormField control={form.control} name="civility" render={({field}) => (
                  <FormItem className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FormLabel className="text-white">Civilité :</FormLabel>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                        <div className="flex items-center space-x-2 bg-barid-brown border border-white/30 px-4 py-2 rounded-[1.5rem]">
                          <FormLabel className="text-white cursor-pointer">Mme</FormLabel>
                          <RadioGroupItem value="Mme" id="mme" className="text-white" />
                        </div>
                        <div className="flex items-center space-x-2 bg-barid-brown border border-white/30 px-4 py-2 rounded-[1.5rem]">
                          <FormLabel className="text-white cursor-pointer">Mr</FormLabel>
                          <RadioGroupItem value="Mr" id="mr" className="text-white" />
                        </div>
                      </RadioGroup>
                    </div>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* Name and First Name */}
              <div ref={(el) => fieldsRef.current[1] = el} className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <FormField control={form.control} name="nom" render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nom (*)" className="bg-transparent border border-white/30 text-white placeholder:text-white/70 h-14 text-center rounded-[1.5rem]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                
                <FormField control={form.control} name="prenom" render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Prénom (*)" className="bg-transparent border border-white/30 text-white placeholder:text-white/70 h-14 text-center rounded-[1.5rem]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              
              {/* Email and Phone */}
              <div ref={(el) => fieldsRef.current[2] = el} className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <FormField control={form.control} name="email" render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Adresse Mail (*)" className="bg-transparent border border-white/30 text-white placeholder:text-white/70 h-14 text-center rounded-[1.5rem]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                
                <FormField control={form.control} name="telephone" render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Numéro de Téléphone (*)" className="bg-transparent border border-white/30 text-white placeholder:text-white/70 h-14 text-center rounded-[1.5rem]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
               
              {/* Message */}
              <div ref={(el) => fieldsRef.current[3] = el} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <FormField control={form.control} name="message" render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Message (*)" className="bg-transparent border border-white/30 text-white placeholder:text-white/70 min-h-[120px] resize-none rounded-[1.5rem]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              
              {/* Terms Checkbox */}
              <div ref={(el) => fieldsRef.current[4] = el} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <FormField control={form.control} name="termsAccepted" render={({field}) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-barid-orange data-[state=checked]:border-barid-orange" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white text-sm">
                        <a href="#" className="underline">Conditions générales de confidentialités</a>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )} />
              </div>
              
              {/* Submit Button */}
              <div ref={(el) => fieldsRef.current[5] = el} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <Button type="submit" className="w-full bg-barid-orange hover:bg-barid-orange/90 text-white font-bold py-4 px-6 rounded-[1.5rem] uppercase">
                  SOUMETTRE
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default EntrepriseContactForm;