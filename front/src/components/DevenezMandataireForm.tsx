import React from "react";
import { useTranslation } from "react-i18next";
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
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { getCitiesForDropdown } from "@/data/cities";

const DevenezMandataireForm: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const { submitForm, isSubmitting } = useFormSubmission();

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
    ville: z.string().min(1, {
      message: t("forms.validation.city"),
    }),
    hasLocal: z.enum(["Oui", "Non"], {
      required_error: t("devenezMandataireForm.labels.hasLocal"),
    }),
    coordonneesGPS: z.string(),
    adresseLocal: z.string(),
    termsAccepted: z.literal(true, {
      invalid_type_error: t("forms.validation.terms"),
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      civility: "Mme",
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      ville: "",
      hasLocal: "Non",
      coordonneesGPS: "",
      adresseLocal: "",
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
      city: values.ville,
      hasLocal: values.hasLocal === "Oui",
      gpsCoordinates: values.coordonneesGPS,
      localAddress: values.adresseLocal,
    };

    await submitForm(formData, {
      formType: "devenez-mandataire",
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Section Title */}
        <div
          className="w-full flex justify-start mb-6"
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            textAlign: i18n.language === "ar" ? "right" : "left",
          }}
        >
          <div
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            <h2
              className="text-[#5A433D] text-4xl font-bold"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("devenezMandataireForm.title")}
            </h2>
            <div className="mt-2">
              <Separator className="w-20 bg-[#5A433D] h-1" />
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              {/* Civility Radio Group */}
              <div>
                <FormField
                  control={form.control}
                  name="civility"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <div
                        className="flex items-center gap-2"
                        style={{
                          flexDirection:
                            i18n.language === "ar" ? "row-reverse" : "row",
                        }}
                      >
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-4"
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
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  style={{
                                    direction: "rtl",
                                    fontFamily: "Cairo, Arial, sans-serif",
                                  }}
                                >
                                  {t("devenezMandataireForm.labels.civility")}
                                </FormLabel>
                                <RadioGroupItem
                                  value="Mme"
                                  id="mme"
                                  className="text-white"
                                />
                              </div>
                              <div
                                className="flex items-center bg-[#5A433D] border border-white/30 px-4 py-2 rounded-[1.5rem]"
                                style={{
                                  flexDirection: "row-reverse",
                                  gap: "8px",
                                }}
                              >
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  style={{
                                    direction: "rtl",
                                    fontFamily: "Cairo, Arial, sans-serif",
                                  }}
                                >
                                  {t(
                                    "devenezMandataireForm.labels.civilityRequired"
                                  )}
                                </FormLabel>
                                <RadioGroupItem
                                  value="Mr"
                                  id="mr"
                                  className="text-white"
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center space-x-2 bg-[#5A433D] border border-white/30 px-4 py-2 rounded-[1.5rem]">
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  style={{
                                    direction: "ltr",
                                    fontFamily: "Inter, Arial, sans-serif",
                                  }}
                                >
                                  {t("forms.options.mrs")}
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
                                  style={{
                                    direction: "ltr",
                                    fontFamily: "Inter, Arial, sans-serif",
                                  }}
                                >
                                  {t("forms.options.mr")}
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
                          placeholder={t(
                            "devenezMandataireForm.placeholders.lastName"
                          )}
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
                          placeholder={t(
                            "devenezMandataireForm.placeholders.firstName"
                          )}
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
                          placeholder={t(
                            "devenezMandataireForm.placeholders.email"
                          )}
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
                          placeholder={t(
                            "devenezMandataireForm.placeholders.phone"
                          )}
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* City */}
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
                            placeholder={t(
                              "devenezMandataireForm.placeholders.city"
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Do you have a local? Radio Group */}
              <div>
                <FormField
                  control={form.control}
                  name="hasLocal"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <div
                        className="flex items-center gap-2"
                        style={{
                          flexDirection:
                            i18n.language === "ar" ? "row-reverse" : "row",
                        }}
                      >
                        <FormLabel
                          className="text-white"
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                            textAlign:
                              i18n.language === "ar" ? "right" : "left",
                          }}
                        >
                          {t("devenezMandataireForm.labels.hasLocal")}
                        </FormLabel>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-4"
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
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  style={{
                                    direction: "rtl",
                                    fontFamily: "Cairo, Arial, sans-serif",
                                  }}
                                >
                                  {t("devenezMandataireForm.options.no")}
                                </FormLabel>
                                <RadioGroupItem
                                  value="Non"
                                  id="non"
                                  className="text-white"
                                />
                              </div>
                              <div
                                className="flex items-center bg-[#5A433D] border border-white/30 px-4 py-2 rounded-[1.5rem]"
                                style={{
                                  flexDirection: "row-reverse",
                                  gap: "8px",
                                }}
                              >
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  style={{
                                    direction: "rtl",
                                    fontFamily: "Cairo, Arial, sans-serif",
                                  }}
                                >
                                  {t("devenezMandataireForm.options.yes")}
                                </FormLabel>
                                <RadioGroupItem
                                  value="Oui"
                                  id="oui"
                                  className="text-white"
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center space-x-2 bg-[#5A433D] border border-white/30 px-4 py-2 rounded-[1.5rem]">
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  style={{
                                    direction: "ltr",
                                    fontFamily: "Inter, Arial, sans-serif",
                                  }}
                                >
                                  {t("devenezMandataireForm.options.no")}
                                </FormLabel>
                                <RadioGroupItem
                                  value="Non"
                                  id="non"
                                  className="text-white"
                                />
                              </div>
                              <div className="flex items-center space-x-2 bg-[#5A433D] border border-white/30 px-4 py-2 rounded-[1.5rem]">
                                <FormLabel
                                  className="text-white cursor-pointer"
                                  style={{
                                    direction: "ltr",
                                    fontFamily: "Inter, Arial, sans-serif",
                                  }}
                                >
                                  {t("devenezMandataireForm.options.yes")}
                                </FormLabel>
                                <RadioGroupItem
                                  value="Oui"
                                  id="oui"
                                  className="text-white"
                                />
                              </div>
                            </>
                          )}
                        </RadioGroup>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* GPS Coordinates */}
              <FormField
                control={form.control}
                name="coordonneesGPS"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder={t(
                          "devenezMandataireForm.placeholders.gpsCoordinates"
                        )}
                        className="bg-[#5A433D] border border-white/30 text-white placeholder:text-white/70 h-12"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                          textAlign: i18n.language === "ar" ? "right" : "left",
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Local Address */}
              <FormField
                control={form.control}
                name="adresseLocal"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder={t(
                          "devenezMandataireForm.placeholders.localAddress"
                        )}
                        className="bg-[#5A433D] border border-white/30 text-white placeholder:text-white/70 min-h-[100px] resize-none rounded-[1.5rem]"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                          textAlign: i18n.language === "ar" ? "right" : "left",
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms Checkbox */}
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
                            style={{
                              direction: "rtl",
                              fontFamily: "Cairo, Arial, sans-serif",
                              textAlign: "right",
                            }}
                          >
                            {t("forms.labels.terms")}
                          </FormLabel>
                          <FormMessage />
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
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
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
                            style={{
                              direction: "ltr",
                              fontFamily: "Inter, Arial, sans-serif",
                            }}
                          >
                            {t("forms.labels.terms")}
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  </>
                )}
              />

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
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("devenezMandataireForm.labels.submit")}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default DevenezMandataireForm;
