import { useState } from "react";
import { FiSearch, FiExternalLink } from "react-icons/fi";
import { RULES_DATA } from "./rulesData";

const Rules = () => {
const [query, setQuery] = useState("");

const filteredRules = RULES_DATA.map(section => ({
...section,
items: section.items.filter(rule =>
    rule.toLowerCase().includes(query.toLowerCase())
)
})).filter(section => section.items.length > 0);

return (
<div className="min-h-screen bg-black text-yellow-400 px-6 py-24">
    <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <h1 className="text-3xl md:text-4xl tracking-wide">
        DIESTA’26 – Rules & Regulations
        </h1>

        <a
        href="https://drive.google.com/file/d/1Dktj6enhAP6MoKoustfHz0UNXx4DHVRf/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-yellow-400 px-4 py-2 rounded
                    bg-yellow-400 text-black transition"
        >
        Open Full Rulebook (PDF)
        <FiExternalLink />
        </a>
    </div>

    {/* Search */}
    <div className="relative mb-10">
        <FiSearch className="absolute left-3 top-3 text-white" />
        <input
        type="text"
        placeholder="Search rules, events, penalties..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-black border border-white rounded
                    pl-10 pr-4 py-2"
        />
    </div>

    {/* Rules Content */}
    <div className="space-y-10">
        {filteredRules.length ? (
        filteredRules.map((section, i) => (
            <div key={i}>
            <h2 className="text-2xl font-light mb-3 border-b border-yellow-400 pb-1">
                {section.category}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-white">
                {section.items.map((rule, idx) => (
                <li key={idx}>{rule}</li>
                ))}
            </ul>
            </div>
        ))
        ) : (
        <p className="italic text-yellow-300">
            No matching rules found.
        </p>
        )}
    </div>

    </div>
</div>
);
};

export default Rules;
