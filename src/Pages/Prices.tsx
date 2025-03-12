import Section from "../BaseComponents/Section";
import SignUp from "../BaseComponents/SignUp";

export default function Prices() {
  const priceLIst = [{
    name: 'Индивидуальная терапия',
    format: 'Онлайн-встреча',
    duration: '1 час',
    price: '30 евро'
  },
  {
    name: 'Энерготерапия',
    description: '(гармонизация состояния, скорая помощь)',
    format: 'Онлайн-встреча',
    duration: '1 час',
    price: '25 евро'
  },
  {
    name: 'Пакет из 3 консультаций',
    description: '(по 1 часу)',
    format: 'Онлайн-встреча',
    duration: '3 час',
    price: '75 евро'
  },
  {
    name: 'Пакет из 5 консультаций',
    description: '(по 1 часу)',
    format: 'Онлайн-встреча',
    duration: '5 час',
    price: '120 евро'
  },
  // {
  //   name: 'Пакет из 10 консультаций',
  //   description: '(по 1 часу)',
  //   format: 'Онлайн-встреча',
  //   duration: '10 час',
  //   price: '220 евро'
  // },
  {
    name: 'Наставничество',
    description: '(Ежедневная переписка в мессенджерах)',
    format: 'Онлайн-встреча',
    duration: '6-12 месяцев',
    price: '700-1400 евро'
  },
  {
    name: 'Групповой формат',
    description: 'Трансформационная группа Путь к себе (до 10 человек)',
    format: 'Онлайн-встреча',
    duration: '3-4 месяца (зависит от скорости группы)',
    price: '100 евро/мес'
  }
  ];

  return (
    <Section name="price">
      <section id="price" className="section-wrapper">

        <h3 className="title md:ml-5">Прайс</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 justify-center">
          {priceLIst.map((item, index) => (
            <div className="border-2 border-main-green rounded-3xl py-10 flex flex-col justify-evenly"
              key={index}
            >

              <h4 className="font-bold text-balance lg:text-xl text-main-black uppercase text-center">
                {item.name}
              </h4>

              <h6 className="px-5 text-center">
                {item.description}
              </h6>

              <div className="px-16 py-2">
                <div className="paragraph">
                  <h3 className="text-main-gray-dark">Формат:</h3>
                  <ul className="text-main-gray-dark list-disc ml-5">
                    <li>{item.format}</li>
                  </ul>
                </div>

                <div className="paragraph">
                  <h3 className="text-main-gray-dark">Длительность:</h3>
                  <ul className="text-main-gray-dark list-disc ml-5">
                    <li>{item.duration}</li>
                  </ul>
                </div>
              </div>

              <div className="text-3xl text-center text-main-black tracking-[.1em]">
                {item.price}
              </div>

              <div className="text-center mt-5 flex justify-center">
                <SignUp type="square" className="w-30" />
              </div>
            </div>
          ))}

        </div>

      </section >
    </Section>
  );
}