import { IoArrowForward } from "react-icons/io5";

export default function Button({ buttonText }) {
  return (
    <button
      id="navigate-button"
      class="flex items-center text-xl font-medium rounded-full "
    >
      {buttonText} {<IoArrowForward className="ml-2" />}
    </button>
  );
}
