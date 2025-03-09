import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FeaturedGrid = () => {
  const navigate = useNavigate();

  return (
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
              <p className="text-primary-90 font-semibold text-lg">
                PBK Studio Theatre
              </p>
              <p className="text-white/80 text-sm">5:30 PM - 7:00 PM</p>
            </div>
          </div>

          <div className="border-t border-primary-50/30 pt-4 mt-4">
            <p className="text-white/90 text-2xl">
              Presented by ALL Waveform.ai{" "}
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
                Music Arts Center (Room 062)
              </div>
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                Session 1 : 11:00 AM
              </div>
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                Session 2 : 1:00 PM
              </div>
            </div>

            <p className="text-primary-90 mt-2 text-sm">Free gifts!</p>
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
                PBK Lobby
              </div>
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                Session 1 : 11:00 AM
              </div>
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                Session 2 : 1:00 PM
              </div>
            </div>

            <p className="text-primary-90 mt-2 text-sm">
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
  );
};

export default FeaturedGrid;
