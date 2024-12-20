import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { CallToActionType, LinkOrButton } from '~/shared/types';

const CTA = ({ callToAction, containerClass, linkClass, iconClass }: LinkOrButton) => {
  const { text, href, icon: Icon, targetBlank, btnType } = callToAction as CallToActionType;

  const getLinkClass = () => {
    const baseClass = 'inline-flex items-center justify-center w-full sm:mb-0';
    const btnClass = btnType === 'primary' ? 'btn-primary' : btnType === 'secondary' ? 'btn-secondary' : '';
    return twMerge(baseClass, btnClass, linkClass);
  };

  return (
    <>
      {href && (text || Icon) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
          {targetBlank ? (
            <Link
              className={getLinkClass()}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
              {text}
            </Link>
          ) : (
            <Link className={getLinkClass()} href={href}>
              {Icon && <Icon className={twMerge(`w-5 h-5 ${text ? 'mr-1 rtl:mr-0 rtl:ml-1' : ''}`, iconClass)} />}
              {text}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CTA;
