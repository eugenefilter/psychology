import { Link } from "react-scroll";

export default function Menu({ className, onClose, isHeader = false }: {
  className?: string,
  onClose?: () => void,
  isHeader?: boolean,
}) {
  const itemList = [
    {
      title: 'О себе',
      link: 'about'
    },
    {
      title: 'Направления',
      link: 'services'
    },
    {
      title: 'Прайс',
      link: 'price'
    },
    {
      title: 'Отзывы',
      link: 'review'
    },
    // {
    //   title: 'FAQ',
    //   link: 'faq'
    // },
    // {
    //   title: 'Контакты',
    //   link: 'contact'
    // },
    {
      title: 'Обратная связь',
      link: 'form'
    }
  ];

  return (
    <ul className={className}>
      {itemList.map(({ title, link }, index) => (
        <li key={index} className={`${isHeader ? " py-8" : ""} md:py-0`}>
          <Link
            className="hover:underline cursor-pointer"
            to={link}
            spy={true}
            smooth={true}
            duration={1}
            onClick={onClose}
          >
            {title}
          </Link>
        </li>
      ))
      }
    </ul >
  );
}