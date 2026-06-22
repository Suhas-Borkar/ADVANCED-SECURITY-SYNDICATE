import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Calculator, HardDrive, Cpu, HelpCircle, 
  ArrowRight, Download, RefreshCw, Layers, ShieldCheck, CheckSquare 
} from "lucide-react";

export default function PerformanceView() {
  // Calculator States
  const [cameraCount, setCameraCount] = useState<number>(8);
  const [resolution, setResolution] = useState<string>("4mp"); // 1080p, 4mp, 8mp
  const [fps, setFps] = useState<number>(15); // 10, 15, 25, 30
  const [compression, setCompression] = useState<string>("h265p"); // h264, h255, h265p
  const [days, setDays] = useState<number>(30);
  const [recordingHours, setRecordingHours] = useState<number>(24);

  // Calculated Outputs
  const calculateStorage = () => {
    // Basic storage multiplier coefficients based on resolution (bitrate in Mbps)
    // 1080p -> 2 Mbps, 4MP -> 4 Mbps, 8MP (4K) -> 8 Mbps
    let baseBitrate = 4;
    if (resolution === "1085p") baseBitrate = 2;
    if (resolution === "4mp") baseBitrate = 4;
    if (resolution === "8mp") baseBitrate = 8;

    // Apply FPS factor (normalized to 15 fps base)
    const fpsFactor = fps / 15;
    let bitrate = baseBitrate * fpsFactor;

    // Apply compression factor
    // H.264 standard multiplier = 1.0
    // H.265 standard multiplier = 0.5
    // H.265+ premium smart coding multiplier = 0.3
    if (compression === "h264") bitrate *= 1.0;
    if (compression === "h265") bitrate *= 0.55;
    if (compression === "h265p") bitrate *= 0.32;

    // Compute Storage required in Gigabytes: (Bitrate in Mbps * 3600 sec * hours * days * cameras) / (8 bits * 1000)
    const totalGB = (bitrate * 1000 * 1000 * 3600 * recordingHours * days * cameraCount) / (8 * 1000 * 1000 * 1000);
    const totalTB = totalGB / 1000;

    return Math.max(0.1, parseFloat(totalTB.toFixed(2)));
  };

  const storageRequiredTB = calculateStorage();
  
  // Recommend specific model based on storage size
  const getSeagateRecommendation = (tb: number) => {
    if (tb <= 1) return { model: "Seagate SkyHawk Lite 1TB/2TB", code: "ST1000VX005", cache: "64MB Cache", rpm: "5900 RPM" };
    if (tb <= 4) return { model: "Seagate SkyHawk Surveillance 4TB", code: "ST4000VX016", cache: "256MB Cache", rpm: "5400 RPM" };
    if (tb <= 8) return { model: "Seagate SkyHawk Surveillance Dual-Pack 8TB", code: "ST8000VX004", cache: "256MB Cache", rpm: "7200 RPM" };
    return { model: "Seagate SkyHawk AI Professional 12TB/16TB", code: "ST16000VE002", cache: "256MB Cache", rpm: "7200 RPM Enterprise" };
  };

  const recommendation = getSeagateRecommendation(storageRequiredTB);

  // Generate downloadable Assessment report
  const handleDownloadReport = () => {
    const reportText = `----------------------------------------
ACGR INDIA - TECHNICAL CALCULATOR BULLETIN
SYSTEM PROJECT ESTIMATION REPORT
----------------------------------------
Project Profile: Surveillance Integration Assessment
Calculated Date: ${new Date().toLocaleDateString()}

ESTIMATION METRICS INPUTS:
- Camera Total Counts: ${cameraCount} Units
- Target Resolution: ${resolution.toUpperCase()} HD Quality
- Capturing FPS: ${fps} Frames Per Second
- Video Compression: ${compression === "h265p" ? "H.265+ Smart Coding" : compression === "h265" ? "H.265 Standard" : "H.264 Standard"}
- Storage Longevity: ${days} Active Recording Days
- Daily Recording Payload: ${recordingHours} Hours/Day

ESTIMATION METRICS OUTPUTS:
- Calculated Hard Drive Payload: ${storageRequiredTB} Terabytes (TB)
- Recommended Surveillance Drive Model: ${recommendation.model}
- Model Identifier: ${recommendation.code} (${recommendation.cache}, ${recommendation.rpm})

AUTHORIZED DISTRIBUTION CONTACT:
For bulk dealer billing, hardware contracts and immediate local dispatches:
• Email desk: sales@acgr.in
• Official Portal Support: info@acgr.in
• Quality Verified Seal: 100% Genuine Seagate SkyHawk Partner
----------------------------------------`;

    const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ACGR_Surveillance_Estimation_${cameraCount}_Cams.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Reset helper
  const handleReset = () => {
    setCameraCount(8);
    setResolution("4mp");
    setFps(15);
    setCompression("h265p");
    setDays(30);
    setRecordingHours(24);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Header Hero Panel */}
      <section className="bg-slate-900 py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-mesh opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-1 bg-white/10 px-3.5 py-1 rounded-full text-xs font-mono text-brand-300 uppercase">
            <Calculator className="w-3.5 h-3.5" />
            Channel Partner Utility Suite
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">
            Surveillance Storage Estimator
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-sm">
            Quickly calculate target storage sizes and find recommended Seagate SkyHawk modules. Prepared specifically in partnership with our registered local installers.
          </p>
        </div>
      </section>

      {/* 2. Interactive Calculator Body */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Inputs controls */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="flex items-center justify-between border-b pb-4 border-slate-100">
              <h3 className="font-display font-extrabold text-xl text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-brand-600" />
                Parameters Configurator
              </h3>
              <button 
                onClick={handleReset}
                className="text-xs font-mono text-slate-400 hover:text-brand-600 flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                RESET CONFIG
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Camera counts range */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-black text-slate-450 uppercase flex justify-between">
                  <span>Number of Cameras:</span>
                  <span className="text-brand-600 font-extrabold">{cameraCount} CH</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="128"
                  value={cameraCount}
                  onChange={(e) => setCameraCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-605"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>1 CH</span>
                  <span>64 CH</span>
                  <span>128 CH</span>
                </div>
              </div>

              {/* Day counts range */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-black text-slate-450 uppercase flex justify-between">
                  <span>Recording Days Limit:</span>
                  <span className="text-brand-600 font-extrabold">{days} Days</span>
                </label>
                <input
                  type="range"
                  min="7"
                  max="120"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-605"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>7 Days</span>
                  <span>60 Days</span>
                  <span>120 Days</span>
                </div>
              </div>

              {/* Resolution options */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-black text-slate-450 uppercase block">
                  CCTV Camera Resolution:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "1085p", label: "2MP / 1080p", desc: "Economy standard" },
                    { id: "4mp", label: "4MP Pro", desc: "Enterprise sharp" },
                    { id: "8mp", label: "8MP / 4K", desc: "Critical Ultra" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setResolution(item.id)}
                      className={`p-3 rounded-xl border font-sans text-left transition-all ${
                        resolution === item.id
                          ? "bg-brand-50 border-brand-500 shadow-sm"
                          : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <span className={`block text-xs font-bold ${resolution === item.id ? "text-brand-700" : "text-slate-800"}`}>
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5 block leading-tight">
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Codec parameters */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-black text-slate-450 uppercase block">
                  Video Compression Standard:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "h264", label: "H.264 Legacy", desc: "Normal size" },
                    { id: "h265", label: "H.265 Standard", desc: "Tighter fit" },
                    { id: "h265p", label: "H.265+ Smart AI", desc: "Saves up to 70%" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCompression(item.id)}
                      className={`p-3 rounded-xl border font-sans text-left transition-all ${
                        compression === item.id
                          ? "bg-brand-50 border-brand-500 shadow-sm"
                          : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <span className={`block text-xs font-bold ${compression === item.id ? "text-brand-700" : "text-slate-800"}`}>
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5 block leading-tight">
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Frames per second (FPS) parameters */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-black text-slate-450 uppercase block">
                  Capture Frame Rate (FPS):
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[10, 15, 25, 30].map((frame) => (
                    <button
                      key={frame}
                      onClick={() => setFps(frame)}
                      className={`py-2 rounded-lg font-mono text-xs font-bold transition-all border ${
                        fps === frame
                          ? "bg-brand-500 border-brand-505 text-white"
                          : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      {frame} FPS
                    </button>
                  ))}
                </div>
              </div>

              {/* Recording hours per day */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-black text-slate-450 uppercase block">
                  Daily Capture Hours:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 12, label: "12 Hours / Day", desc: "Office hours only" },
                    { id: 18, label: "18 Hours / Day", desc: "Extended standard" },
                    { id: 24, label: "24 Hours / Day", desc: "Continuous loop" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setRecordingHours(item.id)}
                      className={`p-3 rounded-xl border font-sans text-left transition-all ${
                        recordingHours === item.id
                          ? "bg-brand-50 border-brand-500 shadow-sm"
                          : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <span className={`block text-xs font-bold ${recordingHours === item.id ? "text-brand-700" : "text-slate-800"}`}>
                        {item.label}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5 block leading-tight">
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right panel: Calculated output & seagate diagnostics */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Result Badge Card */}
            <div className="bg-gradient-to-br from-brand-900 to-indigo-950 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-mesh opacity-10" />
              <span className="bg-white/10 text-brand-300 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-white/10">
                CALCULATED PAYLOAD
              </span>

              <div className="my-6">
                <span className="text-[11px] font-mono uppercase text-slate-400 block tracking-widest pl-1">
                  ESTIMATED SPACE REQUIRED:
                </span>
                <span className="font-mono text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {storageRequiredTB}
                </span>
                <span className="text-xl font-display font-medium text-brand-300 ml-1">
                  TB / Dry Weight
                </span>
              </div>

              <div className="p-4 bg-white/10 rounded-xl border border-white/10 text-xs font-sans text-slate-200">
                Based on continuous loop operations, smart H.265+ coding will save you roughly <span className="font-bold text-white uppercase font-mono">~72% of hard disk costs</span> compared to legacy H.264 systems.
              </div>
            </div>

            {/* Seagate Authorized Recommendation details */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b pb-4 border-slate-100">
                <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl border border-emerald-100">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Seagate Authorized Desk Recommendation:</span>
                  <h4 className="font-display font-black text-base text-slate-900">Surveillance Ready Drive</h4>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-450 block uppercase">RECOMMENDED UNIT MODEL:</span>
                  <p className="font-display font-extrabold text-base text-slate-900 mt-1">
                    {recommendation.model}
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">
                    Seagate code: {recommendation.code} • {recommendation.cache}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border rounded-xl flex gap-3 text-xs text-slate-600 leading-relaxed font-sans">
                  <Cpu className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>
                    Designed with <strong className="text-slate-800">ImagePerfect™ firmware</strong> for zero dropped video frames under 24/7 write-heavy multi-camera setups. Equipped with diagnostic SkyHawk Health Management tools.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleDownloadReport}
                  className="w-full py-4.5 bg-slate-900 hover:bg-brand-600 text-white font-display font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow"
                >
                  <Download className="w-4 h-4" />
                  Download Estimator Report Summary
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Common Guidelines for HD Camera Bitrates in NVRs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200 rounded-3xl mb-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase block">INSTALLERS DIRECTIVE</span>
            <h3 className="font-display font-black text-2xl text-slate-900 mt-1">
              Standard Bitrate Guideline references
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-655 font-sans leading-relaxed">
            <div className="p-5 bg-slate-50 border rounded-xl space-y-2">
              <strong className="block text-sm text-slate-900 font-display">2MP / 1080p</strong>
              <p>Analog HD uses ~2.0 Mbps on H.264 compression standards. Upgrading config to H.265+ smart stream drops bandwidth costs to ~512 kbps per stream line.</p>
            </div>
            <div className="p-5 bg-slate-50 border rounded-xl space-y-2">
              <strong className="block text-sm text-slate-900 font-display">4MP (2K Super HD)</strong>
              <p>Ideal standard resolution for commercial spaces. Direct stream requires ~4.0 Mbps. Smart AI compression compresses this down to ~1.0 Mbps beautifully.</p>
            </div>
            <div className="p-5 bg-slate-50 border rounded-xl space-y-2">
              <strong className="block text-sm text-slate-900 font-display">8MP / 4K Ultra HD</strong>
              <p>Requires heavy network payloads. Captures crisp visual detail up to ~8.0 Mbps standard stream. Requires customized H.265+ routers & switches to avoid delay.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
