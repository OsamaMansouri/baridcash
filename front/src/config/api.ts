// API Configuration
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://baridcashapi.preprodagency.com";
//import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const API_ENDPOINTS = {
  HEALTH: `${API_BASE_URL}/api/health`,
  CONTACT: `${API_BASE_URL}/api/contact`,
  FORM_SUBMISSIONS: `${API_BASE_URL}/api/form-submissions`,
} as const;

export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(endpoint, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // For validation errors, show more details
      if (response.status === 422 && errorData.errors) {
        const validationErrors = Object.values(errorData.errors).flat();
        throw new Error(`Validation failed: ${validationErrors.join(", ")}`);
      }

      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};
