import Home from '@/pages/Home';
import Schedule from '@/pages/Schedule';
import Classes from '@/pages/Classes';
import Studio from '@/pages/Studio';
import Contact from '@/pages/Contact';
import { Dumbbell, Heart, Users } from 'lucide-react';
import type { ReactElement } from 'react';

interface RouterItem {
  title: string;
  href: string;
  element: ReactElement;
  showInNav: boolean;
}

export const routerItems: RouterItem[] = [
  { title: "Strona główna", href: "/", element: <Home />, showInNav: false },
  { title: "Grafik", href: "/grafik", element: <Schedule />, showInNav: false },
  { title: "Studio", href: "/studio", element: <Studio />, showInNav: true },
  { title: "Zajęcia", href: "/zajecia", element: <Classes />, showInNav: true },
  { title: "Kontakt", href: "/kontakt", element: <Contact />, showInNav: true }
]

export type ClassType = typeof classTypes[0];

export const classTypes = [
  {
    name: "Barre 🩵 mata",
    shortDescription: "Idealne połączenie dynamicznego barre przy drążku oraz klasycznego pilatesu na macie z użyciem małego sprzętu.",
    fullDescription: "Zajęcia barre 🩵 mata, idealne połączenie!\n\n🩵 Barre\nDynamiczne zajęcia będące fuzją pilatesu, baletu i fitnessu. Zajęcia odbywają się przy drążku baletowym, a ćwiczenia skupiają się na wysmuklaniu mięśni i budowaniu ich siły. Poprawiają stabilizację oraz wzmacnianie mięśni posturalnych.\n\n🩵 Mata\nZajęcia budują silny gorset mięśniowy, poprawiają postawę, uelastyczniają oraz uczą świadomego oddechu. Na zajęciach korzystamy z piłek, ciężarków, taśm, magic circle, aby urozmaicić zajęcia i pogłębić ruch.",
    duration: "50 min",
    icon: Heart,
    color: "bg-green-100 text-green-700",
    id: "barremata"
  },
  {
    name: "Reformer+",
    shortDescription: "Kameralne zajęcia (max. 3 osoby) z wykorzystaniem reformerów, krzeseł i spine correctorów. Pełna kontrola i precyzja.",
    fullDescription: "Grupa reformer+ to tylko trzy osoby!\n\nDlaczego \"+\"?\nZajęcia odbywają się nie tylko na reformerach, ale również krzesłach i spine correctorach. Pilates to nie tylko zestaw ćwiczeń, to przemyślany system, który Joseph Pilates nazwał pierwotnie Contrology. Opiera się on na założeniu, że umysł musi sprawować pełną kontrolę nad ciałem, aby każdy ruch był precyzyjny, świadomy i efektywny.",
    duration: "50 min",
    icon: Dumbbell,
    color: "bg-blue-100 text-blue-700",
    id: "reformer"
  },
  {
    name: "Zajęcia indywidualne",
    shortDescription: "Czas tylko dla Ciebie. Nauczyciel w pełni skoncentrowany na Twoich potrzebach z wykorzystaniem wszystkich maszyn w studio.",
    fullDescription: "Zajęcia indywidualne to czas tylko dla Ciebie.\n\nNauczyciel jest w pełni skoncentrowany na Twoich potrzebach. Wspólnie ustalimy cele, zwracając uwagę na aktualne i przyszłościowe potrzeby ciała, uwzględniając ewentualne ograniczenia zdrowotne.\n\nZajęcia odbywają się na reformerze, krześle, wieży, cadillacu, spine correctorze, beczce oraz z użyciem małego sprzętu. Wykorzystujemy jednym słowem wszystko, co może pomóc w osiągnięciu założonych celów 🩵",
    duration: "50 min",
    icon: Users,
    color: "bg-purple-100 text-purple-700",
    id: "indywidualne"
  },
];