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
      
      <div className="mt-12 grid grid-cols-12 gap-8">
        {/* Left sidebar with tabs */}
        <div className="col-span-3">
          <div className="flex flex-col">
            {tabs?.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left transition-colors border-b border-solid border-slate-200 dark:border-slate-700 py-5 px-4 ${
                  activeTab === index
                    ? 'bg-white dark:bg-gray-900'
                    : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">{tab.link.label}</span>
                  {activeTab === index ? (
                    <IconMinus className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                  ) : (
                    <IconPlus className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right side with FAQ items */}
        <div className="col-span-9">
          <Collapse
            items={tabs ? tabs[activeTab].items : []}
            classCollapseItem="border-b border-solid border-slate-200 dark:border-slate-700 py-5"
            iconUp={<IconMinus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
            iconDown={<IconPlus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
          />
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default FAQs;
