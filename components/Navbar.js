export default function Navbar() {
  return (
    <div className="w-full flex justify-center items-center mb-4">
      <div className="navbar bg-base-300 rounded-2xl m-2">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">PeopleFinder</a>
        </div>
        <div className="flex-0 justify-center items-center">
          <a className="btn btn-ghost normal-case text-md italic">
            Aiman Arif (146824)
          </a>
        </div>
      </div>
    </div>
  );
}
