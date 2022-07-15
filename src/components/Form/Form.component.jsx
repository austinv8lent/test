import React, { useEffect } from "react";
import Label from "../Text/Label.component";
import Button from "../Button/Button.component";

const Form = ({ formInputs, prevData, onSubmit, onCancel }) => {
  const [form, setForm] = React.useState({});

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      ...prevData,
    }));
  }, [prevData]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  if (!formInputs?.length) return null;

  return (
    <form onSubmit={(event) => onSubmit(event, form)}>
      {formInputs.map(({ defaultValue, formControl, label, name, options }) => {
        const FormControl = formControl;

        return (
          <div key={name} className="mb-3">
            <Label htmlFor={label}>{label}</Label>
            <FormControl
              id={name}
              name={name}
              value={form[name] || defaultValue}
              onChange={handleChange}
              {...options}
            />
          </div>
        );
      })}
      <Button btnStyle="secondary" className="mr-2" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" btnStyle="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
