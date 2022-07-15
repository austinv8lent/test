import FormInput from "../components/FormInput/FormInput.component";
import TextArea from "../components/TextArea/TextArea.component";

export default [
  {
    label: "Name",
    name: "name",
    formControl: FormInput,
    defaultValue: "",
    options: {
      type: "text",
      placeholder: "Deck Name",
      required: true,
    },
  },
  {
    label: "Description",
    name: "description",
    formControl: TextArea,
    defaultValue: "",
    options: {
      placeholder: "Brief description of the deck",
      required: true,
      rows: 3,
    },
  },
];
