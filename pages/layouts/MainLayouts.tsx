import Footer from '@components/footer/Footer';
import Header from '@components/headers/Header';

const MainLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        <main className="max-w-7xl mx-auto">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayouts;
