/**
 * Update this file when the hotel shares its verified information.
 * Do not publish placeholder contact details or unconfirmed facilities.
 */
export const hotel = {
  name: "Sree Venkatesh Residency",
  shortName: "Sree Venkatesh",
  town: "Ettayapuram",
  district: "Thoothukudi",
  state: "Tamil Nadu",
  country: "India",
  tagline: "A comfortable stay. A warm welcome.",
  description:
    "A welcoming place to stay in Ettayapuram. Contact the hotel directly for room availability and tariff details.",
  phoneDisplay: "+91 98654 34732",       // Hotel primary phone number
  phoneE164: "919865434732",          // Used by top-right call button
  whatsappNumber: "",                // WhatsApp disabled at hotel owner's request
  fullAddress: "",        // Add verified postal address
  mapEmbedUrl: "",
  mapDirectionsUrl: "https://share.google/jvqQCFJOdg51n4TjT",
  checkInTime: "12:00 PM",
  checkOutTime: "11:00 AM",
  ratePeriod: "per night",
  alternatePhoneDisplay: "+91 98436 73636",
  alternatePhoneE164: "919843673636",        // Optional: paste a Google Maps embed URL
  rooms: [
    {
      slug: "deluxe-ac-double",
      name: "Deluxe AC Double",
      shortDescription:
        "A double-room option with air conditioning. Call to confirm availability, occupancy and the final amount including taxes.",
      image: "/images/deluxe-ac-room-1.webp",
      tariff: "₹1,600 + taxes / night",
      amenities: [],       // Add only facilities confirmed by the hotel
    },
    {
      slug: "standard-single-non-ac",
      name: "Standard Single Non AC",
      shortDescription:
        "A budget-friendly single-room option. Call to confirm availability, occupancy and the final amount including taxes.",
      image: "/images/standard-room-placeholder.svg",
      tariff: "₹1,000 + taxes / night",
      amenities: [],
    },
  ],
  facilities: [],          // Add verified facilities: parking, Wi-Fi, hot water, etc.
  nearbyAttractions: [],   // Add verified attractions and distances, if desired
};

export function whatsappLink(message: string) {
  const number = hotel.whatsappNumber.replace(/\D/g, "");
  if (!number) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function phoneLink() {
  const number = hotel.phoneE164.replace(/\D/g, "");
  return number ? `tel:+${number}` : "";
}
