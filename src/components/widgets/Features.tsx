import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Features = ({ id, header, items, columns = 3, hasBackground = false, className = '' }: FeaturesProps) => {
  let bgColor = className;
  let iconColorClass = 'text-white bg-primary-900';
  let iconSvgClass = 'text-white';
  
  if (!className) {
    if (id === 'features-four-on-about') {
      bgColor = 'bg-custom-blue-medium';
    } else if (id === 'features-three-on-about') {
      bgColor = 'bg-custom-blue-dark';
      iconColorClass = 'text-white bg-custom-blue-light';
      iconSvgClass = '[color:#E8E8E8]';
    } else if (id === 'features-accepted-materials') {
      bgColor = 'bg-custom-blue-medium';
      iconColorClass = 'text-white [background-color:#0A61C9]';
      iconSvgClass = '[color:#E8E8E8]';
    } else if (hasBackground) {
      bgColor = 'bg-custom-blue-light';
    }
  }

  return (
    <section className={bgColor}>
      <WidgetWrapper id={id ? id : ''} hasBackground={false} containerClass="scroll-mt-16 max-w-6xl px-6">
        {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
        <ItemGrid
          id={id}
          items={items}
          columns={columns}
          defaultColumns={2}
          containerClass={`pb-8 ${columns === 2 ? 'max-w-5xl' : ''}`}
          panelClass={`flex max-w-full ${columns === 2 ? 'sm:max-w-md mx-auto' : ''}`}
          iconClass={`h-12 w-12 flex items-center justify-center rounded-md ${iconColorClass} p-3 md:p-4 mt-2 mb-5 mr-5 rtl:ml-5 rtl:mr-0 ${iconSvgClass}`}
          titleClass="mb-4 text-xl font-bold"
          descriptionClass="text-gray-600 dark:text-slate-400"
          actionClass="justify-start"
        />
      </WidgetWrapper>
    </section>
  );
};

export default Features;
