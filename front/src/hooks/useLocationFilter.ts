
import { useState, useEffect, useMemo } from 'react';
import { Agency, getAvailableCitiesForService, getFilteredAgencies } from '@/data/agencies';

export const useLocationFilter = () => {
  const [service, setService] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  // Get available cities based on selected service
  const availableCities = useMemo(() => {
    return getAvailableCitiesForService(service);
  }, [service]);

  // Get filtered agencies
  const filteredAgencies = useMemo(() => {
    return getFilteredAgencies(service, city, location);
  }, [service, city, location]);

  // Reset city when service changes and current city is not available
  useEffect(() => {
    if (city && !availableCities.includes(city)) {
      setCity("");
    }
  }, [service, city, availableCities]);

  return {
    service,
    setService,
    city,
    setCity,
    location,
    setLocation,
    availableCities,
    filteredAgencies
  };
};
