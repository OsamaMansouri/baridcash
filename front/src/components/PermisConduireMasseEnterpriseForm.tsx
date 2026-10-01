import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  civility: z.string().min(1, 'Civilité est obligatoire'),
  lastName: z.string().min(1, 'Nom est obligatoire'),
  firstName: z.string().min(1, 'Prénom est obligatoire'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(1, 'Numéro de téléphone est obligatoire'),
  object: z.string().min(1, 'Objet est obligatoire'),
  city: z.string().optional(),
  message: z.string().min(1, 'Message est obligatoire'),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'Vous devez accepter les conditions générales'
  })
});

type FormData = z.infer<typeof formSchema>;

const PermisConduireMasseEnterpriseForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      civility: '',
      lastName: '',
      firstName: '',
      email: '',
      phone: '',
      object: '',
      city: '',
      message: '',
      acceptTerms: false
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-barid-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Contactez-nous
            </h2>
            <div className="w-24 h-1 bg-barid-orange mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              Remplissez le formulaire ci-dessous pour plus d'informations sur notre service de renouvellement en masse.
            </p>
          </div>

          <div className={`bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Civilité */}
                <FormField
                  control={form.control}
                  name="civility"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-gray-900">Civilité *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mme" id="mme" />
                            <label htmlFor="mme" className="text-base">Mme</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mr" id="mr" />
                            <label htmlFor="mr" className="text-base">Mr</label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-gray-900">Nom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-gray-900">Prénom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre prénom" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email et Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-gray-900">Adresse Mail *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="votre@email.com" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-gray-900">Numéro de Téléphone *</FormLabel>
                        <FormControl>
                          <Input placeholder="06 XX XX XX XX" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Objet et Ville */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="object"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-gray-900">Objet *</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Sélectionnez un objet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="devenir-partenaire">Devenir partenaire</SelectItem>
                              <SelectItem value="questionnement">Questionnement</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-gray-900">Ville</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre ville" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-gray-900">Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Votre message..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Conditions générales */}
                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-base">
                          J'accepte les conditions générales de confidentialité *
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit button */}
                <div className="text-center pt-6">
                  <Button 
                    type="submit" 
                    className="bg-barid-orange hover:bg-barid-orange/90 text-white px-12 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Soumettre
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermisConduireMasseEnterpriseForm;