import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      <div className="noise-overlay" />
      <div className="text-center z-10">
        <h1 className="font-display text-9xl text-outline mb-4">404</h1>
        <span className="eyebrow mb-6 block">PAGINA NON TROVATA</span>
        <p className="text-secondary-foreground font-light mb-10 max-w-md mx-auto">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <button
          onClick={() => navigate("/")}
          className="font-condensed font-bold uppercase tracking-[0.2em] text-sm bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors"
        >
          Torna alla Home →
        </button>
      </div>
    </div>
  );
};

export default NotFound;
