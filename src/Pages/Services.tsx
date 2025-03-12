import MentorSvg from "../BaseComponents/svg/MentorSvg";
import PathToYourselfSvg from "../BaseComponents/svg/PathToYourselfSvg";
import IndividualTherapySvg from "../BaseComponents/svg/IndividualTherapySvg";
import EnergyTherapySvg from "../BaseComponents/svg/EnergyTherapySvg";
import MeditationSvg from "../BaseComponents/svg/MeditationSvg";
import KotSvg from "../BaseComponents/svg/KotSvg copy";
import { Element } from "react-scroll";

export default function Services() {
  const itemList = [
    {
      title: 'Индивидуальная терапия',
      svg: IndividualTherapySvg,
    },
    {
      title: 'Энерготерапия',
      svg: EnergyTherapySvg,
    },
    {
      title: 'Наставничество',
      svg: MentorSvg,
    },
    {
      title: 'ТГ Путь к себе',
      svg: PathToYourselfSvg,
    },
    {
      title: 'КОТерапия',
      svg: KotSvg,
    },
    {
      title: 'Медитации',
      svg: MeditationSvg,
    }
  ];
  return (
    <Element name="services">
      <section id="services" className="section-wrapper">

        <h3 className="title md:mr-5 md:text-right">Направления</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 bg-main-gray-light block-rounded">

          {itemList.map(({ title, svg: SvgComponent }, index) => (
            <div key={index} className="service-block flex flex-col items-center justify-evenly py-16">
              <div><SvgComponent width={100} height={100} fill="white" /></div>
              <div className="font-bold mt-12 md:mt-12">{title}</div>
            </div>
          ))}
        </div>

      </section>
    </Element>
  );
}