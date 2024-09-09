import { PACKS } from "../components/PackSelection";

export default function getPackName(pack: PACKS): string {
  switch (pack) {
    case 0: return "Au travail";
    case 1: return "Vivre ensemble";
    case 2: return "Vie citadine";
    case 3: return "Chiens et chats";
    case 4: return "Saison";
    case 5: return "Heure de gloire";
    case 6: return "Iles paradisiaques";
    case 7: return "À la fac";
    case 8: return "Écologie";
    case 9: return "Escapade enneigée";
    case 10: return "Vie à la campagne";
    case 11: return "Années lycée";
    case 12: return "Grandir ensemble";
    case 13: return "Vie au ranch";
    case 14: return "À louer";
    case 15: return "Amour fou";
    default: return "";
  }
}
