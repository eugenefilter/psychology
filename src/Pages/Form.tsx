
import {useRef, useState} from "react";
import Section from "../BaseComponents/Section";
import {send} from "../utils/SendEmail";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);

  const [formSentSuccess, setFormSentSuccess] = useState(false);
  const [formSentFali, setFormSentFali] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const request = await send(form);

    if (request) {
      setFormSentSuccess(true);
      form.current?.reset();
    } else {
      setFormSentFali(true);
    }
  };

  return (
    <Section name="form">
      <section id="form" className="section-wrapper bg-main-khaki md:bg-white mb-0">
        <div className="flex flex-row gap-4 p-5">
          <div className="grow bg-main-khaki block-rounded pt-10">
            <h3 className="title text-center m-auto w-full">Оставьте заявку</h3>

            <h4 className="text-xl text-justify text-main-black px-5 py-10 md:px-20">
              Если вы готовы начать работу, заполните форму и я с вами свяжусь
            </h4>

            <form className="text-center" ref={form} onSubmit={handleSubmit}>
              <input type="text" name="name" required placeholder="Ваше имя"/>
              <input type="phone" name="phone" required placeholder="Ваш телефон"/>
              <input type="email" name="email" required placeholder="Ваш email"/>
              <textarea name="question" required placeholder="Ваш запрос"/>

              {formSentFali && (
                <p>
                  <b className="text-red-600 uppercase font-bold">Произошла ошибка. Ваш запрос не удалось отправить.</b>
                </p>
              )}

              {formSentSuccess && (
                <p>
                  <b className="text-main-green uppercase font-bold">Ваш запрос отправлен. Я скоро с вами свяжусь.</b>
                </p>
              )}

              <button
                type="submit"
                className="button-square border-white bg-white rounded-full text-main-black h-20 px-10 uppercase my-10"
              >
                отправить заявку
              </button>
            </form>
          </div>

          <div className="hidden lg:block lg:w-1/3">
            <img src="form.jpg" className="w-full h-full block-rounded object-cover"/>
          </div>
        </div>
      </section>
    </Section>
  )
}