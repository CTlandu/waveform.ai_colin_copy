import { useNavigate } from "react-router-dom";

const FeaturedGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left Side - Premiere Information */}
      <div className="bg-primary-20/30 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-3xl font-bold text-white mb-4">Premiere</h2>
        
        <div className="bg-primary-40/20 rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="bg-primary-90 text-white p-4 rounded-lg text-center min-w-[120px]">
              <div className="text-3xl font-bold">25</div>
              <div className="text-xl font-bold">MAR</div>
              <div className="text-lg">2025</div>
              <div className="text-xl mt-2">5:30 PM</div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">WAVEFORM.AI</h3>
              <p className="text-white/90 mb-3">
                A demonstration of how music and physics work together to celebrate the transhumanist potential of welcoming AI onto the stage as a partner instead of merely as a tool.
              </p>
              <p className="text-primary-90 font-semibold">PBK Studio Theatre</p>
              <p className="text-white/80 text-sm">5:30 PM - 7:00 PM</p>
            </div>
          </div>
          
          <div className="border-t border-primary-50/30 pt-4 mt-4">
            <h4 className="text-xl font-semibold text-white mb-2">Artists</h4>
            <p className="text-white/90">
              Dr. Ran Yang, Dr. Benjamin Whiting, and (MELO) Melody Chua, with a team of six students
            </p>
            <p className="text-white/80 mt-4 text-sm">
              For FREE PREMIERE tickets, register online
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/premiere")}
            className="bg-primary-50 hover:bg-primary-60 text-white px-6 py-2 rounded-full transition-colors"
          >
            View Details →
          </button>
        </div>
      </div>

      {/* Right Side - Workshop Information */}
      <div className="bg-primary-20/30 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-3xl font-bold text-white mb-4">Workshops</h2>
        
        <div className="space-y-6">
          {/* Workshop 1 */}
          <div className="bg-primary-40/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Interactive Media Design: Meaning-making in Human-Machine Interaction
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-3">
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                Monday, March 24th
              </div>
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                11:00 AM & 1:00 PM
              </div>
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                Music Arts Center (Room 062)
              </div>
            </div>
            
            <p className="text-white/90 text-sm">
              This workshop, facilitated by (MELO) Melody Chua and Dr. Benjamin Whiting, takes a multifaceted look into interactive media design in both performance and installation settings, examining how choices in scenography, audiovisual design, and human-machine interaction can dramatically alter the resulting expression of a work.
            </p>
            
            <p className="text-primary-90 mt-2 text-sm">Free gifts!</p>
          </div>
          
          {/* Workshop 2 */}
          <div className="bg-primary-40/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              AI and Hardware Synthesis
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-3">
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                Tuesday, March 25th
              </div>
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                11:00 AM & 1:00 PM
              </div>
              <div className="bg-primary-50/30 px-3 py-1 rounded text-white text-sm">
                PBK Lobby
              </div>
            </div>
            
            <p className="text-white/90 text-sm">
              An engaging exploration into the technical and musical construction of an AI-powered analog/digital synthesizer. Connor Martin, Rahul Pamadi, Michael Campagna, and Finnur Oddsson-Cricco will guide the audience through a breakdown of the digital, analog, and AI elements of the waveform.ai project.
            </p>
            
            <p className="text-primary-90 mt-2 text-sm">Free gifts! Origami lessons and exclusive merch access!</p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/workshops")}
            className="bg-primary-50 hover:bg-primary-60 text-white px-6 py-2 rounded-full transition-colors"
          >
            View All Workshops →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGrid;