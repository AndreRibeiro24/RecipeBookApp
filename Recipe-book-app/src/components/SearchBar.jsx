export default function SearchBar({searchQuery, onSearch}) {
  return (
    <div className="search-bar">
        <span className="search-bar-icon">🔍</span>
        <input
        type="text"
        placeholder="Search for recipe name, ingredients, tags, etc.."
        value={searchQuery}
        onChange={(e)=> onSearch(e.target.value)}
        />
    </div>
  )
}
