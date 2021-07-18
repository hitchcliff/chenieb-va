import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="text-center flex justify-center items-center h-screen w-full">
      <div className="absolute flex flex-col">
        <span className="text-8xl text-white">Sorry, page not found.</span>
        <Link to="/" className="text-white mt-10 italic underline opacity-50 hover:opacity-100">
          Go back to home.
        </Link>
      </div>
    </div>
  );
}
