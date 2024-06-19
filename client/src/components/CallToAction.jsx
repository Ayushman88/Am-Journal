import { Button } from "flowbite-react";

const CallToActionButton = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-purple-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center p-10">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about Coding?</h2>
        <p className="text-gray-500 my-2">
          Checkout my instagram acount where you can watch interactive coding
          videos
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.instagram.com/am.ascript/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: am.ascript
          </a>
        </Button>
      </div>
      <div className="p-10 flex-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLhaUgHDi9uDzIONETXSigMfkLXDQAi913g&s"
          alt="JavaScript"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default CallToActionButton;
