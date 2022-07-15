import FormInput from "../components/FormInput/FormInput.component";

export default [
  {
    label: "Front",
    name: "front",
    formControl: FormInput,
    defaultValue: "",
    options: {
      type: "text",
      placeholder: "Front of the card",
      required: true,
    },
  },
  {
    label: "Back",
    name: "back",
    formControl: FormInput,
    defaultValue: "",
    options: {
      type: "text",
      placeholder: "Back of the card",
      required: true,
    },
  },
];
