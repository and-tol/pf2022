import { SubmitHandler, useForm } from 'react-hook-form';
import cn from 'classnames';
import emailjs from '@emailjs/browser'
import { FormProps } from './Form.props';
import { IFormInputs, Input } from './Form.types';
import styles from './Form.module.scss'
import { Button } from '..';

export const Form = ({ ...props }: FormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    const templateParams = {
      from_name: data.name,
      subject: data.subject,
      from_email: '',
      message: data.text,
    };

  emailjs
    .send(
      `${process.env.NEXT_PUBLIC_EMAILJS_COM_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_EMAILJS_COM_TEMPLATE_ID}`,
      templateParams,
      `${process.env.NEXT_PUBLIC_EMAILJS_COM_USER_ID}`
    )
    .then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (err) {
        console.error('FAILED...', err);
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="form"
      {...props}
      className={styles.form}
    >
      <h4 className={cn(styles.title, 'formTitle')}>Email</h4>

      <div className={styles.inputContainer}>
        <label htmlFor={Input.Name} className={styles.label}>
          Your Name
        </label>
        <input
          {...register(Input.Name, { required: true })}
          id={Input.Name}
          type="text"
          className={styles.input}
        />
        {errors.name && (
          <span className={cn('error', styles.formError)}>
            Name is required
          </span>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor={Input.Subject} className={styles.label}>
          Subject
        </label>
        <input
          {...register(Input.Subject, {
            required: true,
            minLength: 5,
            maxLength: 30,
          })}
          id={Input.Subject}
          type="text"
          className={styles.input}
        />
        {errors.subject && (
          <span className={cn('error', styles.formError)}>
            Subject is required'
          </span>
        )}
      </div>

      <div className={styles.text}>
        <label htmlFor={Input.Text} className={styles.label}>
          Say Hello!
        </label>
        <textarea
          {...register(Input.Text, {
            required: true,
            minLength: 5,
            maxLength: 250,
          })}
          id={Input.Text}
          className={styles.input}
        ></textarea>
        {errors.subject && (
          <span className={cn('error', styles.formError)}>
            Text is required
          </span>
        )}
      </div>
      <Button type="submit" appearance="ghost" className={styles.submit}>
        Send Now
      </Button>
    </form>
  );
};
