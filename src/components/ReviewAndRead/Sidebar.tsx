interface SidebarProps{
    onCategorySelect: (category: string) => void;
  };
  
export default function Sidebar({ onCategorySelect }: SidebarProps) {
const categories = ["Fiction", "Non-Fiction", "Science", "Biography", "Self-development"];

return (
    <aside className="fixed top-0 left-0 h-full w-70 bg-black text-white p-5 pt-20">
    <h2 className="text-xl font-bold mb-4">Categories</h2>
    <ul className="space-y-2 cursor-pointer ">
        {categories.map((cat) => (
        <li
            key={cat}
            className="cursor-pointer hover:text-amber-400"
            onClick={() => onCategorySelect(cat)}
        >
            {cat}
        </li>
        ))}
    </ul>
    </aside>
);
};
