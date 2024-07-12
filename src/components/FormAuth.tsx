import { FC } from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import Link from 'next/link';
import { Auth } from '@/types/auth';

type FormAuthProps = {
  submitTitle: string;
  handleSubmit: (authData: Auth) => void;
};

const FormAuth: FC<FormAuthProps> = ({ submitTitle, handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        return errors;
      }}
      onSubmit={(values: Auth, { setSubmitting }: FormikHelpers<Auth>) => {
        setTimeout(() => {
          handleSubmit({ email: values.email, password: values.password });
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">
              Email address
            </label>

            <div className="mt-2">
              <Field
                name="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage name="email" component="div" className="text-red-600" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">
                Password
              </label>
              <div className="text-sm">
                <Link href={'/forgot'} className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="mt-2">
              <Field
                name="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage name="password" component="div" className="text-red-600" />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {submitTitle}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormAuth;
