import TgSvg from "../BaseComponents/svg/TgSvg";
import WhatsappSvg from "../BaseComponents/svg/WhatsappSvg";

export default function Contacts() {
  return (
    <ul className="flex flex-row gap-5">
      <li>
        <a href="https://t.me/elena_transformation" title="Свяжитесь со мной в telegram" target="_blank"><TgSvg /></a>
      </li>
      <li>
        <a href="https://api.whatsapp.com/send?phone=380677484875" title="Свяжитесь со мной в whatsapp" target="_blank"><WhatsappSvg /></a>
      </li>
    </ul>
  );
}