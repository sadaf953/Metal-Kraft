import { twMerge } from 'tailwind-merge';
import { Timeline as TimelineType } from '~/shared/types';

const Timeline = ({
  id,
  items,
  defaultIcon: DefaultIcon,
  containerClass,
  panelClass,
  iconClass: defaultIconClass,
  titleClass,
  descriptionClass,
}: TimelineType) => {
  return (
    <div className={twMerge('flex flex-col gap-8', containerClass)}>
      {items?.map(({ title, description, icon: Icon, iconClass: itemIconClass }, index) => (
        <div
          key={id ? `item-${id}-${index}` : `item-grid-${index}`}
          className={twMerge('flex items-start gap-4', panelClass)}
        >
          <div className="flex items-center justify-center">
            {Icon ? (
              <Icon className={twMerge('w-12 h-12 p-2 rounded-full border-2 bg-white dark:bg-slate-800', defaultIconClass, itemIconClass)} />
            ) : DefaultIcon ? (
              <DefaultIcon className={twMerge('w-12 h-12 p-2 rounded-full border-2 bg-white dark:bg-slate-800', defaultIconClass)} />
            ) : null}
          </div>

          <div className="flex-1">
            {title && (
              <h3 className={twMerge('text-xl font-bold text-gray-100 mb-2', titleClass)}>
                {title}
              </h3>
            )}
            {description && (
              <p className={twMerge('text-gray-300 text-sm', descriptionClass)}>
                {description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
