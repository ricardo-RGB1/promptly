import "@styles/global.css";

export const metadata = {
  title: "Promptly",
  description: "A simple prompt generator for your next design project.",
};

const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        
        <main className="app">
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
