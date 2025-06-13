import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="h-screen fixed inset-0 backdrop-blur-md bg-black/20 z-[999] flex justify-center items-center">
      <Spinner color="success"/>

    </div>
  );
};

export default Loading;