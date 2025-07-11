/**
 * Privacy utilities for protecting owner and property information
 */

export interface AppointmentStatus {
  hasScheduledAppointment: boolean;
  appointmentConfirmed: boolean;
}

/**
 * Masks the owner's full name to protect privacy
 * @param fullName - The owner's full name
 * @param hasAppointment - Whether user has a confirmed appointment
 * @returns Masked name or full name if appointment exists
 */
export function maskOwnerName(
  fullName: string,
  hasAppointment: boolean = false,
): string {
  if (hasAppointment) {
    return fullName;
  }

  const names = fullName.trim().split(" ");
  if (names.length === 1) {
    return names[0].charAt(0) + "*****";
  }

  // Show first name and mask last name
  const firstName = names[0];
  const lastName = names[names.length - 1];
  const maskedLastName = lastName.charAt(0) + "*".repeat(lastName.length - 1);

  return `${firstName} ${maskedLastName}`;
}

/**
 * Masks the exact property address to protect privacy
 * @param fullAddress - The complete address
 * @param hasAppointment - Whether user has a confirmed appointment
 * @returns Masked address or full address if appointment exists
 */
export function maskPropertyAddress(
  fullAddress: string,
  hasAppointment: boolean = false,
): string {
  if (hasAppointment) {
    return fullAddress;
  }

  // Extract neighborhood and city, hide exact street and number
  const parts = fullAddress.split(",").map((part) => part.trim());

  if (parts.length >= 2) {
    // Return only neighborhood and city, hide street and number
    const neighborhood = parts[parts.length - 2];
    const city = parts[parts.length - 1];
    return `${neighborhood}, ${city}`;
  }

  // Fallback: mask the street number
  return fullAddress.replace(/\d+/g, "***");
}

/**
 * Gets the approximate location description for property cards
 * @param fullAddress - The complete address
 * @returns General area description
 */
export function getApproximateLocation(fullAddress: string): string {
  const parts = fullAddress.split(",").map((part) => part.trim());

  if (parts.length >= 2) {
    const neighborhood = parts[parts.length - 2];
    const city = parts[parts.length - 1];
    return `${neighborhood}, ${city}`;
  }

  return fullAddress;
}

/**
 * Checks if user has permission to view sensitive information
 * This would typically connect to your authentication and appointment system
 * @param propertyId - The property ID
 * @param userId - The current user ID
 * @returns Whether user can view sensitive info
 */
export function canViewSensitiveInfo(
  propertyId: string | number,
  userId?: string,
): AppointmentStatus {
  // Mock implementation - in real app, this would check your database
  // for confirmed appointments between user and property owner

  // For demo purposes, we'll simulate that no one has appointments yet
  return {
    hasScheduledAppointment: false,
    appointmentConfirmed: false,
  };
}

/**
 * Privacy notice component text
 */
export const PRIVACY_NOTICES = {
  ownerName:
    "Nome completo do proprietário será revelado após agendamento confirmado",
  exactAddress: "Endereço exato será revelado após agendamento confirmado",
  contactInfo:
    "Informações de contato serão disponibilizadas ap��s agendamento",
} as const;
