import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-center items-center px-3 space-y-3 sm:mb-0 mb-3 mx-auto">
      <div className="text-white-500">
        Lọ mọ bởi{" "}
        <a
          href="https://www.linkedin.com/in/danducvu/"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-red-500 hover:underline transition underline-offset-2"
        >
          DanVu{" "}
        </a>
        ghé thăm{" "}
        <a
          href="https://github.com/danvufs"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-red-500 hover:underline transition underline-offset-2"
        >
          GitHub {""}
        </a>
        và trải nghiệm{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.dancargame.test"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-red-500 hover:underline transition underline-offset-2"
        >
          Dan Car Game
        </a>
        <br />
        <span className="text-center">Đặc biệt cảm ơn{" "}
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="font-bold text-red-500 hover:underline transition underline-offset-2"
        >
          Hassan Mghari
        </a></span>
      </div>
    </footer>
  );
}
