import Section from "../BaseComponents/Section";

export default function Faq() {
  return (
    <Section name="faq">
      <section id="faq" className="section-wrapper min-h-fit">
        <h3 className="title text-center">Отвечаю на ваш вопросы</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5">
          {[
            'Как мне поможет психолог?',
            'Как я могу оплатить консультацию?',
            'Сколько сеансов мне понадобится?',
            'Как проходит первая сессия?'
          ].map((item, index) => (
            <div key={index} className="bg-main-gray-light p-5 rounded-xl flex flex-row items-center justify-between">
              <div className="text-lg">
                {item}
              </div>
              <div className="min-w-12 min-h-12 bg-white rounded-full text-3xl flex flex-row items-center justify-center cursor-pointer hover:text-main-green">
                +
              </div>
            </div>
          ))}
        </div>
      </section>
    </Section>
  )
};