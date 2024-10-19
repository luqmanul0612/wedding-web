import Opening from "./assets/icons/opening.svg?react";
import Salam from "./assets/icons/salam.svg?react";
import Quote from "./assets/icons/quote.svg?react";
import Mempelai from "./assets/icons/mempelai.svg?react";
import Acara from "./assets/icons/acara.svg?react";
import Map from "./assets/icons/map.svg?react";
import Galery from "./assets/icons/galery.svg?react";
import Terimakasih from "./assets/icons/terimakasih.svg?react";
import Doa from "./assets/icons/doa.svg?react";
import RundownAcara from "./assets/icons/rundownacara.svg?react";
import Gift from "./assets/icons/gift.svg?react";
import {
  OpeningSlider,
  RundownSlider,
  Slider2,
  Slider3,
  Slider4,
  Slider5,
  Slider6,
  Slider7,
  Slider8,
  ThankyouSlider,
} from "./components/sliders";
import manPhoto from "./assets/images/man.jpg";
import womanPhoto from "./assets/images/woman.jpg";
import galery1 from "./assets/images/galery-1.jpg";
import galery2 from "./assets/images/galery-2.jpg";
import galery3 from "./assets/images/galery-3.jpg";
import galery4 from "./assets/images/galery-4.jpg";
import galery5 from "./assets/images/galery-5.jpg";
import galery6 from "./assets/images/galery-6.jpg";

export const config = {
  bride: {
    man: {
      fullName: "Ridho Imantiyar",
      name: "Ridho",
      desc: (
        <>
          Putra Bapak H. Aman Widjoyokusuma <br />
          dan Ibu Hj. Aminah
        </>
      ),
      instagram: "https://www.instagram.com/ridho.imantiyar/",
      photo: manPhoto,
    },
    woman: {
      fullName: "Seila Tazkiyah",
      name: "Seila",
      desc: (
        <>
          Putri Bapak H. Aman Widjoyokusuma <br />
          dan Ibu Hj. Aminah
        </>
      ),
      instagram: "https://www.instagram.com/seilatazkiyah/",
      photo: womanPhoto,
    },
  },
  greeting: {
    title: "Assalamu'alaikum Wr.Wb.",
    content:
      "Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/ Ibu/ Saudara/ I pada acara resepsi pernikahan kami.",
  },
  quote: {
    title: "Q.S. Ar Rum: 21",
    content:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
  },
  event: {
    weeding: {
      title: "Weedind Seila & Ridho",
      detail: "Join us to celebrate the wedding of Seila and Ridho!",
      startDate: "2024-11-14 08:00",
      endDate: "2024-11-14 17:00",
      location: "Kediman mempelai wanita Jl. Hasanuddin 1 No 1 Bekasi",
    },
    reception: {
      title: "Resepsi Seila & Ridho",
      detail: "Acara Resepsi Pernikahan Seila & Ridho",
      startDate: "2024-11-15 08:00",
      endDate: "2024-11-15 17:00",
      location: "Kediman mempelai wanita Jl. Hasanuddin 1 No 1 Bekasi",
    },
  },
  map: {
    link: "https://maps.app.goo.gl/QWh59omV8rFZ1tkD6",
    location: "Kediman mempelai wanita Jl. Hasanuddin 1 No 1 Bekasi",
  },
  galeries: [galery1, galery2, galery3, galery4, galery5, galery6],
  thankYou: (
    <>
      Merupakan suatu kebahagiaan dan kehormatan bagi kami, bila
      Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan doa restu kepada kedua
      mempelai.
      <br />
      <br />
      Hormat kami yang berbahagia
    </>
  ),
  sliderList: [
    {
      label: "Opening",
      icon: <Opening />,
      component: OpeningSlider,
    },
    {
      label: "Salam",
      icon: <Salam />,
      component: Slider2,
    },
    {
      label: "Quote",
      icon: <Quote />,
      component: Slider3,
    },
    {
      label: "Mempelai",
      icon: <Mempelai />,
      component: Slider4,
    },
    {
      label: "Acara",
      icon: <Acara />,
      component: Slider5,
    },
    {
      label: "Acara",
      icon: <Acara />,
      component: Slider6,
    },
    {
      label: "Map",
      icon: <Map />,
      component: Slider7,
    },
    {
      label: "Galeri",
      icon: <Galery />,
      component: Slider8,
    },
    {
      label: "Rundown Acara",
      icon: <RundownAcara />,
      component: RundownSlider,
    },
    {
      label: "Doa",
      icon: <Doa />,
      component: RundownSlider,
    },
    {
      label: "Gift",
      icon: <Gift />,
      component: RundownSlider,
    },
    {
      label: "Terimakasih",
      icon: <Terimakasih />,
      component: ThankyouSlider,
    },
  ],
};
