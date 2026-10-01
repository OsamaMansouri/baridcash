import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Upload } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFormSubmission } from "@/hooks/useFormSubmission";

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
  fonctionActuelle: z.string().min(1, {
    message: "La fonction actuelle est obligatoire",
  }),
  termsAccepted: z.literal(true, {
    invalid_type_error: "Vous devez accepter les conditions générales",
  }),
});

const NousRejoindreForm: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const { submitForm, isSubmitting } = useFormSubmission();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      civility: "Mme",
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      fonctionActuelle: "",
      termsAccepted: false as unknown as true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = {
      civility: values.civility,
      firstName: values.prenom,
      lastName: values.nom,
      email: values.email,
      phone: values.telephone,
      currentFunction: values.fonctionActuelle,
    };

    await submitForm(formData, {
      formType: "nous-rejoindre",
      onSuccess: () => {
        form.reset();
      },
    });
  }

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Fichier sélectionné:", file.name);
      // Handle file upload logic here
    }
  };

  return (
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Section Title */}
        <div
          className={`w-full mb-6 ${
            i18n.language === "ar" ? "text-right" : "text-left"
          }`}
        >
          <h2
            className="text-[#5A433D] text-4xl font-bold"
            lang={i18n.language}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("nousRejoindre.form.title")}
          </h2>
        </div>

        {/* Form */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Civility Radio Group */}
              <div>
                <FormField
                  control={form.control}
                  name="civility"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className={`flex gap-6 ${
                            i18n.language === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <div className="flex items-center space-x-3 bg-transparent border border-white/50 px-6 py-3 rounded-full">
                            <RadioGroupItem
                              value="Mme"
                              id="mme"
                              className="border-white text-white"
                            />
                            <FormLabel
                              htmlFor="mme"
                              className="text-white cursor-pointer text-lg"
                              lang={i18n.language}
                              style={{
                                direction:
                                  i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                              }}
                            >
                              {t("nousRejoindre.form.mrs")}
                            </FormLabel>
                          </div>
                          <div className="flex items-center space-x-3 bg-transparent border border-white/50 px-6 py-3 rounded-full">
                            <RadioGroupItem
                              value="Mr"
                              id="mr"
                              className="border-white text-white"
                            />
                            <FormLabel
                              htmlFor="mr"
                              className="text-white cursor-pointer text-lg"
                              lang={i18n.language}
                              style={{
                                direction:
                                  i18n.language === "ar" ? "rtl" : "ltr",
                                fontFamily:
                                  i18n.language === "ar"
                                    ? "Cairo, Arial, sans-serif"
                                    : "Inter, Arial, sans-serif",
                              }}
                            >
                              {t("nousRejoindre.form.mr")}
                            </FormLabel>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Name and First Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("nousRejoindre.form.lastName")}
                          className={`bg-transparent border border-white/50 text-white placeholder:text-white/70 h-14 rounded-full text-lg ${
                            i18n.language === "ar"
                              ? "text-right"
                              : "text-center"
                          }`}
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
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
                          placeholder={t("nousRejoindre.form.firstName")}
                          className={`bg-transparent border border-white/50 text-white placeholder:text-white/70 h-14 rounded-full text-lg ${
                            i18n.language === "ar"
                              ? "text-right"
                              : "text-center"
                          }`}
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t("nousRejoindre.form.email")}
                          className={`bg-transparent border border-white/50 text-white placeholder:text-white/70 h-14 rounded-full text-lg ${
                            i18n.language === "ar"
                              ? "text-right"
                              : "text-center"
                          }`}
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
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
                          placeholder={t("nousRejoindre.form.phone")}
                          className={`bg-transparent border border-white/50 text-white placeholder:text-white/70 h-14 rounded-full text-lg ${
                            i18n.language === "ar"
                              ? "text-right"
                              : "text-center"
                          }`}
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Current Function */}
              <FormField
                control={form.control}
                name="fonctionActuelle"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t("nousRejoindre.form.currentFunction")}
                        className={`bg-transparent border border-white/50 text-white placeholder:text-white/70 h-14 rounded-full text-lg ${
                          i18n.language === "ar" ? "text-right" : "text-center"
                        }`}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button and Upload Button */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#F27D30] hover:bg-[#E76D20] text-white font-bold py-4 px-6 rounded-full uppercase text-lg h-14 disabled:opacity-50"
                  lang={i18n.language}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("nousRejoindre.form.submit")}
                </Button>

                <Button
                  type="button"
                  onClick={handleFileUpload}
                  className="bg-[#F27D30] hover:bg-[#E76D20] text-white font-bold py-4 px-4 rounded-full h-14 w-14 flex items-center justify-center"
                  title={t("nousRejoindre.form.upload")}
                >
                  <Upload className="h-6 w-6" />
                </Button>

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className="hidden"
                />
              </div>

              {/* Terms Checkbox */}
              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem
                    className={`flex flex-row items-start space-x-3 space-y-0 ${
                      i18n.language === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-[#F27D30] data-[state=checked]:border-[#F27D30] border-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel
                        className="text-white text-sm"
                        lang={i18n.language}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                          textAlign: i18n.language === "ar" ? "right" : "left",
                        }}
                      >
                        {t("nousRejoindre.form.terms")}
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default NousRejoindreForm;
