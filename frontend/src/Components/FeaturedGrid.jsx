import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FeaturedGrid = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Eye-catching banner for free tickets and gifts */}
      <div className="relative mb-8 overflow-hidden">
        <div className="bg-gradient-to-r from-primary-70 via-primary-90 to-primary-70 text-white text-center py-3 px-4 transform -rotate-1 shadow-lg">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-50 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-60 rounded-full opacity-50 animate-pulse"></div>
          <div className="relative">
            <span className="absolute -left-1 top-1/2 transform -translate-y-1/2 -rotate-12 text-4xl text-primary-40">
              ★
            </span>
            <span className="absolute -right-1 top-1/2 transform -translate-y-1/2 rotate-12 text-4xl text-primary-40">
              ★
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider animate-pulse">
              🎁 FREE Tickets & Gifts for all events!! 🎁
            </h2>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform rotate-45"></div>
        </div>
        <div className="absolute -bottom-3 left-0 right-0 h-6 bg-gradient-to-r from-primary-70 via-primary-90 to-primary-70 transform rotate-1 z-[-1]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side - Premiere Information */}
        <div className="bg-primary-20/30 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Grand Premiere!
          </h2>

          <div className="bg-primary-40/20 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <div className="bg-primary-90 text-white p-4 rounded-lg text-center min-w-[120px]">
                <div className="text-3xl font-bold">25</div>
                <div className="text-xl font-bold">MAR</div>
                <div className="text-lg">2025</div>
                <div className="text-xl mt-2">5:30 PM</div>
              </div>

              <div className="flex-1">
                <p className="text-white/90 mb-3 text-lg">
                  A demonstration of how music and physics work together to
                  celebrate the transhumanist potential of welcoming AI onto the
                  stage as a partner instead of merely as a tool.
                </p>
                <p className="text-primary-90 font-semibold text-lg flex items-center gap-1">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=PBK+Studio+Theatre+William+and+Mary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    PBK Studio Theatre
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </a>
                </p>
                <p className="text-white/80 text-sm">5:30 PM - 7:00 PM</p>
              </div>
            </div>

            <div className="border-t border-primary-50/30 pt-4 mt-4">
              <p className="text-white/90 text-2xl">
                Presented by all Waveform.ai{" "}
                <Link
                  to="/team"
                  className="text-primary-90 hover:text-white transition-colors"
                >
                  Team members
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/premiere")}
              className="bg-primary-50 hover:bg-primary-60 text-white px-8 py-3 rounded-full transition-colors text-lg font-medium"
            >
              Free Tickets & Details →
            </button>
          </div>
        </div>

        {/* Right Side - Workshop Information */}
        <div className="bg-primary-20/30 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Workshops
          </h2>

          <div className="space-y-6">
            {/* Workshop 1 */}
            <div className="bg-primary-40/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="inline-flex items-center justify-center min-w-[24px] min-h-[24px] w-6 h-6 bg-primary-90 rounded-full text-white text-sm font-bold flex-shrink-0">
                  1
                </span>
                <Link
                  to="/workshops"
                  className="ttext-white hover:text-primary-90 transition-colors"
                >
                  Interactive Media Design: Meaning-making in Human-Machine
                  Interaction
                </Link>
              </h3>

              <div className="flex flex-wrap gap-3 mb-3">
                <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm flex items-center gap-1 border border-primary-90/50 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-90 animate-pulse"></span>
                  Monday, March 24th
                </div>
                <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Music+Arts+Center+Room+062+William+and+Mary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    Music Arts Center (Room 062)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                  Session 1 : 11:00 AM
                </div>
                <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                  Session 2 : 1:00 PM
                </div>
              </div>

              <p className="text-primary-90 mt-2 text-lg">Free gifts!</p>
            </div>

            {/* Workshop 2 */}
            <div className="bg-primary-40/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="inline-flex items-center justify-center min-w-[24px] min-h-[24px] w-6 h-6 bg-primary-90 rounded-full text-white text-sm font-bold flex-shrink-0">
                  2
                </span>
                <Link
                  to="/workshops"
                  className="text-white hover:text-primary-90 transition-colors"
                >
                  AI and Hardware Synthesis
                </Link>
              </h3>

              <div className="flex flex-wrap gap-3 mb-3">
                <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm flex items-center gap-1 border border-primary-90/50 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-90 animate-pulse"></span>
                  Tuesday, March 25th
                </div>
                <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=PBK+Lobby+William+and+Mary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    PBK Lobby
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                  Session 1 : 11:00 AM
                </div>
                <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                  Session 2 : 1:00 PM
                </div>
              </div>

              <p className="text-primary-90 mt-2 text-lg">
                Free gifts! Origami lessons and exclusive merch access!
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/workshops")}
              className="bg-primary-50 hover:bg-primary-60 text-white px-8 py-3 rounded-full transition-colors text-lg font-medium"
            >
              Tickets & All Workshops →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGrid;
