export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen">
    {children}
  </div>
);
