"use client";

export const dynamic = "force-static";

import { useState, useMemo } from "react";
import { Character } from "@/types/rotation";
import clsx from "clsx";
import { ChevronsDown, ChevronsUp } from "lucide-react";

interface CharacterPickerProps {
  characters: Character[];
  value?: Character;
  onChange: (character: Character) => void;
}

export function CharacterPicker({ characters, value, onChange }: CharacterPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Filter characters based on search
  const filtered = useMemo(() => {
    const lower = search.toLowerCase();
    return characters.filter(
      (c) => c.name.toLowerCase().includes(lower)
    );
  }, [search, characters]);

  // Handler when user selects character
  const handleSelect = (char: Character) => {
    onChange(char);
    setIsOpen(false); // auto collapse
    setSearch("");    // reset search
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Header / Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-slate-800 px-3 py-2 rounded-lg border border-white/10 text-sm font-medium hover:bg-slate-700"
      >
        {value ? value.name : "Select Character"}
        {isOpen ? <ChevronsUp size={16} /> : <ChevronsDown size={16} />}
      </button>

      {/* Collapsible content */}
      {isOpen && (
        <div className="bg-slate-900 border border-white/10 rounded-lg p-3 flex flex-col gap-3 max-h-64 overflow-y-auto">
          {/* Search bar */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-slate-800 border border-white/20 rounded px-2 py-1 text-sm w-full"
          />

          {/* Character grid */}
          <div className="grid grid-cols-4 gap-3">
            {filtered.map((char) => {
              const selected = value?.id === char.id;
              return (
                <button
                  key={char.id}
                  type="button"
                  onClick={() => handleSelect(char)}
                  className={clsx(
                    "relative rounded-xl overflow-hidden border-2 transition focus:outline-none",
                    selected
                      ? "border-indigo-500 ring-2 ring-indigo-500/40"
                      : "border-white/10 hover:border-white/30"
                  )}
                >
                  <img
                    src={char.image}
                    alt={char.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/characters/placeholder.png";
                    }}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-black/60 text-xs text-white text-center py-1">
                    {char.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="text-xs text-white/50 text-center">No characters found</p>
          )}
        </div>
      )}
    </div>
  );
}
