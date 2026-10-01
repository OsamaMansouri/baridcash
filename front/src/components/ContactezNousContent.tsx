import React from "react";
import { Phone, Mail, MessageCircle, HelpCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
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
import { useTranslation } from "react-i18next";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { getCitiesForDropdown } from "@/data/cities";

const formSchema = z.object({
  civility: z.enum(["Mme", "Mr"], {
    required_error: "Veuillez sélectionner une civilité",
  }),
  nom: z.string().min(1, {
    message: "Le nom est obligatoire",
  }),
  prenom: z.string().min(1, {
    message: "Le prénom est obligatoire",
  }),
  email: z
    .string()
    .email({
      message: "Adresse mail invalide",
    })
    .min(1, {
      message: "L'adresse mail est obligatoire",
    }),
  telephone: z.string().min(1, {
    message: "Le numéro de téléphone est obligatoire",
  }),
  objet: z.string().min(1, {
    message: "L'objet est obligatoire",
  }),
  ville: z.string().optional(),
  message: z.string().min(1, {
    message: "Le message est obligatoire",
  }),
  termsAccepted: z.literal(true, {
    invalid_type_error: "Vous devez accepter les conditions générales",
  }),
});

const ContactezNousContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const { submitForm, isSubmitting } = useFormSubmission();

  const form = useForm<z.infer<typeof formSchema>>({
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
      termsAccepted: false as unknown as true, // Fixes the TS2322 error by casting
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = {
      civility: values.civility,
      firstName: values.prenom,
      lastName: values.nom,
      email: values.email,
      phone: values.telephone,
      subject: values.objet,
      city: values.ville,
      message: values.message,
    };

    await submitForm(formData, {
      formType: "contact",
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <section id="contact-form" className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Contact Options */}

        {/* Support Hours */}

        {/* FAQ Link */}

        {/* Section Title */}
        <div className="w-full mb-6">
          <div
            className={`inline-block ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
          >
            <h2
              className="text-white text-4xl font-bold"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("contactezNous.form.title")}
            </h2>
            <div className="mt-2">
              <Separator className="w-20 bg-white h-1" />
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div
          className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px]"
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
          }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              {/* Civility Radio Group */}
              <div
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                <FormField
                  control={form.control}
                  name="civility"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <div
                        className={`flex items-center gap-2 ${
                          i18n.language === "ar" ? "flex-row-reverse" : ""
                        }`}
                        style={{
                          justifyContent:
                            i18n.language === "ar" ? "flex-end" : "flex-start",
                        }}
                      >
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className={`flex gap-4 ${
                            i18n.language === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          {i18n.language === "ar" ? (
                            <>
                              <div
                                className="flex items-center bg-[#5A433D] border border-white/30 px-4 py-2 rounded-[1.5rem]"
                                style={{
                                  flexDirection: "row-reverse",
                                  gap: "8px",
                                }}
                              >
                                <RadioGroupItem
                                  value="Mme"
                                  id="mme"
                                  className="text-white"
                                />
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  lang="ar"
                                  style={{
                                    direction: "rtl",
                                    fontFamily: "Cairo, Arial, sans-serif",
                                  }}
                                >
                                  {t("contactezNous.form.mrs")}
                                </FormLabel>
                              </div>
                              <div
                                className="flex items-center bg-[#5A433D] border border-white/30 px-4 py-2 rounded-[1.5rem]"
                                style={{
                                  flexDirection: "row-reverse",
                                  gap: "8px",
                                }}
                              >
                                <RadioGroupItem
                                  value="Mr"
                                  id="mr"
                                  className="text-white"
                                />
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  lang="ar"
                                  style={{
                                    direction: "rtl",
                                    fontFamily: "Cairo, Arial, sans-serif",
                                  }}
                                >
                                  {t("contactezNous.form.mr")}
                                </FormLabel>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center space-x-2 bg-[#5A433D] border border-white/30 px-4 py-2 rounded-[1.5rem]">
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  lang="fr"
                                  style={{
                                    direction: "ltr",
                                    fontFamily: "Inter, Arial, sans-serif",
                                  }}
                                >
                                  {t("contactezNous.form.mrs")}
                                </FormLabel>
                                <RadioGroupItem
                                  value="Mme"
                                  id="mme"
                                  className="text-white"
                                />
                              </div>
                              <div className="flex items-center space-x-2 bg-[#5A433D] border border-white/30 px-4 py-2 rounded-[1.5rem]">
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  lang="fr"
                                  style={{
                                    direction: "ltr",
                                    fontFamily: "Inter, Arial, sans-serif",
                                  }}
                                >
                                  {t("contactezNous.form.mr")}
                                </FormLabel>
                                <RadioGroupItem
                                  value="Mr"
                                  id="mr"
                                  className="text-white"
                                />
                              </div>
                            </>
                          )}
                        </RadioGroup>
                      </div>
                      <FormMessage
                        style={{
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      />
                    </FormItem>
                  )}
                />
              </div>

              {/* Name and First Name */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                  i18n.language === "ar" ? "md:grid-flow-col-dense" : ""
                }`}
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("contactezNous.placeholders.lastName")}
                          className="bg-[#5A433D] border border-white/30 text-white placeholder:text-white/70 h-12"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                            textAlign:
                              i18n.language === "ar" ? "right" : "left",
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        style={{
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="prenom"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("contactezNous.form.firstName")}
                          className="bg-[#5A433D] border border-white/30 text-white placeholder:text-white/70 h-12"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                            textAlign:
                              i18n.language === "ar" ? "right" : "left",
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        style={{
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email and Phone */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                  i18n.language === "ar" ? "md:grid-flow-col-dense" : ""
                }`}
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("contactezNous.form.email")}
                          className="bg-[#5A433D] border border-white/30 text-white placeholder:text-white/70 h-12"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                            textAlign:
                              i18n.language === "ar" ? "right" : "left",
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        style={{
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("contactezNous.form.phone")}
                          className="bg-[#5A433D] border border-white/30 text-white placeholder:text-white/70 h-12"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                            textAlign:
                              i18n.language === "ar" ? "right" : "left",
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        style={{
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      />
                    </FormItem>
                  )}
                />
              </div>

              {/* Object and City */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                  i18n.language === "ar" ? "md:grid-flow-col-dense" : ""
                }`}
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                <FormField
                  control={form.control}
                  name="objet"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger
                            className="bg-[#5A433D] border border-white/30 text-white h-12"
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              textAlign:
                                i18n.language === "ar" ? "right" : "left",
                            }}
                          >
                            <SelectValue
                              placeholder={t("contactezNous.form.subject")}
                              style={{
                                direction:
                                  i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                                textAlign:
                                  i18n.language === "ar" ? "right" : "left",
                              }}
                            />
                          </SelectTrigger>
                          <SelectContent
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                            }}
                          >
                            <SelectItem
                              value="info"
                              style={{
                                direction:
                                  i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                                textAlign:
                                  i18n.language === "ar" ? "right" : "left",
                              }}
                            >
                              {t("contactezNous.form.subjectOptions.info")}
                            </SelectItem>
                            <SelectItem
                              value="partnership"
                              style={{
                                direction:
                                  i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                                textAlign:
                                  i18n.language === "ar" ? "right" : "left",
                              }}
                            >
                              {t(
                                "contactezNous.form.subjectOptions.partnership"
                              )}
                            </SelectItem>
                            <SelectItem
                              value="complaint"
                              style={{
                                direction:
                                  i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                                textAlign:
                                  i18n.language === "ar" ? "right" : "left",
                              }}
                            >
                              {t("contactezNous.form.subjectOptions.complaint")}
                            </SelectItem>
                            <SelectItem
                              value="employment"
                              style={{
                                direction:
                                  i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                                textAlign:
                                  i18n.language === "ar" ? "right" : "left",
                              }}
                            >
                              {t(
                                "contactezNous.form.subjectOptions.employment"
                              )}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage
                        style={{
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ville"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            className="bg-[#5A433D] border border-white/30 text-white h-12"
                            style={{
                              direction: i18n.language === "ar" ? "rtl" : "ltr",
                              fontFamily:
                                i18n.language === "ar"
                                  ? "Cairo, Arial, sans-serif"
                                  : "Inter, Arial, sans-serif",
                            }}
                          >
                            <SelectValue
                              placeholder={t("contactezNous.form.city")}
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
                      <FormMessage
                        style={{
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message */}
              <div
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder={t("contactezNous.form.message")}
                          className="bg-[#5A433D] border border-white/30 text-white placeholder:text-white/70 min-h-[100px] resize-none rounded-[1.5rem]"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                            textAlign:
                              i18n.language === "ar" ? "right" : "left",
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage
                        style={{
                          textAlign: i18n.language === "ar" ? "right" : "left",
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                        }}
                      />
                    </FormItem>
                  )}
                />
              </div>

              {/* Terms Checkbox */}
              <div
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <>
                      {i18n.language === "ar" ? (
                        <FormItem
                          className="flex items-start space-y-0"
                          style={{
                            flexDirection: "row-reverse",
                            gap: "12px",
                            justifyContent: "flex-end",
                          }}
                        >
                          <div className="space-y-1 leading-none">
                            <FormLabel
                              className="text-white text-sm"
                              lang="ar"
                              style={{
                                direction: "rtl",
                                fontFamily: "Cairo, Arial, sans-serif",
                                textAlign: "right",
                              }}
                            >
                              {t("contactezNous.form.terms")}
                            </FormLabel>
                            <FormMessage
                              style={{
                                textAlign: "right",
                                direction: "rtl",
                              }}
                            />
                          </div>
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-[#F27D30] data-[state=checked]:border-[#F27D30]"
                            />
                          </FormControl>
                        </FormItem>
                      ) : (
                        <FormItem className="flex items-start space-y-0 space-x-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-[#F27D30] data-[state=checked]:border-[#F27D30]"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel
                              className="text-white text-sm"
                              lang="fr"
                              style={{
                                direction: "ltr",
                                fontFamily: "Inter, Arial, sans-serif",
                                textAlign: "left",
                              }}
                            >
                              {t("contactezNous.form.terms")}
                            </FormLabel>
                            <FormMessage
                              style={{
                                textAlign: "left",
                                direction: "ltr",
                              }}
                            />
                          </div>
                        </FormItem>
                      )}
                    </>
                  )}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F27D30] hover:bg-[#E76D20] text-white font-bold py-4 px-6 rounded-[1.5rem] uppercase disabled:opacity-50"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("contactezNous.form.submit")}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactezNousContent;
