import Section from "../BaseComponents/Section";

export default function AboutMe() {
  return (
    <Section name="about">
      <section id="about-me" className="section-wrapper">

        <h3 className="title md:ml-5">О себе</h3>

        <div className="flex flex-col md:flex-row gap-0 md:gap-5">
          <div className="block-rounded bg-main-gray-light w-full md:w-3/5 p-5 text-xl text-main-gray-dark">
            <p>
              Привет!
            </p>

            <p>
              Я Елена Олейникова,<br />
              дипломированный педагог и психолог, коуч и энерготерапевт.
            </p>

            <p>
              Более 500 часов консультационной практики. Помогаю клиентам преодолеть страхи, панические атаки, учу справляться с любыми ситуациями в жизни.
            </p>

            <p>
              Имею навыки и работаю в методе когнитивно-образной терапии, телесно-ориентированной терапии, коучинге и энерготерапии.
              Более 500 часов консультационной практики. Помогаю клиентам преодолеть страхи, панические атаки, учу
              справляться с любыми ситуациями в жизни.
            </p>

            <p>
              Имею навыки и работаю в методе когнитивно-образной терапии, телесно-ориентированной терапии, коучинге и
              энерготерапии.
            </p>
          </div>

          <div className="block-rounded w-full md:w-2/5">
            <picture>
              <img src="about-me.webp" className="block-rounded h-full object-cover" />
            </picture>
          </div>
        </div>

      </section>
    </Section>
  );
}