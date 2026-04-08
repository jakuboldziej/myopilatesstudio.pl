import Navbar from "@/components/Navbar";
import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  let errorMessage;
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="h-dvh flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center bg-background text-gray-800 text-center px-6">
        <h1 className="text-8xl font-cookie text-accent mb-4">Ups!</h1>

        <p className="text-2xl font-semibold mb-4">
          {isRouteErrorResponse(error) && error.status === 404
            ? "Nie znaleziono takiej strony."
            : "Niestety, coś poszło nie tak."}
        </p>

        <p className="text-gray-500 mb-8">
          <i>{errorMessage}</i>
        </p>

        <Link
          to="/"
          className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 text-white rounded-md font-semibold transition-colors"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}