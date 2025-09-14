import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Page Not Found | CodeWave</title>
        <meta name="description" content="We couldn't find the page you were looking for" />
      </Helmet>

      <div className="min-h-[100vh] flex items-center justify-center px-4 py-24">
        <div
          className={`max-w-3xl w-full text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Glitch Effect for 404 */}
          <div className="relative mb-8">
            <h1
              className="text-[120px] sm:text-[180px] font-extrabold leading-none"
              style={{
                color: 'var(--accent-primary)',
                textShadow: '0 0 15px rgba(var(--accent-primary-rgb), 0.5)',
              }}
            >
              404
            </h1>

            {/* Decorative code elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
              <div className="absolute top-10 left-10 font-mono text-xs transform rotate-12 animate-pulse">
                {'const page = findPage(url);'}
              </div>
              <div className="absolute top-20 right-10 font-mono text-xs transform -rotate-6 animate-pulse" style={{ animationDelay: '0.5s' }}>
                {'if (!page) return <NotFound />;'}
              </div>
              <div className="absolute bottom-10 left-20 font-mono text-xs transform rotate-3 animate-pulse" style={{ animationDelay: '1s' }}>
                {'error.code === 404'}
              </div>
              <div className="absolute bottom-20 right-20 font-mono text-xs transform -rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}>
                {'router.navigate("/");'}
              </div>
            </div>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Page Not Found
          </h2>

          <p
            className="text-xl mb-10 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            The page you are looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="group px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                color: 'white',
                boxShadow: '0 10px 30px rgba(var(--accent-primary-rgb), 0.3)'
              }}
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group px-8 py-4 rounded-full font-semibold text-lg border-2 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                borderColor: 'var(--accent-primary)',
                color: 'var(--text-primary)',
                background: 'transparent'
              }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  background: `rgba(var(--accent-primary-rgb), ${Math.random() * 0.3 + 0.1})`,
                  boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(var(--accent-primary-rgb), 0.3)`,
                  animation: `pulse ${Math.random() * 4 + 3}s ease-in-out infinite alternate, float ${Math.random() * 10 + 10}s ease-in-out infinite`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
