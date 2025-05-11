export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full absolute border-4 border-gray-200"></div>
          <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-blue-500 border-t-transparent"></div>
        </div>
        <p className="text-gray-600 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
