'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormProps } from '../../shared/types';

const Form = ({
  title,
  description,
  inputs,
  radioBtns,
  textarea,
  checkboxes,
  btn,
  btnPosition,
  containerClass,
  emailTo,
}: FormProps) => {
  const [inputValues, setInputValues] = useState({});
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [radioBtnValue, setRadioBtnValue] = useState('');
  const [textareaValues, setTextareaValues] = useState('');
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(checkboxes && checkboxes.length).fill(false));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Update the value of the entry fields
  const changeInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Update checked radio buttons
  const changeRadioBtnsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioBtnValue(event.target.value);
  };

  // Update the textarea value
  const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValues(event.target.value);
  };

  // Update checkbox radio buttons
  const changeCheckboxHandler = (index: number) => {
    setCheckedState((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.map(() => {
        newValues[index] = !checkedState[index];
      });
      return newValues;
    });
  };

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFileUpload(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      
      // Add regular form fields
      Object.entries(inputValues).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      formData.append('message', textareaValues);
      formData.append('emailTo', emailTo || 'metalkrft@gmail.com');
      
      // Add file if present
      if (fileUpload) {
        formData.append('cadFile', fileUpload);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      setInputValues({});
      setTextareaValues('');
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="contactForm" className={twMerge('', containerClass)} onSubmit={handleSubmit}>
      {title && <h2 className={`${description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      <div className="mb-6">
        {/* Inputs */}
        <div className="mx-0 mb-1 sm:mb-4">
          {inputs && inputs.map(({ type, label, name, autocomplete, placeholder, accept }, index) => (
            <div key={`item-input-${index}`} className="mx-0 mb-1 sm:mb-4">
              <label htmlFor={name} className="pb-1 text-xs uppercase tracking-wider">
                {label}
              </label>
              <input
                type={type}
                name={name}
                id={name}
                autoComplete={autocomplete}
                placeholder={placeholder}
                accept={accept}
                onChange={type === 'file' ? handleFileUpload : changeInputValueHandler}
                className="w-full rounded-md border border-gray-400 py-2 px-3 dark:border-gray-700 dark:bg-gray-700"
              />
            </div>
          ))}
        </div>

        {/* Textarea */}
        {textarea && (
          <div className="mx-0 mb-1 sm:mb-4">
            <label htmlFor={textarea.name} className="pb-1 text-xs uppercase tracking-wider">
              Message
            </label>
            <textarea
              id={textarea.name}
              name={textarea.name}
              cols={textarea.cols}
              rows={textarea.rows}
              value={textareaValues}
              onChange={changeTextareaHandler}
              placeholder={textarea.placeholder}
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <div className={`${btnPosition ? `text-${btnPosition}` : 'text-right'} mt-4`}>
          <button
            type={btn.type}
            className="btn btn-primary cursor-pointer rounded-md bg-primary-600 px-6 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : btn.title}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-4 text-center text-green-600">Message sent successfully!</div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-4 text-center text-red-600">Failed to send message. Please try again.</div>
        )}
      </div>
    </form>
  );
};

export default Form;
