import { IoArrowForward } from "react-icons/io5";

export default function Button({ buttonText }) {
  return (
    <button
      id="navigate-button"
      class="flex items-center border-[3px] text-xl font-medium rounded-full px-8 py-2"
    >
      {buttonText} {<IoArrowForward className="ml-2" />}
    </button>
  );
}
