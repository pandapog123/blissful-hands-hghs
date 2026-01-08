import IsabellaBrana from "$lib/assets/officers/webp/Isabella Brana.webp";
import AleeraJimenez from "$lib/assets/officers/webp/Aleera Jimenez.webp";
import DenisseFernandez from "$lib/assets/officers/webp/Denisse Fernandez.webp";
import CamillaRios from "$lib/assets/officers/webp/Camilla Rios.webp";
import SydneyCarr from "$lib/assets/officers/webp/Sydney Carr.webp";

import Yera from "$lib/assets/officers/webp/Yera.webp";

interface Officer {
  name: string;
  positionDescription: string;
  imgURL: string;
}

export function load() {
  let OFFICER_DATA: Officer[] = [
    {
      name: "Isabella Brana",
      positionDescription: "President",
      imgURL: IsabellaBrana,
    },
    {
      name: "Aleera Jimenez",
      positionDescription: "Vice President",
      imgURL: AleeraJimenez,
    },
    {
      name: "Denisse Fernandez",
      positionDescription: "Secretary",
      imgURL: DenisseFernandez,
    },
    {
      name: "Camilla Rios",
      positionDescription: "Treasurer",
      imgURL: CamillaRios,
    },
    {
      name: "Sydney Carr",
      positionDescription: "Historian",
      imgURL: SydneyCarr,
    },
    {
      name: "Mr. Yera",
      positionDescription: "Main Sponsor",
      imgURL: Yera,
    },
  ];

  // let SPONSORS_DATA: Officer[] = [
  // ];

  return {
    title: "About",
    description:
      "Meet the Blissful Hands leadership! Our officers are dedicated to supporting students, fostering community connections, and guiding our mission to help others through meaningful acts of service.",
    officerData: OFFICER_DATA,
    // sponsorsData: SPONSORS_DATA,
  };
}

export const prerender = true;
