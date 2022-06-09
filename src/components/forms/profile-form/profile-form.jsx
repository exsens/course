import { useForm } from "react-hook-form";
import Button from "../../common/button/button";

import c from "./profile-form.module.scss";

const ProfileForm = ({ fields, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form className={c.form} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => {
          if(field.title === 'lookingForAJob') {
            return (
              <label
              className={c.label}
              htmlFor={`${field.title}`}
              key={`${field.title}`}
            >
              <span className={c.span}>{field.title}</span>
              <input
                {...register(`${field.title}`)}
                defaultValue={field.info}
                id={`${field.title}`}
                className={c.input}
                type="checkbox"
              />
            </label>
            )
          }

          return (
            <label
              className={c.label}
              htmlFor={`${field.title}`}
              key={`${field.title}`}
            >
              <span className={c.span}>{field.title}</span>
              <input
                {...register(`${field.title}`)}
                defaultValue={field.info}
                id={`${field.title}`}
                className={c.input}
                type="text"
              />
            </label>
          );
        })}
        <Button>Save</Button>
      </form>
    </div>
  );
};

export default ProfileForm;
