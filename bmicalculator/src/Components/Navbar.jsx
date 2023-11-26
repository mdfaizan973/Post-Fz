export default function Navbar() {
  return (
    <div>
      <nav className="p-4 shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 fixed w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-2xl text-red-500 font-serif">Fz</span> BMI
            Calculator
          </div>
        </div>
      </nav>
    </div>
  );
}
