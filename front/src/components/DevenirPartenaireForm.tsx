import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getCitiesForDropdown } from "@/data/cities";

const DevenirPartenaireForm: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const formSchema = z.object({
    civility: z.enum(["Mme", "Mr"], {
      required_error: t("forms.validation.civility"),
    }),
    nom: z.string().min(1, {
      message: t("forms.validation.lastName"),
    }),
    prenom: z.string().min(1, {
      message: t("forms.validation.firstName"),
    }),
    email: z
      .string()
      .email({
        message: t("forms.validation.email"),
      })
      .min(1, {
        message: t("forms.validation.emailRequired"),
      }),
    telephone: z.string().min(1, {
      message: t("forms.validation.phone"),
    }),
    objet: z.string().min(1, {
      message: t("forms.validation.subject"),
    }),
    ville: z.string().optional(),
    message: z.string().min(1, {
      message: t("forms.validation.message"),
    }),
    termsAccepted: z.literal(true, {
      invalid_type_error: t("forms.validation.terms"),
    }),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      civility: "Mme",
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      objet: "",
      ville: "",
      message: "",
      termsAccepted: false as unknown as true,
    },
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

  function onSubmit(values: FormData) {
    console.log(values);
    // Handle form submission
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-barid-brown overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-barid-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("devenirPartenaireForm.title")}
            </h2>
            <div className="w-24 h-1 bg-barid-orange mx-auto mb-6"></div>
            <p className="text-white/90 text-lg">
              {t("devenirPartenaireForm.title")}
            </p>
          </div>

          {/* Form container */}
          <div
            className={`bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Civility */}
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <FormField
                    control={form.control}
                    name="civility"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel className="text-white text-lg font-medium">
                          {t("devenirPartenaireForm.labels.civility")}
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex gap-6"
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem
                                value="Mme"
                                id="mme"
                                className="border-white text-barid-orange"
                              />
                              <FormLabel
                                htmlFor="mme"
                                className="text-white cursor-pointer"
                              >
                                {t("devenirPartenaireForm.options.mrs")}
                              </FormLabel>
                            </div>
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem
                                value="Mr"
                                id="mr"
                                className="border-white text-barid-orange"
                              />
                              <FormLabel
                                htmlFor="mr"
                                className="text-white cursor-pointer"
                              >
                                {t("devenirPartenaireForm.options.mr")}
                              </FormLabel>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Name and First Name */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-lg font-medium">
                          {t("devenirPartenaireForm.labels.lastName")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 h-14 rounded-xl focus:border-barid-orange focus:ring-barid-orange/50"
                            placeholder={t(
                              "devenirPartenaireForm.placeholders.lastName"
                            )}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="prenom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-lg font-medium">
                          {t("devenirPartenaireForm.labels.firstName")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 h-14 rounded-xl focus:border-barid-orange focus:ring-barid-orange/50"
                            placeholder={t(
                              "devenirPartenaireForm.placeholders.firstName"
                            )}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email and Phone */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-lg font-medium">
                          {t("devenirPartenaireForm.labels.email")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 h-14 rounded-xl focus:border-barid-orange focus:ring-barid-orange/50"
                            placeholder={t(
                              "devenirPartenaireForm.placeholders.email"
                            )}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-lg font-medium">
                          {t("devenirPartenaireForm.labels.phone")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 h-14 rounded-xl focus:border-barid-orange focus:ring-barid-orange/50"
                            placeholder={t(
                              "devenirPartenaireForm.placeholders.phone"
                            )}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Object and Ville */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-600 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <FormField
                    control={form.control}
                    name="objet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-lg font-medium">
                          {t("devenirPartenaireForm.labels.subject")}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/30 text-white h-14 rounded-xl focus:border-barid-orange focus:ring-barid-orange/50">
                              <SelectValue
                                placeholder={t(
                                  "devenirPartenaireForm.placeholders.subject"
                                )}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="devenir-partenaire">
                              {t("devenirPartenaireForm.title")}
                            </SelectItem>
                            <SelectItem value="questionnement">
                              {t("permisConduireMasseForm.labels.questioning")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ville"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-lg font-medium">
                          {t("devenirPartenaireForm.labels.city")}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger
                              className="bg-white/10 border-white/30 text-white h-14 rounded-xl focus:border-barid-orange focus:ring-barid-orange/50"
                              style={{
                                direction: i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                              }}
                            >
                              <SelectValue
                                placeholder={t(
                                  "devenirPartenaireForm.placeholders.city"
                                )}
                              />
                            </SelectTrigger>
                            <SelectContent
                              className="max-h-[300px]"
                              style={{
                                direction: i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                              }}
                            >
                              {getCitiesForDropdown(
                                i18n.language === "ar" ? "ar" : "fr"
                              ).map((city) => (
                                <SelectItem
                                  key={city.value}
                                  value={city.value}
                                  className="cursor-pointer"
                                >
                                  {city.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <div
                  className={`transition-all duration-1000 delay-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-lg font-medium">
                          {t("devenirPartenaireForm.labels.message")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="bg-white/10 border-white/30 text-white placeholder:text-white/60 min-h-[150px] rounded-xl focus:border-barid-orange focus:ring-barid-orange/50 resize-none"
                            placeholder={t(
                              "devenirPartenaireForm.placeholders.message"
                            )}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Terms Checkbox */}
                <div
                  className={`transition-all duration-1000 delay-800 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-white data-[state=checked]:bg-barid-orange data-[state=checked]:border-barid-orange mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-white text-sm leading-relaxed">
                            *{t("forms.labels.terms")}
                          </FormLabel>
                          <FormMessage className="text-red-300" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div
                  className={`text-center transition-all duration-1000 delay-900 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <Button
                    type="submit"
                    className="bg-barid-orange hover:bg-barid-orange/90 text-white font-bold py-4 px-12 rounded-xl text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {t("devenirPartenaireForm.labels.submit")}
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

export default DevenirPartenaireForm;
