import { footerData } from '~/shared/data/global.data';

const Footer = () => {
  const { title, links, columns, socials, footNote } = footerData;

  return (
    <footer className="relative border-t border-gray-200 dark:border-slate-800 bg-gray-50 md:bg-gray-50/90 md:backdrop-blur-sm px-4 ">
      <div className="relative mx-auto max-w-7xl px-4 text-[#112745] sm:px-6">
        <div className="grid grid-cols-12 gap-4 gap-y-8 py-8 sm:gap-8 md:py-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-2">
              <a className="inline-block text-xl font-bold text-[#112745]" href="/">
                {title}
              </a>
            </div>
            <div className="text-[#112745] text-sm">
              <ul className="mb-4 flex pr-2 rtl:pr-0 rtl:pl-2 md:order-1 md:mb-0">
                {links &&
                  links.map(({ label, href }, index) => (
                    <li key={`item-link-${index}`}>
                      <a
                        className="duration-150 ease-in-out placeholder:transition hover:text-gray-700 hover:underline text-[#112745]"
                        aria-label={label}
                        href={href}
                      >
                        {label}
                      </a>
                      {links.length - 1 !== index && <span className="mr-1 rtl:mr-0 rtl:ml-1"> · </span>}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {columns.map(({ title, links }, index) => (
            <div key={`item-column-${index}`} className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="mb-2 font-medium text-[#112745]">{title}</div>
              <ul className="text-sm">
                {links &&
                  links.map(({ label, href }, index2) => (
                    <li key={`item-column-link-${index2}`} className="mb-2">
                      <a
                        className="text-[#112745] transition duration-150 ease-in-out hover:text-gray-700 hover:underline"
                        aria-label={label}
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          {socials && (
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <div className="mb-2 font-medium text-[#112745]">Social</div>
              <ul className="text-sm">
                {socials.map(({ label, href, icon: Icon }, index) => (
                  <li key={`item-social-link-${index}`} className="mb-2">
                    <a
                      className="text-[#112745] transition duration-150 ease-in-out hover:text-gray-700 hover:underline"
                      aria-label={label}
                      href={href}
                    >
                      <div className="flex items-center">
                        <Icon className="h-5 w-5 mr-2" />
                        {label}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="py-6 text-sm text-[#112745] border-t border-gray-200">
          {footNote}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
