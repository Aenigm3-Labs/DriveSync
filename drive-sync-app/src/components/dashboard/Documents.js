import React, { useState } from "react";
import "../../assets/styles/Documents.css";

const Documents = () => {
  // ✅ Sample Document Data from Different Sources
  const sampleData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `File ${index + 1}`,
    type: index % 3 === 0 ? "folder" : index % 3 === 1 ? "file" : "sheet",
    access: index % 2 === 0 ? "Team Alpha" : "Team Beta",
    path: `Folder ${Math.ceil(index / 10)} > File ${index + 1}`,
    source: index % 3 === 0 ? "Google Drive" : index % 3 === 1 ? "OneDrive" : "Dropbox",
  }));

  const [documents, setDocuments] = useState(sampleData);
  const [viewMode, setViewMode] = useState("list"); // ✅ List, Tree, Grid
  const [filters, setFilters] = useState({ type: "All", access: "All", source: "All" });
  const [visibleColumns, setVisibleColumns] = useState(["name", "type", "access", "path", "source"]);

  // ✅ Handle Filtering
  const filteredDocs = documents.filter((doc) => {
    return (
      (filters.type === "All" || doc.type === filters.type) &&
      (filters.access === "All" || doc.access === filters.access) &&
      (filters.source === "All" || doc.source === filters.source)
    );
  });

  return (
    <div className="documents-container">
      <h2>Document Library</h2>

      {/* ✅ Filters & View Toggles */}
      <div className="top-bar">
        <div className="filters">
          <label>Type:</label>
          <select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
            <option>All</option>
            <option value="folder">Folder</option>
            <option value="file">File</option>
            <option value="sheet">Sheet</option>
          </select>

          <label>Access:</label>
          <select onChange={(e) => setFilters({ ...filters, access: e.target.value })}>
            <option>All</option>
            <option value="Team Alpha">Team Alpha</option>
            <option value="Team Beta">Team Beta</option>
          </select>

          <label>Source:</label>
          <select onChange={(e) => setFilters({ ...filters, source: e.target.value })}>
            <option>All</option>
            <option value="Google Drive">Google Drive</option>
            <option value="OneDrive">OneDrive</option>
            <option value="Dropbox">Dropbox</option>
          </select>
        </div>

        {/* ✅ View Modes */}
        <div className="view-toggles">
          <button onClick={() => setViewMode("list")}>List View</button>
          <button onClick={() => setViewMode("tree")}>Tree View</button>
          <button onClick={() => setViewMode("grid")}>Grid View</button>
        </div>
      </div>

      {/* ✅ Column Visibility Toggles */}
      <div className="column-controls">
        {["name", "type", "access", "path", "source"].map((col) => (
          <label key={col}>
            <input
              type="checkbox"
              checked={visibleColumns.includes(col)}
              onChange={() =>
                setVisibleColumns(
                  visibleColumns.includes(col)
                    ? visibleColumns.filter((c) => c !== col)
                    : [...visibleColumns, col]
                )
              }
            />
            {col.charAt(0).toUpperCase() + col.slice(1)}
          </label>
        ))}
      </div>

      {/* ✅ Document Display */}
      <div className="documents-view">
        {viewMode === "list" && (
          <table className="document-table">
            <thead>
              <tr>
                {visibleColumns.includes("name") && <th>Name</th>}
                {visibleColumns.includes("type") && <th>Type</th>}
                {visibleColumns.includes("access") && <th>Access</th>}
                {visibleColumns.includes("path") && <th>Path</th>}
                {visibleColumns.includes("source") && <th>Source</th>}
              </tr>
            </thead>
            <tbody>
              {filteredDocs.map((doc) => (
                <tr key={doc.id}>
                  {visibleColumns.includes("name") && <td>{doc.name}</td>}
                  {visibleColumns.includes("type") && <td>{doc.type}</td>}
                  {visibleColumns.includes("access") && <td>{doc.access}</td>}
                  {visibleColumns.includes("path") && <td>{doc.path}</td>}
                  {visibleColumns.includes("source") && <td>{doc.source}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {viewMode === "tree" && (
          <ul className="tree-view">
            {filteredDocs.map((doc) => (
              <li key={doc.id}>
                {doc.type === "folder" ? "📁" : "📄"} {doc.name} ({doc.source})
              </li>
            ))}
          </ul>
        )}

        {viewMode === "grid" && (
          <div className="grid-view">
            {filteredDocs.map((doc) => (
              <div key={doc.id} className="grid-item">
                <div className="grid-icon">{doc.type === "folder" ? "📁" : "📄"}</div>
                <p>{doc.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Documents;
