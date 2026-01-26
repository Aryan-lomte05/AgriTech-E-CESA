"use client";

import React, { useState, useEffect } from "react";

const ProblemStatements = () => {
  /* ===================== TEAM DATA ===================== */
  const teamData = [
    { id: 1, name: "MADTech", status: "Shortlisted" },
    { id: 2, name: "HackHers", status: "Shortlisted" },
    { id: 3, name: "SLAYERS", status: "Shortlisted" },
    { id: 4, name: "INVINCIBLE", status: "Shortlisted" },
    { id: 5, name: "Team Rudrastra", status: "Shortlisted" },
    { id: 6, name: "Spaghetti_Mafias", status: "Shortlisted" },
    { id: 7, name: "The Yield Agents", status: "Shortlisted" },
    { id: 8, name: "AgriPulse", status: "Shortlisted" },
    { id: 9, name: "HOOKED", status: "Shortlisted" },
    { id: 10, name: "Crivacers", status: "Shortlisted" },
    { id: 11, name: "Code Kinetix", status: "Shortlisted" },
    { id: 12, name: "Kalki", status: "Shortlisted" },
    { id: 13, name: "ZeroCode", status: "Shortlisted" },
    { id: 14, name: "Git Blame Me", status: "Shortlisted" },
    { id: 15, name: "CRONIX", status: "Shortlisted" },
    { id: 16, name: "Gram Pragati", status: "Shortlisted" },
    { id: 17, name: "Open Nexus", status: "Shortlisted" },
    { id: 18, name: "ENDURANCE", status: "Shortlisted" },
    { id: 19, name: "Echo Infinity", status: "Shortlisted" },
    { id: 20, name: "The Agri Techs", status: "Shortlisted" },
    { id: 21, name: "ERROR 404", status: "Shortlisted" },
    { id: 22, name: "DesignMinds", status: "Shortlisted" },
    { id: 23, name: "Meticura", status: "Shortlisted" },
    { id: 24, name: "Coffee & Code", status: "Shortlisted" },
    { id: 25, name: "HACKOPS", status: "Shortlisted" },
    { id: 26, name: "Code HiveX", status: "Shortlisted" },
    { id: 27, name: "MindForge", status: "Shortlisted" },
    { id: 28, name: "Generic", status: "Shortlisted" },
    { id: 29, name: "Innovator", status: "Shortlisted" },
    { id: 30, name: "The Reapers", status: "Shortlisted" },
    { id: 31, name: "ASTRAS", status: "Shortlisted" },
    { id: 32, name: "SnackOverflow01", status: "Shortlisted" },
    { id: 33, name: "Innovineers", status: "Shortlisted" },
    { id: 34, name: "Innovatrix", status: "Shortlisted" },
    { id: 35, name: "vru_fanclub", status: "Shortlisted" },
    { id: 36, name: "Runtime Revenge", status: "Shortlisted" },
    { id: 37, name: "Vishwakarma", status: "Shortlisted" },
    { id: 38, name: "Team Black 2.0", status: "Shortlisted" },
    { id: 39, name: "Agro X", status: "Shortlisted" },
    { id: 40, name: "Innovatrix", status: "Shortlisted" },
    { id: 41, name: "ANANTA", status: "Shortlisted" },
    { id: 42, name: "CyberNova", status: "Shortlisted" },
    { id: 43, name: "TechNova", status: "Shortlisted" },
    { id: 44, name: "Hypertuners", status: "Shortlisted" },
    { id: 45, name: "Astella", status: "Shortlisted" },
    { id: 46, name: "Kisan Setu", status: "Shortlisted" },
    { id: 47, name: "Om’s Team", status: "Shortlisted" },
    { id: 48, name: "God’s Plan", status: "Shortlisted" },
    { id: 49, name: "CodeSurge101", status: "Shortlisted" },
    { id: 50, name: "Legends", status: "Shortlisted" },
    { id: 51, name: "electron", status: "Shortlisted" },
    { id: 52, name: "Webble", status: "Shortlisted" },
    { id: 53, name: "Phynix Uprise", status: "Shortlisted" },
    { id: 54, name: "Troubleshooters", status: "Shortlisted" },
    { id: 55, name: "Kissan Fruit Jam", status: "Shortlisted" },
    { id: 56, name: "Procrastinators", status: "Shortlisted" },
    { id: 57, name: "Hexabit", status: "Shortlisted" },
    { id: 58, name: "Forecast404", status: "Shortlisted" },
    { id: 59, name: "Naive Doomers", status: "Shortlisted" },
    { id: 60, name: "TerraTech", status: "Shortlisted" },
    { id: 61, name: "Astrobytes", status: "Shortlisted" },
    { id: 62, name: "AgroNex", status: "Shortlisted" },
    { id: 63, name: "Golden Grainers", status: "Shortlisted" },
    { id: 64, name: "Apex Fusion", status: "Shortlisted" },
    { id: 65, name: "Blah Blah Blah", status: "Shortlisted" },
    { id: 66, name: "TeamHeist", status: "Shortlisted" },
    { id: 67, name: "GENESIS", status: "Shortlisted" },
    { id: 68, name: "Stranger Strings", status: "Shortlisted" },
    { id: 69, name: "CodeBreakers", status: "Shortlisted" },
    { id: 70, name: "CodeNova", status: "Shortlisted" },

    { id: 71, name: "The Boys", status: "Waitlisted" },
    { id: 72, name: "FarmerOS", status: "Waitlisted" },
    { id: 73, name: "Exstagium", status: "Waitlisted" },
    { id: 74, name: "Infinite Looper’s", status: "Waitlisted" },
    { id: 75, name: "Agri-Vultures", status: "Waitlisted" },
    { id: 76, name: "Code Conquers", status: "Waitlisted" },
    { id: 77, name: "Vyom", status: "Waitlisted" },
    { id: 78, name: "HackNova", status: "Waitlisted" },
    { id: 79, name: "CIRCUIT 25", status: "Waitlisted" },
    { id: 80, name: "Team Async", status: "Waitlisted" },
  ];

  /* ===================== STATE ===================== */
  const [teamFilter, setTeamFilter] = useState("All");
  const [teamSearch, setTeamSearch] = useState("");
  const [teamPage, setTeamPage] = useState(1);

  const teamsPerPage = 20;

  /* ===================== FILTER + SEARCH ===================== */
  const filteredTeams = teamData.filter((team) => {
    const matchesFilter =
      teamFilter === "All" || team.status === teamFilter;
    const matchesSearch = team.name
      .toLowerCase()
      .includes(teamSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredTeams.length / teamsPerPage) || 1;

  const currentTeams = filteredTeams.slice(
    (teamPage - 1) * teamsPerPage,
    teamPage * teamsPerPage
  );

  useEffect(() => {
    setTeamPage(1);
  }, [teamFilter, teamSearch]);

  /* ===================== JSX ===================== */
  return (
    <div className="min-h-screen pt-24 pb-20 bg-neutral-950 text-white px-6">
      <h2 className="text-3xl font-bold text-lime-400 text-center mb-10">
        Shortlisted & Waitlisted Teams
      </h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
        <div className="flex gap-3">
          {["All", "Shortlisted", "Waitlisted"].map((tab) => (
            <button
              key={tab}
              onClick={() => setTeamFilter(tab)}
              className={`px-6 py-2 rounded-full border font-semibold transition
                ${
                  teamFilter === tab
                    ? "bg-lime-400 text-black border-lime-400"
                    : "border-neutral-700 hover:bg-neutral-800"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Glassmorphic Search */}
        <input
          type="text"
          placeholder="Search team name..."
          value={teamSearch}
          onChange={(e) => setTeamSearch(e.target.value)}
          className="w-72 px-5 py-3 rounded-xl text-sm text-white
            bg-white/10 backdrop-blur-lg border border-white/20
            placeholder-neutral-300 focus:outline-none focus:border-lime-400"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-neutral-800 max-w-5xl mx-auto">
        <table className="w-full text-sm bg-neutral-900 border-collapse">
          <thead className="bg-neutral-800 text-lime-400">
            <tr>
              <th className="p-4 border border-neutral-700 text-left">#</th>
              <th className="p-4 border border-neutral-700 text-left">
                Team Name
              </th>
              <th className="p-4 border border-neutral-700 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {currentTeams.map((team, index) => (
              <tr
                key={team.id}
                className="hover:bg-neutral-800 transition"
              >
                <td className="p-4 border border-neutral-700">
                  {(teamPage - 1) * teamsPerPage + index + 1}
                </td>
                <td className="p-4 border border-neutral-700 font-medium">
                  {team.name}
                </td>
                <td className="p-4 border border-neutral-700">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-bold
                      ${
                        team.status === "Shortlisted"
                          ? "bg-emerald-500 text-black"
                          : "bg-amber-400 text-black"
                      }`}
                  >
                    {team.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-8 mt-10">
        <button
          onClick={() => setTeamPage((p) => Math.max(p - 1, 1))}
          disabled={teamPage === 1}
          className="px-6 py-2 rounded-lg border disabled:opacity-40 hover:bg-neutral-800"
        >
          Previous
        </button>

        <span className="text-lime-400 font-bold">
          Page {teamPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setTeamPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={teamPage === totalPages}
          className="px-6 py-2 rounded-lg border disabled:opacity-40 hover:bg-neutral-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProblemStatements;
