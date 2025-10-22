export default function Card() {
  return (
    <div className="bg-gray-800/60 backdrop-blur-lg rounded-xl border border-gray-700 p-6 shadow-md w-full hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold mb-2 text-white">Card Title</h3>
      <p className="text-sm text-gray-400">Card description goes here.</p>
    </div>
  );
}
