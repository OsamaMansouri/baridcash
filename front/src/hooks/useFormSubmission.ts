import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "./use-toast";
import { apiRequest, API_ENDPOINTS } from "../config/api";

interface FormSubmissionOptions {
  formType?: string;
  showSuccessMessage?: boolean;
  showErrorMessage?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { i18n } = useTranslation();
  const { toast } = useToast();

  const submitForm = async (data: any, options: FormSubmissionOptions = {}) => {
    const {
      formType = "contact",
      showSuccessMessage = true,
      showErrorMessage = true,
      onSuccess,
      onError,
    } = options;

    setIsSubmitting(true);

    try {
      const endpoint =
        formType === "contact"
          ? API_ENDPOINTS.CONTACT
          : API_ENDPOINTS.FORM_SUBMISSIONS;

      const payload =
        formType === "contact"
          ? data // Contact form sends data directly
          : {
              // Other forms wrap data in an object
              data: data,
              formType: formType,
            };

      const result = await apiRequest(endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (showSuccessMessage) {
        const successMessage =
          i18n.language === "ar"
            ? "تم إرسال النموذج بنجاح!"
            : "Formulaire envoyé avec succès!";

        toast({
          title: i18n.language === "ar" ? "نجح!" : "Succès!",
          description: successMessage,
          variant: "default",
        });
      }

      onSuccess?.(result);
      return result;
    } catch (error: any) {
      console.error("Form submission error:", error);

      if (showErrorMessage) {
        let errorMessage =
          i18n.language === "ar"
            ? "خطأ في إرسال النموذج"
            : "Erreur lors de l'envoi du formulaire";

        // Try to extract validation errors from the response
        if (error.message && error.message.includes("Validation failed")) {
          errorMessage =
            i18n.language === "ar"
              ? "يرجى التحقق من البيانات المدخلة"
              : "Veuillez vérifier les données saisies";
        }

        toast({
          title: i18n.language === "ar" ? "خطأ!" : "Erreur!",
          description: errorMessage,
          variant: "destructive",
        });
      }

      onError?.(error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
  };
};
