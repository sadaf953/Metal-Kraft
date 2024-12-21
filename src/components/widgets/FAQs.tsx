'use client';

import { useState } from 'react';
import { FAQsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import Collapse from '../common/Collapse';
import { IconMinus, IconPlus } from '@tabler/icons-react';

const FAQs = ({ header, tabs, id, hasBackground = false }: FAQsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-7xl">
      {header && <Headline header={header} titleClass="text-3xl sm:text-4xl" />}
      
      <div className="mt-12 flex flex-col gap-8 px-6">
        {/* Top navigation tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs?.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg transition-colors ${
                activeTab === index
                  ? 'bg-[#112745] text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-[#112745]'
              }`}
            >
              <span className="text-base font-medium whitespace-nowrap">{tab.link.label}</span>
            </button>
          ))}
        </div>

        {/* FAQ items */}
        <div className="w-full max-w-3xl mx-auto">
          <Collapse
            items={tabs ? tabs[activeTab].items : []}
            classCollapseItem="border-b border-solid border-slate-200 dark:border-slate-700 py-5"
          />
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default FAQs;
